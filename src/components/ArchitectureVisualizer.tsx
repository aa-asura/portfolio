import React, { useEffect, useState } from 'react';
import { Globe, Link, Cpu, Database, Sparkles, Terminal, FileCode2, ShieldAlert } from 'lucide-react';

interface ArchitectureVisualizerProps {
  projectId: string;
}

interface NodeData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tech: string;
  status: 'active' | 'pending' | 'idle';
}

export default function ArchitectureVisualizer({ projectId }: ArchitectureVisualizerProps) {
  const [activeStep, setActiveStep] = useState(0);

  // Cycle the active step to simulate a running transaction/pipeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Determine specific architecture data based on projectId
  const getArchitectureData = (): {
    client: NodeData;
    gateway: NodeData;
    server: NodeData;
    database: NodeData;
    transmissionLabel: string;
  } => {
    switch (projectId) {
      case 'ai-note-assistant':
        return {
          client: {
            title: 'Markdown client',
            subtitle: 'React 19 interface',
            icon: <Globe className="w-4.5 h-4.5" />,
            tech: 'React & motion',
            status: activeStep === 0 ? 'active' : 'idle',
          },
          gateway: {
            title: 'Context endpoints',
            subtitle: 'POST /api/notes/summarize',
            icon: <Link className="w-4.5 h-4.5" />,
            tech: 'Express gateway',
            status: activeStep === 1 ? 'active' : 'idle',
          },
          server: {
            title: 'Gemini Context SDK',
            subtitle: '@google/genai handler',
            icon: <Cpu className="w-4.5 h-4.5" />,
            tech: 'Gemini 2.5 server',
            status: activeStep === 2 ? 'active' : 'idle',
          },
          database: {
            title: 'Semantic vector DB',
            subtitle: 'Note clusters',
            icon: <Sparkles className="w-4.5 h-4.5" />,
            tech: 'ChromaDB embeddings',
            status: activeStep === 3 ? 'active' : 'idle',
          },
          transmissionLabel: 'Note context payload',
        };

      case 'smart-task-api':
        return {
          client: {
            title: 'Multi-tenant client',
            subtitle: 'Dashboard interface',
            icon: <Globe className="w-4.5 h-4.5" />,
            tech: 'React TypeScript',
            status: activeStep === 0 ? 'active' : 'idle',
          },
          gateway: {
            title: 'Rate limiter gate',
            subtitle: 'GET /api/tasks with JWT',
            icon: <ShieldAlert className="w-4.5 h-4.5" />,
            tech: 'Token Bucket check',
            status: activeStep === 1 ? 'active' : 'idle',
          },
          server: {
            title: 'RBAC filter engine',
            subtitle: 'Permission verification',
            icon: <Cpu className="w-4.5 h-4.5" />,
            tech: 'Node controller',
            status: activeStep === 2 ? 'active' : 'idle',
          },
          database: {
            title: 'Relational storage',
            subtitle: 'Task audit logs',
            icon: <Database className="w-4.5 h-4.5" />,
            tech: 'Transactional SQLite',
            status: activeStep === 3 ? 'active' : 'idle',
          },
          transmissionLabel: 'Token-scoped payload',
        };

      case 'finance-backend':
        return {
          client: {
            title: 'Ledger UI client',
            subtitle: 'Spreadsheet module',
            icon: <Globe className="w-4.5 h-4.5" />,
            tech: 'Inter responsive UI',
            status: activeStep === 0 ? 'active' : 'idle',
          },
          gateway: {
            title: 'Ledger endpoint',
            subtitle: 'POST /api/ledgers/entry',
            icon: <Link className="w-4.5 h-4.5" />,
            tech: 'Flask routing gate',
            status: activeStep === 1 ? 'active' : 'idle',
          },
          server: {
            title: 'Ledger double-entry model',
            subtitle: 'Balance calculations',
            icon: <Cpu className="w-4.5 h-4.5" />,
            tech: 'Python logic core',
            status: activeStep === 2 ? 'active' : 'idle',
          },
          database: {
            title: 'Relational DB',
            subtitle: 'Durable cash sheets',
            icon: <Database className="w-4.5 h-4.5" />,
            tech: 'PostgreSQL relational',
            status: activeStep === 3 ? 'active' : 'idle',
          },
          transmissionLabel: 'Decimal-accurate schema',
        };

      case 'doc-search-ai':
        return {
          client: {
            title: 'Retriever dashboard',
            subtitle: 'PDF Drag & Drop',
            icon: <Globe className="w-4.5 h-4.5" />,
            tech: 'React hook uploads',
            status: activeStep === 0 ? 'active' : 'idle',
          },
          gateway: {
            title: 'Query dispatcher',
            subtitle: 'POST /api/query/pdf',
            icon: <Link className="w-4.5 h-4.5" />,
            tech: 'Express gateway',
            status: activeStep === 1 ? 'active' : 'idle',
          },
          server: {
            title: 'SentenceTransformers',
            subtitle: 'Chunking & embedding',
            icon: <Cpu className="w-4.5 h-4.5" />,
            tech: 'Python inference layer',
            status: activeStep === 2 ? 'active' : 'idle',
          },
          database: {
            title: 'Vector index space',
            subtitle: 'Semantic chunk nodes',
            icon: <Sparkles className="w-4.5 h-4.5" />,
            tech: 'ChromaDB vectors',
            status: activeStep === 3 ? 'active' : 'idle',
          },
          transmissionLabel: '768-dim context vectors',
        };

      case 'habit-tracker-api':
        return {
          client: {
            title: 'Streak calendar',
            subtitle: 'Check-in terminal',
            icon: <Terminal className="w-4.5 h-4.5" />,
            tech: 'React interactive grid',
            status: activeStep === 0 ? 'active' : 'idle',
          },
          gateway: {
            title: 'Check-in gate',
            subtitle: 'PUT /api/streaks/offset',
            icon: <Link className="w-4.5 h-4.5" />,
            tech: 'JSON validation layer',
            status: activeStep === 1 ? 'active' : 'idle',
          },
          server: {
            title: 'Offset normalization',
            subtitle: 'Cron job check-in',
            icon: <Cpu className="w-4.5 h-4.5" />,
            tech: 'Timezone translation node',
            status: activeStep === 2 ? 'active' : 'idle',
          },
          database: {
            title: 'Streak journals',
            subtitle: 'Agnostic state logs',
            icon: <Database className="w-4.5 h-4.5" />,
            tech: 'SQLite storage',
            status: activeStep === 3 ? 'active' : 'idle',
          },
          transmissionLabel: 'ISO timezone payload',
        };

      default: // portfolio-cms
        return {
          client: {
            title: 'Static portfolio page',
            subtitle: 'Split-second speed',
            icon: <Globe className="w-4.5 h-4.5" />,
            tech: 'React 19 build',
            status: activeStep === 0 ? 'active' : 'idle',
          },
          gateway: {
            title: 'GitHub webhook gateway',
            subtitle: 'POST /api/webhook/repo',
            icon: <Link className="w-4.5 h-4.5" />,
            tech: 'Express gateway',
            status: activeStep === 1 ? 'active' : 'idle',
          },
          server: {
            title: 'gray-matter parser',
            subtitle: 'Markdown compiler',
            icon: <FileCode2 className="w-4.5 h-4.5" />,
            tech: 'Node asset builder',
            status: activeStep === 2 ? 'active' : 'idle',
          },
          database: {
            title: 'Git file system',
            subtitle: 'Raw markdown logs',
            icon: <Database className="w-4.5 h-4.5" />,
            tech: 'GitHub repository',
            status: activeStep === 3 ? 'active' : 'idle',
          },
          transmissionLabel: 'Raw Markdown file buffer',
        };
    }
  };

  const arch = getArchitectureData();

  return (
    <div className="w-full bg-mountain-black/40 border border-mountain-ice/5 rounded-xl p-4 sm:p-6 space-y-4 relative overflow-hidden select-none">
      
      {/* Background grids */}
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
      <div className="absolute top-2 right-3 text-[9px] font-mono tracking-widest text-mountain-cyan animate-pulse">
        ● PIPELINE ACTIVE
      </div>

      <h4 className="text-[10px] font-mono uppercase tracking-widest text-mountain-ice flex items-center space-x-1.5">
        <Sparkles className="w-3.5 h-3.5 text-mountain-cyan" />
        <span>Real-time System Architecture visualizer</span>
      </h4>

      {/* Nodes visual map */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative py-6">
        
        {/* Node 1: Client */}
        <div className={`p-3.5 rounded-lg border transition-all duration-300 relative z-10 ${
          arch.client.status === 'active'
            ? 'bg-mountain-slate/40 border-mountain-cyan/40 shadow-[0_0_12px_rgba(6,182,212,0.15)] scale-102 text-mountain-ice'
            : 'bg-mountain-obsidian/30 border-mountain-ice/5 text-mountain-fog'
        }`}>
          <div className="flex items-center space-x-2.5">
            <div className={`p-2 rounded-md ${arch.client.status === 'active' ? 'bg-mountain-cyan/15 text-mountain-cyan' : 'bg-mountain-slate/10 text-mountain-fog'}`}>
              {arch.client.icon}
            </div>
            <div>
              <span className="block text-[8px] font-mono uppercase tracking-wider text-mountain-cyan/80">Tier 1: Front-end</span>
              <h5 className="font-display font-bold text-xs tracking-wide">{arch.client.title}</h5>
              <span className="block text-[9px] font-mono opacity-85 mt-0.5">{arch.client.tech}</span>
            </div>
          </div>
        </div>

        {/* Node 2: Gateway */}
        <div className={`p-3.5 rounded-lg border transition-all duration-300 relative z-10 ${
          arch.gateway.status === 'active'
            ? 'bg-mountain-slate/40 border-mountain-cyan/40 shadow-[0_0_12px_rgba(6,182,212,0.15)] scale-102 text-mountain-ice'
            : 'bg-mountain-obsidian/30 border-mountain-ice/5 text-mountain-fog'
        }`}>
          <div className="flex items-center space-x-2.5">
            <div className={`p-2 rounded-md ${arch.gateway.status === 'active' ? 'bg-mountain-cyan/15 text-mountain-cyan' : 'bg-mountain-slate/10 text-mountain-fog'}`}>
              {arch.gateway.icon}
            </div>
            <div>
              <span className="block text-[8px] font-mono uppercase tracking-wider text-mountain-cyan/80">Tier 2: Ingress</span>
              <h5 className="font-display font-bold text-xs tracking-wide">{arch.gateway.title}</h5>
              <span className="block text-[9px] font-mono opacity-85 mt-0.5 text-mountain-cyan">{arch.gateway.subtitle}</span>
            </div>
          </div>
        </div>

        {/* Node 3: Server */}
        <div className={`p-3.5 rounded-lg border transition-all duration-300 relative z-10 ${
          arch.server.status === 'active'
            ? 'bg-mountain-slate/40 border-mountain-cyan/40 shadow-[0_0_12px_rgba(6,182,212,0.15)] scale-102 text-mountain-ice'
            : 'bg-mountain-obsidian/30 border-mountain-ice/5 text-mountain-fog'
        }`}>
          <div className="flex items-center space-x-2.5">
            <div className={`p-2 rounded-md ${arch.server.status === 'active' ? 'bg-mountain-cyan/15 text-mountain-cyan' : 'bg-mountain-slate/10 text-mountain-fog'}`}>
              {arch.server.icon}
            </div>
            <div>
              <span className="block text-[8px] font-mono uppercase tracking-wider text-mountain-cyan/80">Tier 3: Execution</span>
              <h5 className="font-display font-bold text-xs tracking-wide">{arch.server.title}</h5>
              <span className="block text-[9px] font-mono opacity-85 mt-0.5">{arch.server.tech}</span>
            </div>
          </div>
        </div>

        {/* Node 4: DB */}
        <div className={`p-3.5 rounded-lg border transition-all duration-300 relative z-10 ${
          arch.database.status === 'active'
            ? 'bg-mountain-slate/40 border-mountain-cyan/40 shadow-[0_0_12px_rgba(6,182,212,0.15)] scale-102 text-mountain-ice'
            : 'bg-mountain-obsidian/30 border-mountain-ice/5 text-mountain-fog'
        }`}>
          <div className="flex items-center space-x-2.5">
            <div className={`p-2 rounded-md ${arch.database.status === 'active' ? 'bg-mountain-cyan/15 text-mountain-cyan' : 'bg-mountain-slate/10 text-mountain-fog'}`}>
              {arch.database.icon}
            </div>
            <div>
              <span className="block text-[8px] font-mono uppercase tracking-wider text-mountain-cyan/80">Tier 4: Storage</span>
              <h5 className="font-display font-bold text-xs tracking-wide">{arch.database.title}</h5>
              <span className="block text-[9px] font-mono opacity-85 mt-0.5">{arch.database.tech}</span>
            </div>
          </div>
        </div>

        {/* SVG connection wire lines with animated glow beads */}
        <svg className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-8 hidden md:block z-0 pointer-events-none overflow-visible">
          {/* Wire 1 */}
          <line x1="12%" y1="50%" x2="35%" y2="50%" stroke="rgba(226, 241, 255, 0.08)" strokeWidth="1.5" />
          {/* Wire 2 */}
          <line x1="38%" y1="50%" x2="61%" y2="50%" stroke="rgba(226, 241, 255, 0.08)" strokeWidth="1.5" />
          {/* Wire 3 */}
          <line x1="64%" y1="50%" x2="88%" y2="50%" stroke="rgba(226, 241, 255, 0.08)" strokeWidth="1.5" />

          {/* Glowing particle animated loops */}
          <circle r="3" fill="#06B6D4" className="filter drop-shadow-[0_0_4px_#06B6D4]">
            <animateMotion 
              path="M 100 16 L 270 16" 
              begin="0s" 
              dur="2.8s" 
              repeatCount="indefinite" 
              calcMode="linear" 
            />
          </circle>

          <circle r="3" fill="#06B6D4" className="filter drop-shadow-[0_0_4px_#06B6D4]">
            <animateMotion 
              path="M 280 16 L 490 16" 
              begin="0.7s" 
              dur="2.8s" 
              repeatCount="indefinite" 
              calcMode="linear" 
            />
          </circle>

          <circle r="3" fill="#06B6D4" className="filter drop-shadow-[0_0_4px_#06B6D4]">
            <animateMotion 
              path="M 500 16 L 710 16" 
              begin="1.4s" 
              dur="2.8s" 
              repeatCount="indefinite" 
              calcMode="linear" 
            />
          </circle>
        </svg>

      </div>

      {/* Transaction progress display */}
      <div className="flex items-center justify-between border-t border-mountain-ice/5 pt-3 font-mono text-[9px] text-mountain-fog">
        <span className="flex items-center space-x-1.5">
          <span className="w-1 h-1 rounded-full bg-mountain-cyan animate-ping"></span>
          <span>Transmitting: <strong className="text-mountain-ice">{arch.transmissionLabel}</strong></span>
        </span>
        <span className="text-[10px] tracking-wider text-mountain-cyan uppercase font-semibold">
          Step {activeStep + 1} / 4 Active
        </span>
      </div>

    </div>
  );
}
