import { GraduationCap, Building2, Users, Globe } from "lucide-react";

const features = [
  {
    title: "University Life",
    description: "Academic Excellence and Intellectual",
    icon: Building2,
    color: "bg-[#2A2A8F]",
  },
  {
    title: "Postgraduate",
    description: "Academic Excellence and Intellectual",
    icon: GraduationCap,
    color: "bg-green-500",
  },
  {
    title: "Undergraduate",
    description: "Academic Excellence and Intellectual",
    icon: Users,
    color: "bg-[#2A2A8F]",
  },
  {
    title: "Global Scholarship",
    description: "Academic Excellence and Intellectual",
    icon: Globe,
    color: "bg-green-500",
  },
];

export function Features() {
  return (
    <div className="container mx-auto px-4 -mt-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.color} p-6 rounded-lg text-white`}
          >
            <feature.icon className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm opacity-90">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
