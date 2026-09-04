export type Lang = 'en' | 'es'

export const t = {
  // Intro overlay (component kept, not mounted by default)
  intro: {
    v1:   { en: 'Own your intelligence.',            es: 'Sé dueño de tu inteligencia.' },
    v2:   { en: 'Do not rent it.',                   es: 'No la rentes.' },
    sub:  { en: 'THALAMA — OPEN WEIGHT INFRASTRUCTURE', es: 'THALAMA — INFRAESTRUCTURA DE PESOS ABIERTOS' },
    skip: { en: 'Skip intro',                        es: 'Saltar intro' },
  },

  nav: {
    science:    { en: 'Science',            es: 'Ciencia' },
    legal:      { en: 'Legal',              es: 'Legal' },
    finance:    { en: 'Finance',            es: 'Finanzas' },
    government: { en: 'Government',         es: 'Gobierno' },
    how:        { en: 'How it works',       es: 'Cómo funciona' },
    cta:        { en: 'Book an evaluation', es: 'Agenda una evaluación' },
  },

  hero: {
    eyebrow: { en: 'Open weight infrastructure', es: 'Infraestructura de pesos abiertos' },
    line1:   { en: 'Own your intelligence.',      es: 'Sé dueño de tu inteligencia.' },
    line2:   { en: 'Do not rent it.',             es: 'No la rentes.' },
    sub: {
      en: 'We help organizations run open weight and open source models on their own infrastructure, without losing quality in their processes.',
      es: 'Ayudamos a organizaciones a correr modelos de pesos abiertos y de código abierto en su propia infraestructura, sin perder calidad en sus procesos.',
    },
    cta1: { en: 'Book an evaluation', es: 'Agenda una evaluación' },
    cta2: { en: 'See how it works',   es: 'Ver cómo funciona' },
  },

  video: {
    empty:   { en: 'COMPANY VIDEO / 16:9 / SRC + POSTER SLOT', es: 'VIDEO DE LA EMPRESA / 16:9 / SRC + POSTER' },
    caption: {
      en: 'Caption line. Captions track supplied with the video file.',
      es: 'Línea de descripción. La pista de subtítulos se entrega con el archivo de video.',
    },
  },

  problem: {
    label:    { en: 'The problem',                             es: 'El problema' },
    headline: { en: 'Three things you do not control today',  es: 'Tres cosas que hoy no controlas' },
    items: [
      {
        title: { en: 'Access is not yours', es: 'El acceso no es tuyo' },
        desc: {
          en: 'Anthropic suspended Fable 5 for all users overnight under export controls. Production workloads built on it stopped with no warning.',
          es: 'Anthropic suspendió Fable 5 para todos los usuarios de la noche a la mañana por controles de exportación. Las cargas de producción construidas sobre él se detuvieron sin aviso.',
        },
      },
      {
        title: { en: 'Uptime is not yours', es: 'La disponibilidad no es tuya' },
        desc: {
          en: 'A global provider outage stops your operations with theirs. There is no lever on your side to pull.',
          es: 'Una caída global del proveedor detiene tus operaciones junto con las suyas. No hay ninguna palanca de tu lado que puedas accionar.',
        },
      },
      {
        title: { en: 'The model is not yours', es: 'El modelo no es tuyo' },
        desc: {
          en: 'You cannot fine tune it deeply, you cannot run it offline, and you cannot keep it if the relationship ends.',
          es: 'No puedes ajustarlo a fondo, no puedes correrlo sin conexión y no puedes conservarlo si la relación termina.',
        },
      },
    ],
    calloutLabel: { en: 'Not about privacy', es: 'No se trata de privacidad' },
    calloutText: {
      en: 'Closed providers now offer customer controlled storage and customer managed keys. Privacy alone is no longer the argument. Ownership is.',
      es: 'Los proveedores cerrados ya ofrecen almacenamiento controlado por el cliente y llaves administradas por el cliente. La privacidad por sí sola ya no es el argumento. La propiedad lo es.',
    },
  },

  counter: {
    label:    { en: 'The counterweight',                          es: 'El contrapeso' },
    headline: { en: 'Open models have closed most of the gap',    es: 'Los modelos abiertos han cerrado casi toda la brecha' },
    sub: {
      en: 'Open weight releases now compete with closed frontier models on intelligence, at a fraction of the cost. The tradeoff that made renting obvious is no longer the same tradeoff.',
      es: 'Los lanzamientos de pesos abiertos ya compiten en inteligencia con los modelos cerrados de frontera, a una fracción del costo. El intercambio que hacía obvio rentar ya no es el mismo intercambio.',
    },
    quote: {
      en: 'Jensen Huang argued the world needs both frontier closed and frontier open models. We build the half nobody sells you.',
      es: 'Jensen Huang sostuvo que el mundo necesita tanto modelos cerrados de frontera como modelos abiertos de frontera. Nosotros construimos la mitad que nadie te vende.',
    },
    cite: { en: 'Paraphrased from his open letter on open models', es: 'Parafraseado de su carta abierta sobre modelos abiertos' },
  },

  how: {
    label:    { en: 'How it works', es: 'Cómo funciona' },
    headline: { en: 'Four stages',  es: 'Cuatro etapas' },
    aside: {
      en: 'Same four stages everywhere. The workflows inside them change by industry.',
      es: 'Las mismas cuatro etapas en todos lados. Los flujos de trabajo dentro de ellas cambian según la industria.',
    },
    stages: [
      {
        num: '01',
        title: { en: 'Compare', es: 'Comparar' },
        desc: {
          en: 'One evaluation set from your real workflows. Every model scored against it, before anything changes.',
          es: 'Un conjunto de evaluación a partir de tus flujos de trabajo reales. Cada modelo se califica contra él, antes de que algo cambie.',
        },
      },
      {
        num: '02',
        title: { en: 'Tune', es: 'Ajustar' },
        desc: {
          en: 'We adapt the open weights to your formats and your quality bar, then re score against the same set.',
          es: 'Adaptamos los pesos abiertos a tus formatos y a tu estándar de calidad, y volvemos a calificar contra el mismo conjunto.',
        },
      },
      {
        num: '03',
        title: { en: 'Deploy', es: 'Desplegar' },
        desc: {
          en: 'Your hardware, your cloud account, or fully air gapped. Nothing routes through us.',
          es: 'Tu hardware, tu cuenta de nube o totalmente aislado de la red. Nada pasa por nosotros.',
        },
      },
      {
        num: '04',
        title: { en: 'Enable', es: 'Habilitar' },
        desc: {
          en: 'Your team runs it, re scores it, swaps models. The engagement is designed to end.',
          es: 'Tu equipo lo opera, lo vuelve a calificar, cambia de modelo. El compromiso está diseñado para terminar.',
        },
      },
    ],
  },

  eval: {
    running: { en: 'Scoring 42 workflows from your evaluation set', es: 'Evaluando 42 flujos de trabajo de tu conjunto de evaluación' },
    done: {
      en: 'Complete. A tuned 27B open model leads on your eval, on hardware you already have.',
      es: 'Completo. Un modelo abierto de 27B ajustado lidera en tu evaluación, en hardware que ya tienes.',
    },
    models:  { en: 'models',   es: 'modelos' },
    colModel:   { en: 'Model',     es: 'Modelo' },
    colLicense: { en: 'License',   es: 'Licencia' },
    colGpqa:    { en: 'GPQA',      es: 'GPQA' },
    colSwe:     { en: 'SWE-Pro',   es: 'SWE-Pro' },
    colYours:   { en: 'Your eval', es: 'Tu eval' },
    tagYours:  { en: 'YOURS',  es: 'TUYO' },
    tagRented: { en: 'RENTED', es: 'RENTADO' },
    tagOpen:   { en: 'OPEN',   es: 'ABIERTO' },
    foot: {
      en: 'Illustrative. GPQA and SWE-bench Pro are public figures; the Your eval column is the set we build with your team.',
      es: 'Ilustrativo. GPQA y SWE-bench Pro son cifras públicas; la columna Tu eval es el conjunto que construimos con tu equipo.',
    },
    rows: [
      { name: { en: 'Kimi K3',          es: 'Kimi K3' },          org: { en: 'Moonshot · 2.8T MoE · 1M ctx',        es: 'Moonshot · 2.8T MoE · 1M ctx' },        license: { en: 'Custom',     es: 'Personalizada' }, gpqa: '93.5', swe: '58.4', score: 88 },
      { name: { en: 'DeepSeek V4 Pro',  es: 'DeepSeek V4 Pro' },  org: { en: 'DeepSeek · MoE',                     es: 'DeepSeek · MoE' },                     license: { en: 'MIT',        es: 'MIT' },           gpqa: '90.1', swe: '61.7', score: 85 },
      { name: { en: 'GLM-5.2',          es: 'GLM-5.2' },          org: { en: 'Z.ai · 753B A40B',                   es: 'Z.ai · 753B A40B' },                   license: { en: 'MIT',        es: 'MIT' },           gpqa: '91.2', swe: '62.1', score: 84 },
      { name: { en: 'Nemotron 3 Ultra', es: 'Nemotron 3 Ultra' }, org: { en: 'NVIDIA · open weights',              es: 'NVIDIA · pesos abiertos' },            license: { en: 'NVIDIA OM',  es: 'NVIDIA OM' },     gpqa: '86.7', swe: '52.8', score: 79 },
      { name: { en: 'Qwen3.8-27B',      es: 'Qwen3.8-27B' },      org: { en: 'Alibaba · dense · 1 workstation',    es: 'Alibaba · denso · 1 estación de trabajo' }, license: { en: 'Apache 2.0', es: 'Apache 2.0' }, gpqa: '82.6', swe: '47.3', score: 74 },
      { name: { en: 'Llama 4 Maverick', es: 'Llama 4 Maverick' }, org: { en: 'Meta · 10M ctx',                     es: 'Meta · 10M ctx' },                     license: { en: 'Llama 4',    es: 'Llama 4' },       gpqa: '80.4', swe: '43.9', score: 71 },
      { name: { en: 'Mistral Small 4',  es: 'Mistral Small 4' },  org: { en: 'Mistral · 119B A6.5B',               es: 'Mistral · 119B A6.5B' },               license: { en: 'Apache 2.0', es: 'Apache 2.0' },    gpqa: '78.9', swe: '41.2', score: 69 },
      { name: { en: 'Closed frontier model', es: 'Modelo cerrado de frontera' }, org: { en: 'API only · rented access', es: 'Solo API · acceso rentado' }, license: { en: 'None', es: 'Ninguna' }, gpqa: '95.0', swe: '66.0', score: 90, kind: 'closed' },
      { name: { en: 'Qwen3.8-27B, tuned on your data', es: 'Qwen3.8-27B, ajustado con tus datos' }, org: { en: 'your weights · your hardware', es: 'tus pesos · tu hardware' }, license: { en: 'Yours', es: 'Tuya' }, gpqa: '—', swe: '—', score: 93, kind: 'tuned' },
    ],
  },

  where: {
    label:    { en: 'Where it runs',                     es: 'Dónde corre' },
    headline: { en: 'Three places, all of them yours',   es: 'Tres lugares, todos tuyos' },
    places: [
      {
        letter: 'A',
        title: { en: 'Your own hardware', es: 'Tu propio hardware' },
        desc: {
          en: 'On premise servers or edge devices, in the building where the work happens.',
          es: 'Servidores locales o dispositivos edge, en el edificio donde ocurre el trabajo.',
        },
      },
      {
        letter: 'B',
        title: { en: 'Your own cloud account', es: 'Tu propia cuenta de nube' },
        desc: {
          en: 'Your tenancy, your region, your controls, your billing.',
          es: 'Tu tenencia, tu región, tus controles, tu facturación.',
        },
      },
      {
        letter: 'C',
        title: { en: 'Air gapped', es: 'Aislado de la red' },
        desc: {
          en: 'No outbound connectivity, for the environments where that is the only answer.',
          es: 'Sin conectividad de salida, para los entornos donde esa es la única respuesta.',
        },
      },
    ],
    note: { en: 'A risk decision, not a product tier. So it stays yours.', es: 'Una decisión de riesgo, no un nivel de producto. Para que siga siendo tuyo.' },
  },

  own: {
    label:    { en: 'What you actually own',      es: 'Lo que realmente posees' },
    headline: { en: 'Four assets, in your name',  es: 'Cuatro activos, a tu nombre' },
    items: [
      {
        title: { en: 'The model weights', es: 'Los pesos del modelo' },
        desc:  { en: 'A copy you hold, not an endpoint you are permitted to call.', es: 'Una copia que tú guardas, no un endpoint que te permiten llamar.' },
      },
      {
        title: { en: 'The tuned version of it', es: 'Su versión ajustada' },
        desc:  { en: 'The adaptation carrying your language and standards stays yours.', es: 'La adaptación que lleva tu lenguaje y tus estándares sigue siendo tuya.' },
      },
      {
        title: { en: 'The evaluation set', es: 'El conjunto de evaluación' },
        desc:  { en: 'How you judge every model that comes after this one.', es: 'Cómo juzgas cada modelo que venga después de este.' },
      },
      {
        title: { en: 'The ability to keep going', es: 'La capacidad de seguir adelante' },
        desc:  { en: 'If our relationship ends, nothing stops.', es: 'Si nuestra relación termina, nada se detiene.' },
      },
    ],
  },

  industries: {
    label:    { en: 'Four industries',                            es: 'Cuatro industrias' },
    headline: { en: 'The constraint is different in each one',   es: 'La restricción es distinta en cada una' },
    items: [
      {
        id: 'science',
        tag:   { en: '/SCIENCE', es: '/CIENCIA' },
        title: { en: 'Research', es: 'Investigación' },
        desc:  { en: 'Data use agreements, reproducibility, labs with no connectivity.', es: 'Acuerdos de uso de datos, reproducibilidad, laboratorios sin conectividad.' },
      },
      {
        id: 'legal',
        tag:   { en: '/LEGAL', es: '/LEGAL' },
        title: { en: 'Law firms', es: 'Despachos de abogados' },
        desc:  { en: 'Privilege and confidentiality are obligations, not vendor policy settings.', es: 'El privilegio y la confidencialidad son obligaciones, no configuraciones de política de un proveedor.' },
      },
      {
        id: 'finance',
        tag:   { en: '/FINANCE', es: '/FINANZAS' },
        title: { en: 'Banks and insurers', es: 'Bancos y aseguradoras' },
        desc:  { en: 'Model risk management, concentration risk, documented validation.', es: 'Gestión de riesgo de modelos, riesgo de concentración, validación documentada.' },
      },
      {
        id: 'government',
        tag:   { en: '/GOVERNMENT', es: '/GOBIERNO' },
        title: { en: 'Public sector', es: 'Sector público' },
        desc:  { en: 'Citizen data under your jurisdiction. Services that cannot be switched off abroad.', es: 'Datos de ciudadanos bajo tu jurisdicción. Servicios que no pueden apagarse desde el extranjero.' },
      },
    ],
  },

  proof: {
    label:    { en: 'Proof',              es: 'Evidencia' },
    headline: { en: 'Who is doing this',  es: 'Quién está haciendo esto' },
    items: [
      {
        title: { en: 'Production ML inside a global bank', es: 'ML en producción dentro de un banco global' },
        desc: {
          en: 'Our founder built a harness around a closed model for regulated workloads at JPMorgan Chase. Lived experience of the constraint, not an endorsement by them.',
          es: 'Nuestro fundador construyó un harness alrededor de un modelo cerrado para cargas reguladas en JPMorgan Chase. Experiencia vivida de la restricción, no un respaldo de su parte.',
        },
      },
      {
        title: { en: 'Thala, running on constrained edge hardware', es: 'Thala, corriendo en hardware edge limitado' },
        desc: {
          en: 'A hands free copilot for scientists, running open models in real lab conditions where the network cannot be assumed.',
          es: 'Un copiloto sin manos para científicos, corriendo modelos abiertos en condiciones reales de laboratorio donde no se puede asumir que hay red.',
        },
      },
      {
        title: { en: 'Open evaluation method', es: 'Método de evaluación abierto' },
        desc: {
          en: 'Built with your team, handed to your team. Every number reproducible.',
          es: 'Construido con tu equipo, entregado a tu equipo. Cada número es reproducible.',
        },
      },
    ],
    placeholderLabel: { en: 'Placeholder / customer proof', es: 'Espacio reservado / evidencia de clientes' },
    placeholderText: {
      en: 'Reserved for customer logos and case studies. It stays empty until they are real. We have no customers in legal, finance or government yet.',
      es: 'Reservado para logos de clientes y casos de estudio. Permanece vacío hasta que sean reales. Todavía no tenemos clientes en legal, finanzas o gobierno.',
    },
  },

  faq: {
    label:    { en: 'FAQ',                es: 'Preguntas' },
    headline: { en: 'The hard questions', es: 'Las preguntas difíciles' },
    items: [
      {
        q: {
          en: 'Closed providers now let us keep our data in our own cloud. Why do we still need this?',
          es: 'Los proveedores cerrados ya nos dejan guardar nuestros datos en nuestra propia nube. ¿Por qué seguimos necesitando esto?',
        },
        a: {
          en: 'That is real and it is good. It protects your data. It does not give you a model you own, that you can run offline, or that you keep if the relationship ends. And it was designed with the largest institutions in the world, which is not the same as being designed for you.',
          es: 'Eso es real y es bueno. Protege tus datos. No te da un modelo que poseas, que puedas correr sin conexión o que conserves si la relación termina. Y fue diseñado con las instituciones más grandes del mundo, lo cual no es lo mismo que estar diseñado para ti.',
        },
      },
      {
        q: { en: 'Are open models good enough?', es: '¿Los modelos abiertos son lo suficientemente buenos?' },
        a: {
          en: 'That is exactly what the evaluation stage measures, on your workflows, before you change anything. If the answer is no for a given workflow, we tell you that.',
          es: 'Eso es exactamente lo que mide la etapa de evaluación, sobre tus flujos de trabajo, antes de que cambies algo. Si la respuesta es no para un flujo dado, te lo decimos.',
        },
      },
      {
        q: { en: 'What happens when a better model comes out next month?', es: '¿Qué pasa cuando salga un modelo mejor el próximo mes?' },
        a: {
          en: 'We keep one fixed evaluation set built from your real workflows. Every model gets scored against it. Swapping is a config change, not a rebuild.',
          es: 'Mantenemos un conjunto de evaluación fijo construido a partir de tus flujos de trabajo reales. Cada modelo se califica contra él. Cambiar de modelo es un cambio de configuración, no una reconstrucción.',
        },
      },
      {
        q: { en: 'Who runs the infrastructure?', es: '¿Quién opera la infraestructura?' },
        a: {
          en: 'You do. It runs on your hardware or in your cloud account, and nothing routes through us.',
          es: 'Tú. Corre en tu hardware o en tu cuenta de nube, y nada pasa por nosotros.',
        },
      },
    ],
  },

  evaluation: {
    label:    { en: 'Book an evaluation',                          es: 'Agenda una evaluación' },
    headline: { en: 'Start with the numbers, not the migration',   es: 'Empieza con los números, no con la migración' },
    sub: {
      en: 'We score open models against your real workflows and show you the result. The evaluation changes nothing in production.',
      es: 'Calificamos modelos abiertos contra tus flujos de trabajo reales y te mostramos el resultado. La evaluación no cambia nada en producción.',
    },
    name:      { en: 'Name',         es: 'Nombre' },
    email:     { en: 'Work email',   es: 'Correo de trabajo' },
    org:       { en: 'Organization', es: 'Organización' },
    vertical:  { en: 'Vertical',     es: 'Vertical' },
    workflows: { en: 'Which workflows are you curious about', es: 'Qué flujos de trabajo te interesan' },
    verticals: [
      { value: 'science',    label: { en: 'Science and research', es: 'Ciencia e investigación' } },
      { value: 'legal',      label: { en: 'Legal',                es: 'Legal' } },
      { value: 'finance',    label: { en: 'Finance',              es: 'Finanzas' } },
      { value: 'government', label: { en: 'Government',           es: 'Gobierno' } },
      { value: 'other',      label: { en: 'Other',                es: 'Otro' } },
    ],
    submit:  { en: 'Book an evaluation', es: 'Agendar evaluación' },
    sending: { en: 'Sending…',           es: 'Enviando…' },
    noteIdle:    { en: 'No sales sequence. One reply from a person.',              es: 'Sin secuencia de ventas. Una respuesta de una persona.' },
    noteSuccess: { en: 'Received. We will reply from a person, not a sequence.',   es: 'Recibido. Te responderá una persona, no una secuencia.' },
    noteError: {
      en: 'Something went wrong. Write to us directly at diegolarrieta@gmail.com.',
      es: 'Algo salió mal. Escríbenos directamente a diegolarrieta@gmail.com.',
    },
  },

  footer: {
    tagline: { en: 'Own your intelligence.', es: 'Sé dueño de tu inteligencia.' },
  },
} as const
