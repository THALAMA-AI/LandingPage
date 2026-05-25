export type Lang = 'en' | 'es'

export const t = {
  // Intro
  intro: {
    v1: {
      en: 'Turn a scientist into a 10x scientist.',
      es: 'Convierte a un científico en un científico 10x.',
    },
    v2: {
      en: 'The AI copilot for scientists.',
      es: 'El copiloto de IA para científicos.',
    },
    sub: {
      en: 'THALAMA AI — EARLY ACCESS 2026',
      es: 'THALAMA AI — ACCESO ANTICIPADO 2026',
    },
    skip: { en: 'Skip intro', es: 'Saltar intro' },
  },

  // Nav
  nav: {
    cta: { en: 'Request Access', es: 'Solicitar Acceso' },
  },

  // Hero
  hero: {
    badge:    { en: 'Now accepting early labs', es: 'Aceptando laboratorios piloto' },
    headline: { en: 'The AI copilot scientists wear.', es: 'El copiloto de IA que los científicos usan.' },
    sub: {
      en: 'Thalama listens in your pocket, responds with voice, and documents everything automatically — without touching your screen. Private AI, running on hardware in your lab.',
      es: 'Thalama escucha desde tu bolsillo, responde con voz y documenta todo automáticamente — sin tocar la pantalla. IA privada, corriendo en hardware dentro de tu laboratorio.',
    },
    cta1: { en: 'Request Early Access', es: 'Solicitar Acceso Anticipado' },
    cta2: { en: 'Watch the demo',       es: 'Ver el demo' },
    stats: {
      latency:     { en: 'Response latency',      es: 'Latencia de respuesta' },
      sessions:    { en: 'Simultaneous sessions', es: 'Sesiones simultáneas'  },
      cost:        { en: 'Cost per AI query',     es: 'Costo por consulta'    },
      dataPrivacy: { en: 'Data stays in your lab',es: 'Datos en tu laboratorio' },
    },
  },

  // How it works
  how: {
    label:    { en: 'How it works',    es: 'Cómo funciona' },
    headline: { en: 'Science, hands-free.', es: 'Ciencia, sin manos.' },
    sub: {
      en: 'Phone in your lab coat pocket. That\'s all. Thalama hears every command, responds out loud, and writes every note — so you can focus on the work that actually requires your hands.',
      es: 'El teléfono en el bolsillo de tu bata. Eso es todo. Thalama escucha cada comando, responde en voz alta y escribe cada nota — para que puedas concentrarte en el trabajo que realmente requiere tus manos.',
    },
    steps: [
      {
        num: '01',
        title: { en: 'Pocket it', es: 'Guárdalo en el bolsillo' },
        desc:  {
          en: 'Open the Thalama app, start a session, and slip your phone into your lab coat pocket. No screen interaction needed for the rest of your experiment.',
          es: 'Abre la app de Thalama, inicia una sesión y guarda tu teléfono en el bolsillo de tu bata. No necesitas interactuar con la pantalla durante el experimento.',
        },
      },
      {
        num: '02',
        title: { en: 'Speak naturally', es: 'Habla naturalmente' },
        desc:  {
          en: 'Ask questions, log observations, search your inventory, and run calculations — all by voice. Thalama understands scientific terminology because it was trained on it.',
          es: 'Haz preguntas, registra observaciones, busca en tu inventario y realiza cálculos — todo por voz. Thalama entiende terminología científica porque fue entrenado con ella.',
        },
      },
      {
        num: '03',
        title: { en: 'Review everything', es: 'Revisa todo' },
        desc:  {
          en: 'When the session ends, your complete experiment log — materials, observations, calculations — is already documented on your web dashboard.',
          es: 'Cuando termina la sesión, tu registro completo del experimento — materiales, observaciones, cálculos — ya está documentado en tu panel web.',
        },
      },
    ],
  },

  // Hardware
  hardware: {
    chip:     { en: 'Your lab\'s supercomputer', es: 'El supercomputador de tu laboratorio' },
    headline: { en: 'AI that never leaves your lab.', es: 'IA que nunca sale de tu laboratorio.' },
    sub: {
      en: 'Every other AI product sends your data to external servers. Each query has a cost. Your research leaves your walls. We solved it differently.',
      es: 'Todos los demás productos de IA envían tus datos a servidores externos. Cada consulta tiene un costo. Tu investigación sale de tus instalaciones. Nosotros lo resolvimos diferente.',
    },
    badgeSub: { en: 'Running live in the lab', es: 'Corriendo en el laboratorio' },
    props: [
      {
        title: { en: 'Zero latency',           es: 'Latencia cero'              },
        desc:  { en: 'Processing happens on a credit-card-sized NVIDIA Jetson Orin Nano inside your lab. No internet dependency. Responses are instant.', es: 'El procesamiento ocurre en una NVIDIA Jetson Orin Nano del tamaño de una tarjeta de crédito dentro de tu laboratorio. Sin dependencia de internet. Las respuestas son instantáneas.' },
      },
      {
        title: { en: 'Total data privacy',     es: 'Privacidad total de datos'  },
        desc:  { en: 'Experiment data, scientist observations, and lab information never leave the device. For regulated research, this isn\'t a benefit — it\'s a requirement.', es: 'Los datos del experimento, las observaciones del científico y la información del laboratorio nunca salen del dispositivo. Para investigación regulada, esto no es un beneficio adicional — es un requisito.' },
      },
      {
        title: { en: 'Zero cost per use',      es: 'Cero costo por uso'         },
        desc:  { en: 'No API calls. No per-query billing. One device supports your entire team with up to 10 simultaneous sessions — at essentially zero marginal cost.', es: 'Sin llamadas a APIs. Sin facturación por consulta. Un dispositivo soporta a todo tu equipo con hasta 10 sesiones simultáneas — a un costo marginal prácticamente cero.' },
      },
      {
        title: { en: 'Lab-specific AI models', es: 'Modelos de IA del laboratorio' },
        desc:  { en: 'Models trained on real scientific data, lab protocols, and terminology. Each installation is customized with your lab\'s own data and history.', es: 'Modelos entrenados con datos científicos reales, protocolos de laboratorio y terminología especializada. Cada instalación se personaliza con los datos e historial de tu propio laboratorio.' },
      },
    ],
  },

  // Why different
  why: {
    label:    { en: 'The difference',                         es: 'La diferencia'                     },
    headline: { en: 'Everyone else sends your data out. We don\'t.', es: 'Los demás envían tus datos afuera. Nosotros no.' },
    colOther: { en: 'Every other AI tool',                    es: 'Cualquier otra herramienta de IA'  },
    colUs:    { en: 'THALAMA AI',                             es: 'THALAMA AI'                        },
    other: [
      { en: 'Every query sent to external servers (OpenAI, Google, Anthropic)',    es: 'Cada consulta enviada a servidores externos (OpenAI, Google, Anthropic)'          },
      { en: 'Billed per interaction — costs scale with usage',                     es: 'Cobrado por interacción — los costos escalan con el uso'                          },
      { en: 'Generic models with no domain knowledge',                             es: 'Modelos genéricos sin conocimiento del dominio'                                   },
      { en: 'Dependent on internet connection',                                    es: 'Dependiente de conexión a internet'                                               },
      { en: 'Research data exposed to third parties',                              es: 'Datos de investigación expuestos a terceros'                                      },
    ],
    ours: [
      { en: 'All processing on dedicated hardware inside your lab',                es: 'Todo el procesamiento en hardware dedicado dentro de tu laboratorio'              },
      { en: 'Flat cost — zero marginal cost per query',                            es: 'Costo fijo — cero costo marginal por consulta'                                   },
      { en: 'Models trained on real scientific protocols and terminology',          es: 'Modelos entrenados en protocolos científicos reales y terminología especializada' },
      { en: 'Works offline — no internet dependency',                              es: 'Funciona sin internet — sin dependencia de conectividad'                          },
      { en: 'Data never leaves your facility — full regulatory compliance',        es: 'Los datos nunca salen de tus instalaciones — cumplimiento regulatorio total'      },
    ],
  },

  // Demo
  demo: {
    label:    { en: 'See it in action',                  es: 'Míralo en acción'           },
    headline: { en: 'Watch a session from start to finish.', es: 'Mira una sesión de principio a fin.' },
    sub: {
      en: 'A scientist runs a full experiment — voice commands, inventory checks, calculations — without touching their screen once.',
      es: 'Un científico realiza un experimento completo — comandos de voz, revisión de inventario, cálculos — sin tocar su pantalla ni una vez.',
    },
  },

  // CTA
  cta: {
    headline: { en: 'Ready to run AI in your lab?',  es: '¿Listo para correr IA en tu laboratorio?' },
    sub: {
      en: 'We\'re working with a select group of early labs. Leave your email and we\'ll reach out to schedule a demo.',
      es: 'Estamos trabajando con un grupo selecto de laboratorios piloto. Deja tu correo y nos pondremos en contacto para programar un demo.',
    },
    placeholder: { en: 'your@lab.edu',      es: 'tu@laboratorio.edu' },
    btn:         { en: 'Request Access',    es: 'Solicitar Acceso'   },
    success:     { en: "Done! We'll reach out soon.", es: '¡Listo! Te contactaremos pronto.' },
    note:        { en: 'No spam. We\'ll only reach out to set up your demo.', es: 'Sin spam. Solo nos comunicaremos para coordinar tu demo.' },
  },

  // Footer
  footer: {
    copy: { en: '© 2026 THALAMA AI. All rights reserved.', es: '© 2026 THALAMA AI. Todos los derechos reservados.' },
  },
} as const
