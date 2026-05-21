import { LucideIcon } from "lucide-react";

export default function StatsCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color,
}) {
  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      iconBg: "bg-blue-600",
      iconText: "text-white",
      changeText: "text-green-600",
    },

    green: {
      bg: "bg-green-50",
      iconBg: "bg-green-600",
      iconText: "text-white",
      changeText: "text-green-600",
    },

    purple: {
      bg: "bg-purple-50",
      iconBg: "bg-purple-600",
      iconText: "text-white",
      changeText: "text-green-600",
    },

    orange: {
      bg: "bg-orange-50",
      iconBg: "bg-orange-600",
      iconText: "text-white",
      changeText: "text-green-600",
    },
  };

  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colors.iconBg}`}>
          <Icon className={`h-6 w-6 ${colors.iconText}`} />
        </div>

        <span className={`text-sm font-medium ${colors.changeText}`}>
          {changeType === "increase" ? "+" : ""}
          {change}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-1">
        {value}
      </h3>

      <p className="text-sm text-gray-600">
        {title}
      </p>
    </div>
  );
}