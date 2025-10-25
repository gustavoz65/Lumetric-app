"use client";
import Galaxy from "../components/backgorund/galaxy";
import SplitText from "../components/text/SplitText";
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Download,
  Settings,
} from "lucide-react";

export default function Dashboard() {
  const availableCharts = [
    {
      id: "tendencias",
      icon: <TrendingUp className="w-8 h-8" />,
      label: "Tendências",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "barras",
      icon: <BarChart3 className="w-8 h-8" />,
      label: "Barras",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "usuarios",
      icon: <Users className="w-8 h-8" />,
      label: "Usuários",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: "receitas",
      icon: <DollarSign className="w-8 h-8" />,
      label: "Receitas",
      color: "from-green-500 to-teal-500",
    },
    {
      id: "atividades",
      icon: <Activity className="w-8 h-8" />,
      label: "Atividades",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Galaxy com desfoque */}
      <div className="fixed inset-0 z-0">
        <Galaxy />
      </div>

      {/* Overlay de desfoque */}
      <div className="fixed inset-0 z-1 backdrop-blur-[3px] bg-black/30 pointer-events-none" />

      {/* Container principal */}
      <div className="relative z-10 min-h-screen">
        {/* Header superior */}
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
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Conteúdo central */}
        <div className="p-8">
          {/* Estado vazio */}
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
            <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
              <BarChart3 className="w-12 h-12 text-white" />
            </div>

            <SplitText
              text="Bem-vindo ao Lumetric"
              tag="h2"
              className="text-4xl font-bold mb-3 text-white"
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
            <p className="text-gray-200 mb-12 text-center max-w-md">
              Crie seu primeiro gráfico para começar a visualizar suas métricas
            </p>

            {/* Grid de opções de gráficos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl w-full mb-8">
              {availableCharts.map((chart) => (
                <button
                  key={chart.id}
                  className="flex flex-col items-center gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-white/40 group"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${chart.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    {chart.icon}
                  </div>
                  <p className="text-base font-semibold text-white">
                    {chart.label}
                  </p>
                </button>
              ))}
            </div>

            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white py-4 px-10 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl">
              Criar Primeiro Gráfico
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
