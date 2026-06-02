// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://jlhhdrxmqwwtqeuxowyj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_OBQ3GuNPNqBFbHHf7L7uVA_x-z3B-Pj';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin }
  });
  if (error) console.error('Erro login:', error);
}

export async function signOut() {
  await supabase.auth.signOut();
  window.location.reload();
}

// ── Exercícios ──────────────────────────────────────────
export async function loadExercises(userId) {
  const { data, error } = await supabase
    .from('exercise_entries')
    .select('entry_key, completed')
    .eq('user_id', userId);
  if (error) { console.error(error); return {}; }
  return Object.fromEntries(data.map(r => [r.entry_key, r.completed]));
}

export async function toggleExercise(userId, key, completed) {
  const { error } = await supabase
    .from('exercise_entries')
    .upsert({ user_id: userId, entry_key: key, completed, updated_at: new Date().toISOString() },
             { onConflict: 'user_id,entry_key' });
  if (error) console.error(error);
}

// ── Rotina diária ────────────────────────────────────────
export async function loadRoutine(userId) {
  const { data, error } = await supabase
    .from('routine_entries')
    .select('entry_key, completed')
    .eq('user_id', userId);
  if (error) { console.error(error); return {}; }
  return Object.fromEntries(data.map(r => [r.entry_key, r.completed]));
}

export async function toggleRoutine(userId, key, completed) {
  const { error } = await supabase
    .from('routine_entries')
    .upsert({ user_id: userId, entry_key: key, completed, updated_at: new Date().toISOString() },
             { onConflict: 'user_id,entry_key' });
  if (error) console.error(error);
}
