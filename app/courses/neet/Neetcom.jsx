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
    title: "Expert Medical Faculty",
    desc: "Doctors and subject specialists in Biology, Physics, and Chemistry.\nRegular live interactions and NEET-specific mentoring.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-green-600" />,
    title: "NCERT-Focused Teaching",
    desc: "100% syllabus coverage from NCERT books.\nEmphasis on high-yield topics based on past NEET trends.",
  },
  {
    icon: <FileText className="w-8 h-8 text-purple-600" />,
    title: "Concept-Based Learning",
    desc: "Strong foundation in theory with daily MCQs.\nVisual and diagram-based biology explanations.",
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-orange-600" />,
    title: "Doubt Resolution Support",
    desc: "Daily doubt-solving desks and one-on-one sessions.\n24x7 doubt forums for instant support.",
  },
  {
    icon: <FileBarChart className="w-8 h-8 text-red-600" />,
    title: "Regular NEET Mock Tests",
    desc: "Weekly full-length NEET pattern tests.\nAll India test series with rankings and analysis.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-pink-600" />,
    title: "Progress Monitoring",
    desc: "Chapter-wise accuracy and speed reports.\nPersonalized improvement plans and mentoring.",
  },
];

export default function Neetcom() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
        We Provide
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 items-start hover:shadow-xl transition duration-300"
          >
            {feature.icon}
            <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
