const questions = [
    // Marketing (1 - 4)
    {
        id: 1,
        text: "Ti piacerebbe occuparti della gestione delle pagine social di JESAP Consulting?",
        type: "boolean",
        value_true: ['m'],
        value_false: [],
        next: () => 1 + 4,
    },
    {
        id: 2,
        text: "Ti piacerebbe creare contenuti per le pagine social di JESAP Consulting?",
        type: "boolean",
        value_true: ['m'],
        value_false: [],
        next: () => 2 + 4,
    },
    {
        id: 3,
        text: "Ti piacerebbe occuparti della brand identity di JESAP Consulting?",
        type: "boolean",
        value_true: ['m'],
        value_false: [],
        next: () => 3 + 4,
    },
    {
        id: 4,
        text: "Ti piacerebbe occuparti, insieme al team, dell'elaborazione di un marketing plan per un cliente esterno?",
        type: "boolean",
        value_true: ['m'],
        value_false: [],
        next: () => 5 + 4,
    },
    // Business Development (5 - 8)
    {
        id: 5,
        text: "Ti piacerebbe ampliare il portafoglio clienti di JESAP Consulting tramite scouting attivo di lead?",
        type: "boolean",
        value_true: ['b'],
        value_false: [],
        next: () => 5 + 4,
    },
    {
        id: 6,
        text: "Ti piacerebbe curare i rapporti e la comunicazione con clienti e partner di JESAP Consulting?",
        type: "boolean",
        value_true: ['b'],
        value_false: [],
        next: () => 6 + 4,
    },
    {
        id: 7,
        text: "Ti piacerebbe strutturare documenti necessari alla fase di negoziazione, come business proposal, preventivi e pitch?",
        type: "boolean",
        value_true: ['b'],
        value_false: [],
        next: () => 7 + 4,
    },
    {
        id: 8,
        text: "Ti piacerebbe occuparti della parte contrattualistica dei rapporti commerciali di JESAP Consulting?",
        type: "boolean",
        value_true: ['b'],
        value_false: [],
        next: () => 8+4,
    },
    // Audit (9 - 12)
    {
        id: 9,
        text: "Ti piacerebbe occuparti della qualità dei processi interni e della loro ottimizzazione?",
        type: "boolean",
        value_true: ['a'],
        value_false: [],
        next: () => 9+4,
    },
    {
        id: 10,
        text: "Ti piacerebbe svolgere attività di analisi, monitoraggio e supporto tecnico ai membri di JESAP Consulting?",
        type: "boolean",
        value_true: ['a'],
        value_false: [],
        next: () => 10+4,
    },
    {
        id: 11,
        text: "Ti piacerebbe lavorare alla reportistica interna?",
        type: "boolean",
        value_true: ['a'],
        value_false: [],
        next: () => 11+4,
    },
    {
        id: 12,
        text: "Ti piacerebbe creare e gestire, insieme al team, database interni all'associazione?",
        type: "boolean",
        value_true: ['a'],
        value_false: [],
        next: () => 12+4,
    },
    // Human Resources (13 - 16)
    {
        id: 13,
        text: "Ti piacerebbe gestire e organizzare il processo di recruitment di JESAP Consulting?",
        type: "boolean",
        value_true: ['h'],
        value_false: [],
        next: () => 13+4,
    },
    {
        id: 14,
        text: "Ti piacerebbe svolgere analisi di clima interno all'associazione e stilare i relativi report?",
        type: "boolean",
        value_true: ['h'],
        value_false: [],
        next: () => 14+4,
    },
    {
        id: 15,
        text: "Ti piacerebbe prendere parte alla mappatura delle competenze dei membri di JESAP Consulting, e monitorarne il carico associativo?",
        type: "boolean",
        value_true: ['h'],
        value_false: [],
        next: () => 15+4,
    },
    {
        id: 16,
        text: "Ti piacerebbe occuparti del benessere delle risorse e della loro soddisfazione?",
        type: "boolean",
        value_true: ['h'],
        value_false: [],
        next: () => 16+4,
    },
    // IT (17 - 20)
    {
        id: 17,
        text: "Ti piacerebbe occuparti, insieme al team, dello sviluppo di software per il monitoraggio delle attività interne?",
        type: "boolean",
        value_true: ['i'],
        value_false: [],
        next: () => 17-15,
    },
    {
        id: 18,
        text: "Ti piacerebbe prendere parte, insieme al team, allo sviluppo di software gestionali per clienti esterni?",
        type: "boolean",
        value_true: ['i'],
        value_false: [],
        next: () => 18-15,
    },
    {
        id: 19,
        text: "Ti piacerebbe creare Web App con Python?",
        type: "boolean",
        value_true: ['i'],
        value_false: [],
        next: () => 19-15,
    },
    {
        id: 20,
        text: "Ti piacerebbe contribuire alla digitalizzazione dell'associazione?",
        type: "boolean",
        value_true: ['i'],
        value_false: [],
        next: () => null, // Questa è l'ultima domanda, quindi non c'è una successiva
    },
];


// Questo è un esempio completo che include tutte le domande richieste, con una progressione lineare dall'inizio alla fine del questionario.



export { questions };