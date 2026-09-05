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

  faq: {
    label:    { en: 'FAQ',                es: 'Preguntas' },
    headline: { en: 'The hard questions', es: 'Las preguntas difíciles' },
    items: [
      {
        q: { en: 'How does my model keep improving over time?', es: '¿Cómo mejora mi modelo con el tiempo?' },
        a: {
          en: 'Through the evaluation set, which grows with your real usage. Corrections and hard cases from production are added to it and to the tuning data, the open weights are re tuned on a defined cadence, and the new version is promoted only if it scores higher than the one running. When a better open base model appears, it goes through the same set. Your team owns the whole loop and the runbooks to operate it.',
          es: 'A través del conjunto de evaluación, que crece con tu uso real. Las correcciones y los casos difíciles de producción se agregan a él y a los datos de ajuste, los pesos abiertos se vuelven a ajustar con una cadencia definida, y la nueva versión se promueve solo si califica más alto que la que está corriendo. Cuando aparece un mejor modelo base abierto, pasa por el mismo conjunto. Tu equipo es dueño de todo el ciclo y de los manuales para operarlo.',
        },
      },
      {
        q: { en: 'What do you need from us to run an evaluation, and how long does it take?', es: '¿Qué necesitan de nosotros para correr una evaluación y cuánto tarda?' },
        a: {
          en: 'A few hours from the people who own the workflows, and a sample of real inputs and expected outputs. From that we build a fixed evaluation set and score every candidate model against it. The result is a scored comparison, delivered in weeks, that changes nothing in production.',
          es: 'Unas horas de las personas que son dueñas de los flujos de trabajo, y una muestra de entradas reales con sus salidas esperadas. Con eso construimos un conjunto de evaluación fijo y calificamos cada modelo candidato contra él. El resultado es una comparación con puntajes, entregada en semanas, que no cambia nada en producción.',
        },
      },
      {
        q: { en: 'What hardware do we need, and what does it cost to run?', es: '¿Qué hardware necesitamos y cuánto cuesta operarlo?' },
        a: {
          en: 'It depends on the model the evaluation selects. A 27B model quantized to 4 bit fits in about 20 GB of memory, so it runs and fine tunes on a single 32 GB workstation GPU. The trillion parameter open MoE models need multi GPU servers or your existing cloud GPUs. Once deployed there is no per query billing: the cost is hardware, power and the people who operate it. Whether that beats an API bill depends on your volume, so we show you both numbers before you decide.',
          es: 'Depende del modelo que seleccione la evaluación. Un modelo de 27B cuantizado a 4 bits cabe en unos 20 GB de memoria, así que corre y se ajusta en una sola GPU de estación de trabajo de 32 GB. Los modelos MoE abiertos de billones de parámetros necesitan servidores multi GPU o las GPUs que ya tienes en tu nube. Una vez desplegado no hay facturación por consulta: el costo es el hardware, la energía y las personas que lo operan. Si eso le gana a una factura de API depende de tu volumen, así que te mostramos ambos números antes de que decidas.',
        },
      },
      {
        q: { en: 'Does our data leave our environment at any point?', es: '¿Nuestros datos salen de nuestro entorno en algún momento?' },
        a: {
          en: 'No. Evaluation, tuning and inference all run inside your hardware or your cloud account. Nothing routes through us, and air gapped deployments have no outbound connectivity at all.',
          es: 'No. La evaluación, el ajuste y la inferencia corren dentro de tu hardware o de tu cuenta de nube. Nada pasa por nosotros, y los despliegues aislados de la red no tienen ninguna conectividad de salida.',
        },
      },
      {
        q: { en: 'What happens when a better model comes out next month?', es: '¿Qué pasa cuando salga un modelo mejor el próximo mes?' },
        a: {
          en: 'You keep the same fixed evaluation set built from your real workflows, and every new model gets scored against it. If it wins, swapping is a configuration change, not a rebuild.',
          es: 'Conservas el mismo conjunto de evaluación fijo construido a partir de tus flujos de trabajo reales, y cada modelo nuevo se califica contra él. Si gana, cambiarlo es un cambio de configuración, no una reconstrucción.',
        },
      },
      {
        q: { en: 'Who runs it after the engagement ends? Do we need an ML team?', es: '¿Quién lo opera cuando termina el proyecto? ¿Necesitamos un equipo de ML?' },
        a: {
          en: 'Your team does, and no. The last stage is enabling the people you already have to run it, re score it and swap models. You leave with the weights, the tuned version, the evaluation set and the runbooks, in your name.',
          es: 'Tu equipo, y no. La última etapa consiste en habilitar a las personas que ya tienes para operarlo, volver a calificarlo y cambiar de modelo. Te quedas con los pesos, la versión ajustada, el conjunto de evaluación y los manuales de operación, a tu nombre.',
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
