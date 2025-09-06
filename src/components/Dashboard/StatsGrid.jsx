import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  DollarSign,
  Eye,
  ShoppingCart,
  Users,
} from "lucide-react";
import React from "react";

const stats = [
  {
    title: "Total Revenue",
    value: "234,600",
    change: "+7.2%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Active Subscribers",
    value: "6812",
    change: "+3.2%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-green-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Total Orders",
    value: "7,334",
    change: "+2.32%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-blue-500 to-green-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-green-600 dark:text-blue-400",
  },
  {
    title: "Page Views",
    value: "747,339",
    change: "-1.7%",
    trend: "down",
    icon: Eye,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-green-600 dark:text-green-400",
  },
];

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md-grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stats, index) => {
        return (
          <div
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6
        border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl
        hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group
        "
            key={index}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  {stats.title}
                </p>
                <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  {stats.value}
                </p>
                <div className="flex items-center space-x-2">
                  {stats.trend == "up" ? (
                    <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={`text font-semibold ${
                      stats.trend === "up" ? "text-emerald-500" : "text-red-500"
                    }`}
                  >
                    {stats.change}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    vs Last month
                  </span>
                </div>
              </div>
              <div
                className={`p-3 rounded-xl ${stats.bgColor} group-hover:scale-110 transition-all duration-300`}
              >
                {<stats.icon className={`w-6 h-6 ${stats.textColor}`} />}
              </div>
            </div>
            {/* ProgressBar */}
            <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${stats.color} rounded-full transition-all duration-100`}
                style={{ width: stats.trend === "up" ? "75%" : "45%" }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsGrid;
