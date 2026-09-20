import React from 'react';

interface ProjectThumbnailProps {
  type: string;
  title: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ type, title }) => {
  switch (type) {
    case 'dashboard':
    case 'themeable-dashboard':
      return (
        <div className="w-full h-full bg-[#1A253A] flex flex-col p-3 overflow-hidden select-none">
          {/* Mock Browser Header with Light/Dark theme toggle indicator */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-[#FF8500]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500] animate-pulse" />
              THEMEABLE UI
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-amber-400/80" />
              <div className="w-3 h-3 rounded-full bg-indigo-400/80" />
            </div>
          </div>
          {/* Dashboard Grid Mockup */}
          <div className="grid grid-cols-12 gap-2 mt-3 flex-1">
            {/* Sidebar Mock */}
            <div className="col-span-3 bg-[#223049] rounded-lg p-2 space-y-1.5 flex flex-col">
              <div className="h-2.5 w-10 bg-[#FF8500] rounded" />
              <div className="h-1.5 w-full bg-white/20 rounded mt-1" />
              <div className="h-1.5 w-3/4 bg-white/20 rounded" />
              <div className="h-1.5 w-5/6 bg-white/20 rounded" />
              <div className="mt-auto h-2 w-8 bg-cyan-400/50 rounded" />
            </div>
            {/* Main Area Mock */}
            <div className="col-span-9 space-y-2">
              <div className="grid grid-cols-3 gap-1.5">
                <div className="bg-[#223049] p-1.5 rounded-md border border-white/5">
                  <div className="h-1.5 w-8 bg-white/30 rounded mb-1" />
                  <div className="h-3 w-10 bg-emerald-400 rounded" />
                </div>
                <div className="bg-[#223049] p-1.5 rounded-md border border-white/5">
                  <div className="h-1.5 w-8 bg-white/30 rounded mb-1" />
                  <div className="h-3 w-10 bg-[#FF8500] rounded" />
                </div>
                <div className="bg-[#223049] p-1.5 rounded-md border border-white/5">
                  <div className="h-1.5 w-8 bg-white/30 rounded mb-1" />
                  <div className="h-3 w-10 bg-cyan-400 rounded" />
                </div>
              </div>
              {/* Chart Mock */}
              <div className="bg-[#223049] p-2 rounded-md h-12 flex items-end justify-between px-2">
                <div className="w-2 bg-cyan-400/40 rounded-t h-4" />
                <div className="w-2 bg-cyan-400/70 rounded-t h-8" />
                <div className="w-2 bg-[#FF8500]/60 rounded-t h-6" />
                <div className="w-2 bg-[#FF8500] rounded-t h-9" />
                <div className="w-2 bg-emerald-400 rounded-t h-7" />
                <div className="w-2 bg-emerald-400/60 rounded-t h-5" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'ecommerce':
      return (
        <div className="w-full h-full bg-[#1A253A] flex flex-col p-3 overflow-hidden select-none">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              MERN E-COMMERCE
            </div>
            <div className="w-4 h-3 rounded bg-white/10" />
          </div>
          {/* Mock Store Content */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="col-span-2 bg-[#223049] rounded-lg p-2 flex flex-col justify-between h-24">
              <div className="h-3 w-16 bg-[#FF8500]/70 rounded" />
              <div className="space-y-1">
                <div className="h-2 w-full bg-white/10 rounded" />
                <div className="h-2 w-3/4 bg-white/10 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div className="h-4 w-12 bg-[#FF8500] rounded" />
                <span className="text-[9px] text-emerald-400 font-bold">JWT AUTH</span>
              </div>
            </div>
            <div className="col-span-1 space-y-2">
              <div className="h-11 bg-[#223049] rounded-lg p-1.5 flex items-center gap-1">
                <div className="w-6 h-6 rounded bg-[#FF8500]/30 flex items-center justify-center text-[10px]">🛒</div>
                <div className="h-2 w-8 bg-white/20 rounded" />
              </div>
              <div className="h-11 bg-[#223049] rounded-lg p-1.5 flex items-center gap-1">
                <div className="w-6 h-6 rounded bg-emerald-500/30 flex items-center justify-center text-[10px]">💳</div>
                <div className="h-2 w-8 bg-white/20 rounded" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'rehab-ai':
    case 'rehabilitation':
      return (
        <div className="w-full h-full bg-[#0E1726] flex flex-col p-3 overflow-hidden select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] text-cyan-400 font-mono tracking-wider">AI REHAB · CNN + RAG</span>
          </div>
          <div className="flex items-center justify-around mt-2 h-24">
            {/* AI Severity Indicator Circle */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#1E293B"
                  strokeWidth="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#FF8500"
                  strokeDasharray="88, 100"
                  strokeWidth="3.5"
                />
              </svg>
              <div className="absolute text-[8px] font-bold text-white text-center leading-none">
                CNN<br/><span className="text-[#FF8500]">Model</span>
              </div>
            </div>
            <div className="space-y-1.5 flex-1 pl-4">
              <div className="text-[10px] text-gray-300 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                RAG Recommendations
              </div>
              <div className="h-1.5 w-full bg-cyan-400/40 rounded-full" />
              <div className="h-1.5 w-4/5 bg-[#FF8500]/60 rounded-full" />
              <div className="h-1.5 w-3/5 bg-purple-400/40 rounded-full" />
              <div className="text-[9px] text-[#A8B0C0] font-mono mt-1">Flutter App Tracking</div>
            </div>
          </div>
        </div>
      );

    case 'fitness':
      return (
        <div className="w-full h-full bg-[#0E1726] flex flex-col p-3 overflow-hidden select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] text-cyan-400 font-mono">ACTIVITY TRACKER</span>
          </div>
          <div className="flex items-center justify-around mt-2 h-24">
            {/* Activity rings */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#1E293B"
                  strokeWidth="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#FF8500"
                  strokeDasharray="75, 100"
                  strokeWidth="3.5"
                />
              </svg>
              <div className="absolute text-[9px] font-bold text-white">75%</div>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-20 bg-cyan-400/40 rounded-full" />
              <div className="h-2 w-16 bg-[#FF8500]/60 rounded-full" />
              <div className="h-2 w-24 bg-purple-400/40 rounded-full" />
              <div className="h-3 w-14 bg-white/20 rounded mt-2" />
            </div>
          </div>
        </div>
      );

    case 'ai-content':
      return (
        <div className="w-full h-full bg-[#141E33] flex flex-col p-3 overflow-hidden select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-3 w-20 rounded bg-indigo-500/30" />
          </div>
          <div className="mt-2 space-y-2">
            <div className="h-6 w-full rounded bg-[#1C2A47] p-1 flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <div className="h-2 w-28 bg-white/30 rounded" />
            </div>
            <div className="bg-[#1C2A47] rounded-lg p-2 space-y-1.5">
              <div className="h-2 w-full bg-white/20 rounded" />
              <div className="h-2 w-5/6 bg-white/20 rounded" />
              <div className="h-2 w-2/3 bg-[#FF8500]/50 rounded" />
            </div>
          </div>
        </div>
      );

    case 'crypto':
      return (
        <div className="w-full h-full bg-[#0F172A] flex flex-col p-3 overflow-hidden select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">+18.4%</span>
          </div>
          <div className="mt-2 flex items-end justify-between h-24 px-2 pb-1">
            <div className="w-3 bg-cyan-500/40 rounded-t h-8" />
            <div className="w-3 bg-cyan-500/60 rounded-t h-14" />
            <div className="w-3 bg-red-400/50 rounded-t h-10" />
            <div className="w-3 bg-emerald-400/60 rounded-t h-16" />
            <div className="w-3 bg-emerald-400/80 rounded-t h-20" />
            <div className="w-3 bg-[#FF8500] rounded-t h-22" />
          </div>
        </div>
      );

    case 'task-mgmt':
      return (
        <div className="w-full h-full bg-[#182238] flex flex-col p-3 overflow-hidden select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-3 w-16 bg-white/10 rounded" />
          </div>
          <div className="grid grid-cols-3 gap-1.5 mt-2 h-24">
            <div className="bg-[#202C48] rounded p-1.5 space-y-1">
              <div className="h-2 w-8 bg-amber-400/60 rounded" />
              <div className="h-6 bg-white/5 rounded border border-white/5" />
            </div>
            <div className="bg-[#202C48] rounded p-1.5 space-y-1">
              <div className="h-2 w-10 bg-[#FF8500]/60 rounded" />
              <div className="h-6 bg-white/5 rounded border border-white/5" />
              <div className="h-6 bg-white/5 rounded border border-white/5" />
            </div>
            <div className="bg-[#202C48] rounded p-1.5 space-y-1">
              <div className="h-2 w-8 bg-emerald-400/60 rounded" />
              <div className="h-6 bg-white/5 rounded border border-white/5" />
            </div>
          </div>
        </div>
      );

    case 'real-estate':
      return (
        <div className="w-full h-full bg-[#121B2F] flex flex-col p-3 overflow-hidden select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-3 w-20 bg-white/10 rounded" />
          </div>
          <div className="mt-2 flex gap-2 h-24">
            <div className="w-1/2 bg-[#1E2B4A] rounded-lg p-2 flex flex-col justify-between">
              <div className="h-2 w-12 bg-[#FF8500] rounded" />
              <div className="space-y-1">
                <div className="h-2 w-full bg-white/20 rounded" />
                <div className="h-2 w-3/4 bg-white/20 rounded" />
              </div>
            </div>
            <div className="w-1/2 bg-[#1E2B4A] rounded-lg p-2 flex flex-col justify-between">
              <div className="h-2 w-10 bg-cyan-400 rounded" />
              <div className="space-y-1">
                <div className="h-2 w-full bg-white/20 rounded" />
                <div className="h-2 w-2/3 bg-white/20 rounded" />
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-[#111D32] flex items-center justify-center p-4">
          <span className="text-xs font-semibold text-white/60">{title}</span>
        </div>
      );
  }
};
