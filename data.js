// data.js — Trilha de Estudos Daniel Miranda
export const TRILHA_START_DATE = '2026-06-08'; // Segunda-feira da semana 1

export const fases = [
  { id: 1, nome: 'Estratégia Analítica', cor: '#3B82F6', semanas: [1,6] },
  { id: 2, nome: 'IA + Agentes + Anthropic', cor: '#8B5CF6', semanas: [7,13] },
  { id: 3, nome: 'Arquitetura de Dados', cor: '#10B981', semanas: [14,20] },
  { id: 4, nome: 'Machine Learning', cor: '#F59E0B', semanas: [21,30] },
  { id: 5, nome: 'Consultoria + Autoridade', cor: '#EF4444', semanas: [31,36] },
];

export const semanas = [
  // ── FASE 1 ─────────────────────────────────────────────
  {
    id: 1, fase: 1,
    titulo: 'Power BI Estratégico — Fundamentos',
    conteudo: [
      'Microsoft Learn — Data Analyst PL-300: módulos 1 e 2',
      'YouTube Meigarom: "KPIs que importam de verdade"',
      'Leitura: Storytelling with Data (blog da autora — cap. 1 e 2)',
    ],
    exercicios: [
      'Crie um relatório Power BI com os dados de vendas do seu trabalho atual',
      'Liste 5 KPIs do seu setor e escreva 1 pergunta de negócio para cada',
      'Refaça um dashboard antigo aplicando os princípios de storytelling',
    ],
    certificacao: null,
    projeto: 'Publique no GitHub o primeiro artigo do DataHub: "Por que KPI ruim mata decisão boa"',
  },
  {
    id: 2, fase: 1,
    titulo: 'SQL Avançado para Análise',
    conteudo: [
      'YouTube Programação Dinâmica: SQL Window Functions (playlist completa)',
      'Mode Analytics: SQL School — Advanced (gratuito)',
      'StrataScratch: 10 exercícios nível médio',
    ],
    exercicios: [
      'Resolva 10 desafios SQL no StrataScratch (nível médio)',
      'Escreva uma query com ROW_NUMBER, RANK e DENSE_RANK sobre dados reais',
      'Crie uma análise de cohort simples em SQL puro',
      'Documente as queries no GitHub com comentários explicando o raciocínio',
    ],
    certificacao: null,
    projeto: 'Adicione seção SQL ao DataHub com uma análise real comentada',
  },
  {
    id: 3, fase: 1,
    titulo: 'Estatística Aplicada a Negócios',
    conteudo: [
      'StatQuest: Probabilidade, Distribuições e Testes de Hipótese (playlist)',
      'Google Data Analytics (Coursera audit): semana de estatística',
      'Artigo: "Como interpretar p-valor sem enganar seu gestor"',
    ],
    exercicios: [
      'Realize um teste A/B simples com dados do Kaggle e interprete o resultado',
      'Calcule média, mediana, desvio padrão de um dataset real no Python/Pandas',
      'Escreva um parágrafo explicando um resultado estatístico para um não-técnico',
    ],
    certificacao: 'Escola Virtual GOV.BR — Análise de Dados como Suporte à Decisão',
    projeto: 'Artigo DataHub: "Teste A/B: o que é, como funciona e quando usar"',
  },
  {
    id: 4, fase: 1,
    titulo: 'Análise de Negócios — Cohort, Funil e LTV',
    conteudo: [
      'YouTube Meigarom: Análise de Cohort, Funil de Vendas, LTV e Churn',
      'freeCodeCamp: Data Analysis with Python — módulo Pandas avançado',
      'Kaggle Learn: Pandas (módulos 4 e 5)',
    ],
    exercicios: [
      'Monte uma análise de cohort completa em Python com dataset do Kaggle',
      'Calcule LTV e Churn de um e-commerce fictício',
      'Construa um funil de vendas com visualização em Plotly',
      'Interprete os resultados como se fosse apresentar para o dono do negócio',
    ],
    certificacao: null,
    projeto: 'Adicione notebook de Cohort + Funil ao GitHub com README explicativo',
  },
  {
    id: 5, fase: 1,
    titulo: 'Visualização Avançada e Storytelling',
    conteudo: [
      'Microsoft Learn: Visualizações avançadas no Power BI',
      'YouTube: "Como criar dashboards que contam histórias"',
      'Seaborn + Plotly: documentação oficial + exemplos',
    ],
    exercicios: [
      'Recrie 3 gráficos ruins que você já viu no trabalho, agora bem feitos',
      'Monte um dashboard no Looker Studio com dados públicos do IBGE',
      'Crie uma apresentação de 5 slides com dados reais e storytelling aplicado',
    ],
    certificacao: null,
    projeto: 'Artigo DataHub: "5 erros de visualização que todo analista comete"',
  },
  {
    id: 6, fase: 1,
    titulo: 'Projeto Final Fase 1 + Certificação Google',
    conteudo: [
      'Google Data Analytics Certificate (Coursera audit): revisão geral',
      'Revisão dos módulos PL-300 no Microsoft Learn',
    ],
    exercicios: [
      'Monte um projeto completo de análise: do dado bruto ao insight final',
      'Grave um vídeo de 5min explicando sua análise (prática de comunicação)',
      'Escreva o README completo do projeto no GitHub',
      'Publique no LinkedIn sobre o projeto com aprendizados',
    ],
    certificacao: 'Google Data Analytics Certificate (finalizar módulos do audit)',
    projeto: 'Projeto completo Fase 1 no GitHub — case de análise end-to-end',
  },

  // ── FASE 2 ─────────────────────────────────────────────
  {
    id: 7, fase: 2,
    titulo: 'Fundamentos de IA — Elements of AI + AI Fluency',
    conteudo: [
      'Elements of AI (Universidade de Helsinque) — capítulos 1 a 3',
      'Anthropic Academy: AI Fluency: Framework & Foundations',
      'Anthropic Academy: Claude 101',
    ],
    exercicios: [
      'Complete os capítulos 1–3 do Elements of AI com os exercícios do site',
      'Liste 10 tarefas do seu trabalho que a IA poderia acelerar',
      'Use o Claude para analisar um dataset e documente o prompt + resultado',
    ],
    certificacao: 'Elements of AI — certificado (ao concluir o curso completo)',
    projeto: 'Artigo DataHub: "Como a IA está mudando o trabalho do analista de dados"',
  },
  {
    id: 8, fase: 2,
    titulo: 'Prompt Engineering e Uso Profissional do Claude',
    conteudo: [
      'Anthropic Academy: Introduction to Claude Cowork',
      'Anthropic Academy: AI Capabilities and Limitations',
      'Coursera (Vanderbilt, audit): Prompt Engineering for ChatGPT',
    ],
    exercicios: [
      'Crie 5 prompts estruturados para análise de dados e documente os resultados',
      'Use o Claude para gerar um rascunho de artigo e depois edite com sua voz',
      'Teste o mesmo prompt em 3 variações e compare os resultados',
      'Monte uma biblioteca de prompts úteis para consultoria de dados no GitHub',
    ],
    certificacao: 'Google Cloud Skills Boost: Generative AI Fundamentals (badge)',
    projeto: 'Publique no DataHub: biblioteca de prompts para analistas de dados',
  },
  {
    id: 9, fase: 2,
    titulo: 'Spec-Driven Development com IA',
    conteudo: [
      'YouTube Attekita Dev: vídeo sobre Spec-Driven Development (https://youtu.be/cAcGrs7RHBM)',
      'GitHub Spec Kit: documentação oficial (open source)',
      'Anthropic Academy: Claude Code in Action',
    ],
    exercicios: [
      'Crie spec.md, plan.md e tasks.md para o projeto DataHub usando o método da Carol',
      'Use Claude Code para gerar código a partir de um spec bem escrito',
      'Documente um projeto antigo seu usando Spec-Driven Development',
    ],
    certificacao: null,
    projeto: 'Adicione spec.md oficial ao repositório trilha-daniel-app no GitHub',
  },
  {
    id: 10, fase: 2,
    titulo: 'Python para IA — APIs e Automação',
    conteudo: [
      'Anthropic Academy: Building with the Claude API (início)',
      'Documentação oficial da Anthropic API (Python SDK)',
      'freeCodeCamp: Python básico para automação',
    ],
    exercicios: [
      'Instale o SDK da Anthropic e faça sua primeira chamada à API',
      'Crie um script Python que recebe uma pergunta e retorna uma análise de dados',
      'Automatize a geração de um relatório semanal simples com Claude API',
      'Suba o script no GitHub com README explicando como usar',
    ],
    certificacao: null,
    projeto: 'Artigo DataHub: "Criei um assistente de análise de dados com IA — veja como"',
  },
  {
    id: 11, fase: 2,
    titulo: 'Model Context Protocol (MCP)',
    conteudo: [
      'Anthropic Academy: Introduction to Model Context Protocol (MCP)',
      'YouTube Attekita Dev: canal completo sobre MCP e agents',
      'Documentação oficial do MCP (modelcontextprotocol.io)',
    ],
    exercicios: [
      'Configure um servidor MCP local e conecte ao Claude Desktop',
      'Crie um MCP server simples que lê um arquivo CSV e responde perguntas',
      'Conecte o Claude a uma planilha Google Sheets via MCP',
      'Documente o processo no GitHub com prints do resultado',
    ],
    certificacao: 'Anthropic Academy: Introduction to MCP (certificado)',
    projeto: 'Demo DataHub: "Conectei o Claude ao meu banco de dados — aqui está o resultado"',
  },
  {
    id: 12, fase: 2,
    titulo: 'Agentes de IA com LangChain',
    conteudo: [
      'Anthropic Academy: Introduction to Agent Skills',
      'LangChain: documentação oficial + quickstart',
      'YouTube: "Building AI Agents with LangChain" (freeCodeCamp)',
    ],
    exercicios: [
      'Monte um agente simples com LangChain que consulta dados e retorna insights',
      'Crie um agente que responde perguntas sobre um dataset em linguagem natural',
      'Integre o agente com uma API pública (ex: dados do IBGE via sidrapy)',
      'Teste o agente com 10 perguntas reais de negócio e avalie a qualidade',
    ],
    certificacao: 'Anthropic Academy: Agent Skills (certificado)',
    projeto: 'Suba o agente no GitHub como produto real da consultoria',
  },
  {
    id: 13, fase: 2,
    titulo: 'Projeto Final Fase 2 — Agente de Conteúdo DataHub',
    conteudo: [
      'Revisão geral da Anthropic Academy',
      'AI for Everyone (DeepLearning.AI, Coursera audit) — revisão',
    ],
    exercicios: [
      'Monte o agente de conteúdo completo: recebe tema → pesquisa → rascunha artigo',
      'Configure o agente para monitorar KPIs e gerar alertas automáticos',
      'Teste com um cliente fictício e documente o fluxo completo',
      'Publique o case completo no DataHub e LinkedIn',
    ],
    certificacao: 'Anthropic Academy: Building with the Claude API (certificado)',
    projeto: 'Agente de conteúdo DataHub funcionando e documentado no GitHub',
  },

  // ── FASE 3 ─────────────────────────────────────────────
    {
    id: 14, fase: 3,
    titulo: 'Fundamentos de Arquitetura de Dados',
    conteudo: [
      'LABDATA/FIA: Arquitetura de Solução em Dados (gratuito)',
      'Data Science Academy: Engenharia de Dados — módulo 1',
      'Artigo: "Data Lake vs Data Warehouse vs Data Lakehouse"',
    ],
    exercicios: [
      'Desenhe a arquitetura de dados de uma empresa fictícia (use draw.io gratuito)',
      'Liste as diferenças entre Data Lake, DW e Lakehouse com exemplos práticos',
      'Mapeie a arquitetura de dados do seu trabalho atual (mesmo que simples)',
    ],
    certificacao: 'LABDATA/FIA: Arquitetura de Solução em Dados (certificado gratuito)',
    projeto: 'Artigo DataHub: "Arquitetura de dados para PMEs — o que você precisa saber"',
  },
        {
    id: 15, fase: 3,
    titulo: 'Modelagem Dimensional — Kimball vs Inmon',
    conteudo: [
      'YouTube Luciano Galvão: Modelagem Dimensional na prática',
      'Data Science Academy: Engenharia de Dados — módulo 2',
      'Documentação dbt: "What is a data model?"',
    ],
    exercicios: [
      'Modele um DW simples com fatos e dimensões para um e-commerce',
      'Compare Kimball e Inmon: escreva 1 parágrafo sobre quando usar cada um',
      'Crie um diagrama estrela (star schema) no draw.io',
      'Documente o modelo no GitHub com README explicativo',
    ],
    certificacao: null,
    projeto: 'Artigo DataHub: "Star Schema na prática — modelando um DW do zero"',
  },
  {
    id: 16, fase: 3,
    titulo: 'dbt — Transformação de Dados em SQL',
    conteudo: [
      'dbt Learn: dbt Fundamentals (curso oficial gratuito)',
      'YouTube Luciano Galvão: dbt na prática',
      'Documentação dbt: models, sources, tests, documentation',
    ],
    exercicios: [
      'Complete o curso dbt Fundamentals com todos os exercícios práticos',
      'Crie um projeto dbt local com pelo menos 3 models em camadas (staging/intermediate/mart)',
      'Adicione testes de qualidade (not_null, unique, accepted_values) nos models',
      'Gere a documentação automática do dbt e explore o DAG',
    ],
    certificacao: 'dbt Fundamentals (certificado oficial gratuito)',
    projeto: 'Suba projeto dbt no GitHub com DAG documentado',
  },
  {
    id: 17, fase: 3,
    titulo: 'BigQuery + Google Cloud para Analistas',
    conteudo: [
      'Google Cloud Skills Boost: BigQuery for Data Analysts',
      'BigQuery: documentação oficial — particionamento e clustering',
      'YouTube: "BigQuery do zero ao avançado" (Hashtag Treinamentos)',
    ],
    exercicios: [
      'Complete o path BigQuery for Data Analysts no Google Cloud Skills Boost',
      'Carregue um dataset público do BigQuery e escreva 5 queries analíticas',
      'Crie uma tabela particionada e compare o custo vs tabela normal',
      'Conecte o BigQuery ao Looker Studio e monte um dashboard',
    ],
    certificacao: 'Google Cloud Skills Boost: BigQuery for Data Analysts (badge)',
    projeto: 'Artigo DataHub: "BigQuery para analistas — como economizar e performar"',
  },
  {
    id: 18, fase: 3,
    titulo: 'Pipelines de Dados — ETL e ELT',
    conteudo: [
      'Data Science Academy: Engenharia de Dados — módulo ETL',
      'YouTube Luciano Galvão: Airflow básico',
      'Documentação Apache Airflow: quickstart',
    ],
    exercicios: [
      'Monte um pipeline ETL simples em Python: extrai de API → transforma → salva no BigQuery',
      'Use a biblioteca bcb (Banco Central) para ingerir dados de inflação automaticamente',
      'Crie um DAG básico no Airflow local com 3 tasks encadeadas',
      'Documente o pipeline no GitHub com diagrama de fluxo',
    ],
    certificacao: 'Data Science Academy: Engenharia de Dados (certificado gratuito)',
    projeto: 'Demo consultoria: pipeline que atualiza dashboard automaticamente todo dia',
  },
  {
    id: 19, fase: 3,
    titulo: 'Qualidade de Dados e Governança',
    conteudo: [
      'dbt Learn: Advanced Testing e Documentation',
      'Artigo: "Data Quality: the silent killer of analytics"',
      'YouTube: "Governança de dados para analistas" (DSA)',
    ],
    exercicios: [
      'Implemente testes de qualidade em um dataset real com dbt ou Great Expectations',
      'Crie um data dictionary para um projeto seu (pode ser simples no Notion)',
      'Mapeie 5 problemas de qualidade de dados que já encontrou no trabalho',
      'Proponha um processo de governança para uma PME fictícia',
    ],
    certificacao: null,
    projeto: 'Artigo DataHub: "Dados sujos matam decisões — como garantir qualidade"',
  },
  {
    id: 20, fase: 3,
    titulo: 'Projeto Final Fase 3 — Arquitetura Completa',
    conteudo: [
      'Revisão geral: LABDATA, dbt, BigQuery, Airflow',
      'Case study: arquitetura de dados de uma empresa real (artigo Medium)',
    ],
    exercicios: [
      'Monte uma arquitetura completa: ingestão → Lake → dbt → DW → dashboard',
      'Use dados públicos reais (IBGE, Banco Central) como fonte',
      'Documente tudo: diagrama, README, data dictionary',
      'Apresente a arquitetura em um vídeo de 10min (prática de comunicação técnica)',
    ],
    certificacao: null,
    projeto: 'Case completo de arquitetura no GitHub — produto real para consultoria',
  },

  // ── FASE 4 ─────────────────────────────────────────────
  {
    id: 21, fase: 4,
    titulo: 'Python para ML — Fundamentos',
    conteudo: [
      'Kaggle Learn: Python + Pandas (revisão rápida)',
      'freeCodeCamp: Data Analysis with Python (módulo ML intro)',
      'Documentação scikit-learn: Getting Started',
    ],
    exercicios: [
      'Complete os módulos Python e Pandas do Kaggle Learn',
      'Implemente regressão linear do zero (sem biblioteca) para entender a matemática',
      'Use scikit-learn para treinar seu primeiro modelo de regressão',
      'Avalie o modelo com MAE, RMSE e R² e interprete os resultados',
    ],
    certificacao: 'freeCodeCamp: Data Analysis with Python (certificado gratuito)',
    projeto: 'Artigo DataHub: "Meu primeiro modelo de ML — o que aprendi"',
  },
  {
    id: 22, fase: 4,
    titulo: 'Classificação e Árvores de Decisão',
    conteudo: [
      'Kaggle Learn: Intro to Machine Learning (completo)',
      'StatQuest: Decision Trees, Random Forest, Gradient Boosting (playlist)',
      'scikit-learn: classification tutorial',
    ],
    exercicios: [
      'Complete o curso Intro to Machine Learning do Kaggle com todos os exercícios',
      'Treine um modelo de classificação para prever churn de clientes',
      'Compare Decision Tree, Random Forest e Gradient Boosting no mesmo dataset',
      'Gere uma matriz de confusão e interprete precisão, recall e F1',
    ],
    certificacao: null,
    projeto: 'Notebook de classificação no GitHub com análise completa e comentada',
  },
  {
    id: 23, fase: 4,
    titulo: 'Feature Engineering e Preparação de Dados',
    conteudo: [
      'Kaggle Learn: Feature Engineering (curso completo)',
      'Artigo: "Feature Engineering para dados de negócios"',
      'scikit-learn: preprocessing e pipelines',
    ],
    exercicios: [
      'Complete o curso Feature Engineering do Kaggle com todos os exercícios',
      'Aplique feature engineering em um dataset real e meça o impacto no modelo',
      'Crie um pipeline scikit-learn completo: preprocessamento + modelo + avaliação',
      'Trate dados nulos, outliers e variáveis categóricas de formas diferentes e compare',
    ],
    certificacao: null,
    projeto: 'Artigo DataHub: "Feature Engineering — o segredo dos bons modelos de ML"',
  },
  {
    id: 24, fase: 4,
    titulo: 'Séries Temporais — Forecasting',
    conteudo: [
      'YouTube StatQuest: Time Series Analysis',
      'Documentação Prophet (Meta): quickstart',
      'Kaggle: Time Series course (completo)',
    ],
    exercicios: [
      'Complete o curso de Time Series do Kaggle',
      'Faça forecast de vendas usando Prophet com dados reais ou públicos',
      'Identifique tendência, sazonalidade e ruído em uma série temporal',
      'Compare Prophet vs ARIMA simples no mesmo dataset',
    ],
    certificacao: null,
    projeto: 'Demo consultoria: forecast de demanda para pequeno comércio',
  },
  {
    id: 25, fase: 4,
    titulo: 'Clustering e Segmentação de Clientes',
    conteudo: [
      'StatQuest: K-Means, DBSCAN, Hierarchical Clustering',
      'scikit-learn: clustering tutorial',
      'Artigo: "RFM Analysis — segmentando clientes com dados"',
    ],
    exercicios: [
      'Implemente análise RFM em Python para segmentar clientes de um e-commerce',
      'Use K-Means para segmentar clientes e interprete os clusters para negócio',
      'Visualize os clusters com PCA em 2D usando Matplotlib',
      'Escreva recomendações de negócio para cada cluster identificado',
    ],
    certificacao: null,
    projeto: 'Artigo DataHub: "Segmentação de clientes com ML — do dado à estratégia"',
  },
  {
    id: 26, fase: 4,
    titulo: 'NLP — Análise de Texto e Sentimentos',
    conteudo: [
      'YouTube: "NLP com Python do zero" (freeCodeCamp)',
      'Kaggle Learn: NLP (curso completo)',
      'Documentação NLTK e spaCy: primeiros passos',
    ],
    exercicios: [
      'Complete o curso NLP do Kaggle',
      'Faça análise de sentimentos em reviews de produtos do Mercado Livre',
      'Implemente TF-IDF para classificar textos de reclamações de clientes',
      'Use a API do Claude para análise de sentimentos e compare com modelo próprio',
    ],
    certificacao: null,
    projeto: 'Demo consultoria: análise de sentimentos de reviews para sellers do ML',
  },
  {
    id: 27, fase: 4,
    titulo: 'Google Advanced Data Analytics',
    conteudo: [
      'Google Advanced Data Analytics (Coursera audit): módulos de ML aplicado',
      'Revisão: regressão logística, árvores, clustering no contexto de negócios',
    ],
    exercicios: [
      'Complete os módulos de ML do Google Advanced Data Analytics',
      'Aplique regressão logística para prever inadimplência em dataset público',
      'Monte um relatório executivo com os achados de um modelo de ML',
      'Traduza métricas técnicas (AUC, F1) em linguagem de negócio',
    ],
    certificacao: 'IBM: Python for Data Science AI & Dev (Coursera audit — badge)',
    projeto: 'Artigo DataHub: "Como apresentar resultados de ML para gestores"',
  },
  {
    id: 28, fase: 4,
    titulo: 'Machine Learning para Consultoria',
    conteudo: [
      'Artigo: "ML products for small businesses"',
      'YouTube: "Como vender projetos de ML para PMEs"',
      'Documentação Streamlit: deploy de modelos (gratuito)',
    ],
    exercicios: [
      'Monte um app Streamlit simples que recebe dados e retorna predição',
      'Crie uma proposta comercial para um projeto de ML para uma PME fictícia',
      'Calcule o ROI estimado do modelo para o cliente',
      'Faça deploy do app Streamlit gratuitamente e compartilhe o link',
    ],
    certificacao: null,
    projeto: 'Demo consultoria: app de predição de churn deployado e funcional',
  },
  {
    id: 29, fase: 4,
    titulo: 'HarvardX Data Science — Revisão e Aprofundamento',
    conteudo: [
      'HarvardX: Data Science (edX audit) — módulos de inferência estatística',
      'HarvardX: Visualização de dados com ggplot (conceitos adaptados para Python)',
    ],
    exercicios: [
      'Complete os módulos selecionados do HarvardX em modo audit',
      'Refaça uma análise anterior aplicando rigor estatístico do HarvardX',
      'Escreva um artigo técnico com linguagem acadêmica leve',
    ],
    certificacao: 'HarvardX Data Science (audit gratuito — aprendizado documentado)',
    projeto: 'Artigo DataHub com referências acadêmicas — eleva autoridade do canal',
  },
  {
    id: 30, fase: 4,
    titulo: 'Projeto Final Fase 4 — ML End-to-End',
    conteudo: [
      'Revisão geral de todos os algoritmos estudados',
      'Case real: escolha um problema do seu trabalho ou consultoria',
    ],
    exercicios: [
      'Monte um projeto ML completo: problema → dados → modelo → deploy → apresentação',
      'Documente cada decisão técnica e o porquê de cada escolha',
      'Apresente em vídeo de 15min como se fosse para um cliente real',
      'Publique no LinkedIn e DataHub com todos os links',
    ],
    certificacao: 'Machine Learning Fundamentals — Data Science Academy (gratuito)',
    projeto: 'Projeto ML end-to-end no GitHub — peça principal do portfólio',
  },

  // ── FASE 5 ─────────────────────────────────────────────
  {
    id: 31, fase: 5,
    titulo: 'Posicionamento e Autoridade em Dados',
    conteudo: [
      'YouTube Hashtag Treinamentos: "Como se tornar referência em BI"',
      'Livro: "Building a StoryBrand" (resumo gratuito no YouTube)',
      'Artigo: "Como consultores de dados se posicionam no LinkedIn"',
    ],
    exercicios: [
      'Reescreva seu headline do LinkedIn com posicionamento claro',
      'Defina seu nicho: para quem você é o especialista? (sellers ML? PMEs? varejo?)',
      'Planeje 4 semanas de conteúdo para o DataHub com temas e formatos',
      'Publique 1 artigo por semana durante toda a Fase 5',
    ],
    certificacao: null,
    projeto: 'DataHub com identidade visual definida, About page e 5 artigos public     projeto: 'DataHub com identidade visual definida, About page e 5 artigos publicados',
  },
  {
    id: 32, fase: 5,
    titulo: 'Consultoria — Precificação e Proposta Comercial',
    conteudo: [
      'YouTube Hashtag Treinamentos: "Como precificar projetos de BI"',
      'Artigo: "Value-based pricing para consultores de dados"',
      'Workana e Upwork: análise de propostas vencedoras na área de dados',
    ],
    exercicios: [
      'Monte sua tabela de preços para 3 serviços (dashboard, pipeline, agente IA)',
      'Escreva uma proposta comercial completa para um cliente fictício',
      'Calcule o valor que seu trabalho gera para o cliente (ROI) e use isso na proposta',
      'Cadastre-se no Workana e Upwork com perfil completo e portfólio linkado',
    ],
    certificacao: null,
    projeto: 'Template de proposta comercial no GitHub (open source — gera autoridade)',
  },
  {
    id: 33, fase: 5,
    titulo: 'Dashboard de Vendas para Sellers do Mercado Livre',
    conteudo: [
      'Documentação API Mercado Livre (developers.mercadolivre.com.br)',
      'YouTube: "Conectando API do ML ao Python"',
      'Looker Studio: conectores e fontes de dados customizadas',
    ],
    exercicios: [
      'Autentique na API do Mercado Livre e extraia dados de um seller de teste',
      'Monte pipeline: API ML → Python → BigQuery → Looker Studio',
      'Crie dashboard com: faturamento, GMV, ticket médio, produtos top e devoluções',
      'Empacote como produto recorrente com preço mensal definido',
    ],
    certificacao: null,
    projeto: 'Dashboard ML funcional — primeiro produto real da consultoria',
  },
  {
    id: 34, fase: 5,
    titulo: 'Agente de Conteúdo DataHub — Versão Final',
    conteudo: [
      'Revisão: LangChain + Claude API + MCP',
      'Anthropic Academy: revisão Agent Skills',
      'Artigo: "Content marketing para consultores B2B"',
    ],
    exercicios: [
      'Finalize o agente: recebe tema → pesquisa → rascunha artigo no seu estilo',
      'Configure monitoramento automático de KPIs com alertas via WhatsApp (Twilio gratuito)',
      'Teste o agente com 5 temas reais do DataHub e avalie a qualidade',
      'Documente o agente como case de consultoria — quanto tempo economiza por semana?',
    ],
    certificacao: null,
    projeto: 'Agente de conteúdo v2 — automatiza 60% da produção do DataHub',
  },
  {
    id: 35, fase: 5,
    titulo: 'Newsletter, Podcast ou Blog — Lançamento Oficial',
    conteudo: [
      'Substack: configuração gratuita de newsletter',
      'Anchor (Spotify): configuração gratuita de podcast',
      'Artigo: "Como lançar uma newsletter de dados com 0 seguidores"',
    ],
    exercicios: [
      'Escolha o formato principal (newsletter, podcast ou blog) e configure a plataforma',
      'Publique os 3 primeiros episódios/edições com conteúdo já produzido nas fases anteriores',
      'Defina frequência, dia e horário fixos de publicação',
      'Compartilhe no LinkedIn e grupos de dados no WhatsApp/Telegram',
    ],
    certificacao: null,
    projeto: 'DataHub oficial no ar — newsletter/podcast com primeiras 3 publicações',
  },
  {
    id: 36, fase: 5,
    titulo: 'Revisão Geral + Próximos Passos',
    conteudo: [
      'Revisão de todas as certificações obtidas',
      'Atualização do LinkedIn e GitHub com todos os projetos',
      'Planejamento dos próximos 6 meses como consultor',
    ],
    exercicios: [
      'Atualize o LinkedIn completamente: headline, sobre, experiências, certificações',
      'Organize o GitHub: README do perfil, pins dos melhores projetos',
      'Liste 10 potenciais clientes e envie uma mensagem personalizada para cada um',
      'Defina metas de faturamento para os próximos 3 meses da consultoria',
      'Celebre — você percorreu 36 semanas de trilha! 🎉',
    ],
    certificacao: 'Revisão: PL-300 Microsoft (se ainda não fez a prova)',
    projeto: 'Portfólio completo publicado — você é um consultor de dados sênior',
  },
];
