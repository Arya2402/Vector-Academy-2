import { GraduationCap, BookOpen, FileText, HelpCircle, FileBarChart, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    title: 'Experienced Faculty',
    desc: 'IIT/NIT alumni or experienced JEE mentors.\nRegular teacher evaluations and doubt-clearing sessions.'
  },
  {
    icon: <BookOpen className="w-8 h-8 text-green-600" />,
    title: 'Integrated Coaching',
    desc: 'JEE Main + Advanced coaching alongside regular curriculum.\nWeekly classes dedicated to NCERT + advanced concepts.'
  },
  {
    icon: <FileText className="w-8 h-8 text-purple-600" />,
    title: 'Well-Structured Curriculum',
    desc: 'Topic-wise planning aligned with JEE syllabus.\nFocused theory + problem-solving sessions.'
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-orange-600" />,
    title: 'Doubt-Clearing Cells',
    desc: 'Daily/weekly doubt sessions with subject experts.\nPeer mentoring and assistant faculty support.'
  },
  {
    icon: <FileBarChart className="w-8 h-8 text-red-600" />,
    title: 'Mock Tests & Practice Papers',
    desc: 'Regular JEE-level mock exams (Main & Advanced).\nPast year question paper solving.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-pink-600" />,
    title: 'Performance Tracking',
    desc: 'Personalized progress reports.\nAnalytics-based feedback and mentoring.'
  },
];

export default function Jeecom() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">We provide</h2>

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
