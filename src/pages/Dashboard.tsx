"use client";
import Galaxy from "../components/backgorund/galaxy";
import SplitText from "../components/text/SplitText";
import TargetCursor from "../components/Animation/TargetCursor";
import { BarChart3, Users, Wallet, Download, Settings } from "lucide-react";

export default function Dashboard() {
  const availableCharts = [
    {
      id: "barras",
      icon: <BarChart3 className="w-10 h-10" />,
      label: "Graficos",
    },
    {
      id: "usuarios",
      icon: <Users className="w-10 h-10" />,
      label: "Usuários",
    },
    {
      id: "receitas",
      icon: <Wallet className="w-10 h-10" />,
      label: "Receitas",
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <div className="fixed inset-0 z-0">
        <Galaxy />
      </div>

      <div className="fixed inset-0 z-1 backdrop-blur-[3px] bg-black/30 pointer-events-none" />

      <div className="relative z-10 min-h-screen">
        <header className="bg-black/30 backdrop-blur-md border-b border-white/10 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SplitText
              text="Lumetric"
              tag="h1"
              className="text-3xl font-bold text-white"
              delay={80}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30, rotateX: -90 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="left"
            />
            <span className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Última atualização: há 5 min
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="cursor-target p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Download className="w-5 h-5" />
            </button>
            <button className="cursor-target p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="p-8">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
            <SplitText
              text="Selecione um serviço"
              tag="h2"
              className="text-4xl font-bold mb-16 text-white"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, scale: 0.5, y: 50 }}
              to={{ opacity: 1, scale: 1, y: 0 }}
              threshold={0.2}
              rootMargin="0px"
              textAlign="center"
            />

            <div className="flex items-center justify-center gap-8 max-w-5xl w-full">
              {availableCharts.map((chart) => (
                <button
                  key={chart.id}
                  className="cursor-target flex flex-col items-center gap-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-2xl p-8 transition-all duration-200 group"
                >
                  <div className="w-20 h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                    <div className="text-gray-300 group-hover:text-white transition-colors">
                      {chart.icon}
                    </div>
                  </div>
                  <p className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">
                    {chart.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
