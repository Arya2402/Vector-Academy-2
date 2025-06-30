import {
  GraduationCap,
  BookOpen,
  FileText,
  HelpCircle,
  FileBarChart,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    title: "Expert EAPCET Faculty",
    desc:
      "Qualified instructors with years of EAPCET-specific experience.\nSpecial sessions for Engineering, Agriculture & Pharmacy streams.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-green-600" />,
    title: "Integrated Coaching",
    desc:
      "Combines Intermediate syllabus with EAPCET preparation.\nFocus on concept clarity & shortcut techniques.",
  },
  {
    icon: <FileText className="w-8 h-8 text-purple-600" />,
    title: "Complete Syllabus Coverage",
    desc:
      "Subject-wise and chapter-wise planning.\nBalanced focus on MPC/BiPC topics for better outcomes.",
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-orange-600" />,
    title: "Personal Mentoring",
    desc:
      "One-on-one doubt-clearing sessions with subject experts.\n24/7 academic support via online platforms.",
  },
  {
    icon: <FileBarChart className="w-8 h-8 text-red-600" />,
    title: "Mock Tests & Practice Sets",
    desc:
      "Weekly EAPCET-level mock tests.\nTopic-wise practice papers with performance analysis.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-pink-600" />,
    title: "Progress Tracking",
    desc:
      "Timely student report cards & feedback.\nPersonalized attention based on test performance.",
  },
];

export default function Eapcetcom() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
        We provide
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 items-start hover:shadow-xl transition duration-300"
          >
            {feature.icon}
            <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
