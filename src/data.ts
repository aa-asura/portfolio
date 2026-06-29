import { Skill, TimelineEvent, Project } from './types';

export const skillsData: Skill[] = [
  {
    id: 'ai',
    category: 'Artificial Intelligence',
    title: 'Machine Learning & LLMs',
    description: 'Understanding deep learning fundamentals, vector embeddings, semantic searching, and modern LLM application patterns.',
    whyItInterestsMe: 'I am fascinated by how statistical structures can process complex natural language and extract context, changing how humans interact with technology.',
    howImImproving: 'By reading research papers on transformer architectures, experimenting with local open-source models, and integrating advanced SDKs like @google/genai.',
    iconName: 'Cpu'
  },
  {
    id: 'backend',
    category: 'Backend Development',
    title: 'Server Architectures & Systems',
    description: 'Designing stable, efficient, and robust server systems to handle application workflows, state, and user traffic.',
    whyItInterestsMe: 'The backend is the engine room of any application. Designing logical systems that process data reliably and withstand heavy loads is incredibly satisfying.',
    howImImproving: 'Studying concurrent processing in Node.js, exploring design patterns, and building custom middleware structures to secure and optimize endpoints.',
    iconName: 'Server'
  },
  {
    id: 'apis',
    category: 'APIs',
    title: 'REST & GraphQL Design',
    description: 'Constructing robust API endpoints with clean, predictable contracts, standard response schemas, and reliable error handling.',
    whyItInterestsMe: 'APIs are the interfaces through which systems communicate. A beautifully crafted API contract makes frontend integration seamless and robust.',
    howImImproving: 'Adhering to strict REST guidelines, writing detailed API documentation, and practicing rate-limiting, request validation, and clean serialization.',
    iconName: 'Link'
  },
  {
    id: 'databases',
    category: 'Databases',
    title: 'Relational Schema Design & SQL',
    description: 'Modeling structured relationships, writing performant queries, and managing data integrity within relational databases.',
    whyItInterestsMe: 'Data is the core asset of any system. Structuring database tables cleanly ensures that data remains durable, queryable, and logically consistent.',
    howImImproving: 'Writing raw SQL queries to better understand index optimizations, practicing schema migrations, and exploring database locking behaviors.',
    iconName: 'Database'
  },
  {
    id: 'python',
    category: 'Python',
    title: 'Data Pipelines & Scripting',
    description: 'Utilizing Python for data deserialization, automated scripts, machine learning setups, and system interactions.',
    whyItInterestsMe: 'Python is the bridge between experimental machine learning models and production pipelines. Its vast ecosystem is essential for AI exploration.',
    howImImproving: 'Writing modular scripts for local data processing, scraping documentation safely, and implementing vector math operations from scratch.',
    iconName: 'Terminal'
  },
  {
    id: 'git',
    category: 'Git & GitHub',
    title: 'Version Control & Workflow',
    description: 'Managing source code changes, clean branching strategies, conflict resolution, and collaborative code reviews.',
    whyItInterestsMe: 'Version control is the foundation of professional collaborative software. It provides historical transparency and enables fearless experimentation.',
    howImImproving: 'Practicing interactive rebasing, writing detailed and atomic commit messages, and managing multi-branch repositories on personal projects.',
    iconName: 'GitBranch'
  },
  {
    id: 'opensource',
    category: 'Open Source',
    title: 'Community Collaboration',
    description: 'Navigating public codebases, addressing open issues, writing clear bug reports, and submitting clean pull requests.',
    whyItInterestsMe: 'Contributing to open source allows me to learn from more experienced engineers worldwide and give back to the software ecosystem I rely on.',
    howImImproving: 'Reading open issues on GitHub, reviewing pull requests to learn coding patterns, and writing detailed document updates for libraries I use.',
    iconName: 'Globe'
  },
  {
    id: 'engineering',
    category: 'Software Engineering',
    title: 'Modular & Clean Architecture',
    description: 'Applying software design patterns, decoupling logic, and writing code that is clean, readable, and highly maintainable.',
    whyItInterestsMe: 'Decoupled, modular code saves teams days of maintenance down the line. It turns a fragile, tangled codebase into a pleasant developer workspace.',
    howImImproving: 'Reading classic software design books, refactoring my older personal projects, and enforcing strict ESLint / TypeScript rules.',
    iconName: 'Code'
  },
  {
    id: 'problemsolving',
    category: 'Problem Solving',
    title: 'Algorithms & Core Logic',
    description: 'Breaking down abstract, complex problems into step-by-step algorithms, then implementing them with optimal complexity.',
    whyItInterestsMe: 'Every great software feature begins as a complex problem. The challenge of finding an elegant, optimal algorithmic solution is highly rewarding.',
    howImImproving: 'Solving algorithmic puzzles systematically, focusing on spatial and temporal complexity, and designing data parsing routines.',
    iconName: 'Compass'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'ai-learning',
    title: 'AI Learning Journey',
    type: 'learning',
    period: 'Ongoing Phase',
    description: 'Diving deep into neural network foundations, vector databases, and modern AI engineering principles.',
    details: [
      'Studying neural network building blocks: weights, biases, activation functions, and backpropagation.',
      'Experimenting with vector embedding structures and desaturated semantic search pipelines.',
      'Utilizing the modern @google/genai SDK to build server-side context-aware agents.',
      'Exploring hyperparameter fine-tuning and running small open-source models locally.'
    ]
  },
  {
    id: 'backend-dev',
    title: 'Backend Development',
    type: 'backend',
    period: 'Continuous Practice',
    description: 'Consolidating server-side architectures, database modeling, and scalable API design.',
    details: [
      'Building performant, asynchronous microservices with Express and Node.js.',
      'Studying SQL schema design, index optimization, and transaction boundaries in PostgreSQL and SQLite.',
      'Implementing secure stateless authorization architectures using JWT (JSON Web Tokens).',
      'Developing standard middleware packages for rate-limiting, error logging, and payload validation.'
    ]
  },
  {
    id: 'junior-contrib',
    title: 'Junior Software Contributions',
    type: 'contribution',
    period: 'Recent Activity',
    description: 'Collaborating on production-ready structures, resolving bugs, and refactoring modular codebases.',
    details: [
      'Working inside complex multi-module codebases, adhering to strict styling guidelines.',
      'Assisting in database migration cycles and writing comprehensive API endpoint tests.',
      'Collaborating on component refactoring to improve load times and decrease re-render overhead.',
      'Translating user requirements into atomic, structured backend features.'
    ]
  },
  {
    id: 'open-source-contrib',
    title: 'Open Source Contributions',
    type: 'contribution',
    period: 'Active Engagement',
    description: 'Engaging with the global developer community through public repositories and bug resolutions.',
    details: [
      'Reviewing community issues, reproducing reported bugs locally, and submitting verified patches.',
      'Refining developer-facing documentation to make setup workflows simpler for new contributors.',
      'Participating in code audits, identifying edge-case failures, and optimizing data parsers.',
      'Learning collaborative workflows: forks, branch alignments, and interactive rebases.'
    ]
  },
  {
    id: 'closed-source-contrib',
    title: 'Closed Source Contributions',
    type: 'contribution',
    period: 'Professional Track',
    description: 'Contributing to proprietary software ecosystems under real-world constraints and requirements.',
    details: [
      'Refactoring critical server-side files to comply with updated security guidelines.',
      'Securing transactional databases and ensuring safe data deserialization patterns.',
      'Engaging with experienced developers in private review cycles to maintain high code standard levels.',
      'Adapting features dynamically based on internal sprint goals and customer feedback.'
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'ai-note-assistant',
    name: 'AI Note Assistant',
    tag: 'AI Integration',
    overview: 'An intelligent workspace companion that organizes raw notes, extracts actionable tasks, and clusters related thoughts.',
    problemSolved: 'Solves the cognitive chaos of digital note-taking by dynamically structuring raw text and suggesting conceptual connections.',
    technologies: ['React', 'Node.js', 'Express', '@google/genai', 'Tailwind CSS'],
    features: [
      'Contextual categorization of raw, unformatted notes into structured markdown summaries.',
      'Automated check-list extraction mapping actionable items from text blocks.',
      'Semantic grouping displaying related past notes based on contextual similarity.'
    ],
    futureImprovements: [
      'Local offline processing utilizing lightweight ONNX runtime models in-browser.',
      'Integration of vector databases (like Chroma) to support thousands of notes.'
    ]
  },
  {
    id: 'smart-task-api',
    name: 'Smart Task Manager API',
    tag: 'Backend Architecture',
    overview: 'A robust, multi-tenant REST API engineered to manage complex task priorities, assignments, and audit trails.',
    problemSolved: 'Eliminates data race conditions and messy state synchronization in concurrent collaborative workspaces.',
    technologies: ['Node.js', 'Express', 'SQLite', 'TypeScript', 'JWT Auth'],
    features: [
      'Stateless user authentication with roles-based authorization (RBAC) scopes.',
      'Comprehensive database query logging and automatic rate-limiting thresholds.',
      'Robust input sanitization and customized transactional data validation.'
    ],
    futureImprovements: [
      'Redis cache integration to accelerate frequent query reads under high load.',
      'Websocket notifications to push instant task updates to connected clients.'
    ]
  },
  {
    id: 'finance-backend',
    name: 'Personal Finance Backend',
    tag: 'Data Systems',
    overview: 'A secure double-entry transactional ledger engine managing balance sheets, recurring patterns, and exports.',
    problemSolved: 'Prevents numeric floating-point inaccuracies and untracked cash leakages common in basic budget apps.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'UnitTest'],
    features: [
      'Precision decimal calculation layer complying with standard double-entry ledger rules.',
      'Automated transaction pattern matching predicting recurring utility charges.',
      'Modular parser handling structured bank statement imports and deserialization.'
    ],
    futureImprovements: [
      'Automated bank API syncing via Plaid integration.',
      'Anomaly detection machine learning scripts alerting unusual expenditure spikes.'
    ]
  },
  {
    id: 'doc-search-ai',
    name: 'Document Search with AI',
    tag: 'Vector Retrieval',
    overview: 'A semantic search retriever enabling natural question-answering over large collections of PDF text logs.',
    problemSolved: 'Replaces rigid, literal keyword matches with intelligent conceptual queries that understand semantic meaning.',
    technologies: ['Python', 'ChromaDB', '@google/genai', 'SentenceTransformers', 'PDFPlumber'],
    features: [
      'Dynamic PDF text parsing with overlapping slider chunking strategies.',
      'High-speed local vector database indexing representing semantic concepts.',
      'Source attribution displaying the exact page and paragraph source for each answer.'
    ],
    futureImprovements: [
      'Multi-modal processing parsing visual layout tables and image flow diagrams.',
      'Hybrid keyword + semantic search combining BM25 score algorithms with embeddings.'
    ]
  },
  {
    id: 'habit-tracker-api',
    name: 'Habit Tracker Backend',
    tag: 'Core Logic',
    overview: 'A lightweight API validating timezone-agnostic streak counts and tracking routine consistency.',
    problemSolved: 'Fixes persistent database timezone bugs where checking in late resets global active streaks.',
    technologies: ['Node.js', 'Express', 'SQLite', 'Node-Cron', 'TypeScript'],
    features: [
      'Timezone offset conversion verifying true calendar check-in streaks.',
      'Automated midnight scheduler assessing missed routines and updating statuses.',
      'Command-line API key validation for integrations with terminal dashboards.'
    ],
    futureImprovements: [
      'Gamification module computing experience multipliers based on streak difficulty.',
      'E2E encrypted synchronization supporting mobile companion applications.'
    ]
  },
  {
    id: 'portfolio-cms',
    name: 'Developer Portfolio CMS',
    tag: 'Systems Integration',
    overview: 'A headless Git-backed markdown content server that parses raw repos into structured project logs.',
    problemSolved: 'Avoids heavy bloated databases for static text logs, serving markdown files directly from GitHub.',
    technologies: ['Node.js', 'Express', 'GitHub API', 'Gray-Matter', 'Marked'],
    features: [
      'Git webhook routing triggers auto-rebuilds whenever repository files are committed.',
      'Desaturated syntax highlighter rendering code blocks in clean desaturated palettes.',
      'Static-ready caching layers returning split-second response times.'
    ],
    futureImprovements: [
      'Custom visual editor supporting inline block edits and auto-pushing commits.',
      'Self-hosting static compiler exporting full pages directly to standard folders.'
    ]
  }
];
