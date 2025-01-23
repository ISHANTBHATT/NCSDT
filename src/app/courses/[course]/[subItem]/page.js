import Image from "next/image";

const coursesData = {
  undergraduate: {
    "ba-pass": {
      title: "Bachelor of Arts (BA) Pass",
      description:
        "The BA Pass program is a versatile undergraduate degree designed to provide students with a foundational understanding of humanities and social sciences. It covers diverse subjects like history, political science, sociology, and literature, enabling students to explore multiple disciplines under one program. This course emphasizes critical thinking, effective communication, and analytical skills, preparing students for a wide range of career options. Graduates can pursue roles in public administration, journalism, teaching, and even creative fields like content writing and filmmaking.",
      image: "/images/14.jpg",
    },
    "bsc-medical": {
      title: "Bachelor of Science (B.Sc) Medical",
      description:
        "The B.Sc Medical program is designed for students passionate about life sciences and biological research. It covers subjects like botany, zoology, microbiology, and chemistry, offering a blend of theoretical knowledge and practical laboratory experience. The course equips students with a deep understanding of the natural world and the skills required for careers in biotechnology, healthcare, environmental science, or pharmacology.",
      image: "/images/14.jpg",
    },
    "bsc-non-medical": {
      title: "Bachelor of Science (B.Sc) Non-Medical",
      description:
        "This undergraduate program focuses on physical sciences, including physics, chemistry, and mathematics. The B.Sc Non-Medical course is ideal for students aspiring to build careers in engineering, technology, or research-intensive fields. With a strong emphasis on problem-solving and practical skills, it provides a foundation for roles in data analysis, software development, and industrial research.",
      image: "/images/14.jpg",
    },
    "bcom-pass": {
      title: "Bachelor of Commerce (B.Com) Pass",
      description:
        "The B.Com Pass program offers a comprehensive introduction to commerce, covering key areas like accounting, economics, business law, and management principles. Designed for students aiming for a career in finance, banking, or entrepreneurship, this course provides the tools to navigate the complexities of the business world.",
      image: "/images/14.jpg",
    },
    "bcom-hons": {
      title: "Bachelor of Commerce (B.Com) Hons",
      description:
        "A more specialized version of the B.Com Pass, the B.Com Hons program allows students to delve deeper into areas like taxation, corporate finance, and international trade. The curriculum is designed to provide a thorough understanding of commerce while also offering the opportunity for specialization in a chosen field.",
      image: "/images/14.jpg",
    },
    bba: {
      title: "Bachelor of Business Administration (BBA)",
      description:
        "The Bachelor of Business Administration program is a dynamic course tailored for aspiring entrepreneurs and business leaders. It offers in-depth knowledge of management principles, marketing strategies, financial planning, and organizational behavior. Students gain a holistic understanding of how businesses operate, preparing them for leadership roles in startups, corporations, or even their own ventures.",
      image: "/images/14.jpg",
    },
  },
  graduate: {
    "msc-chemistry": {
      title: "Master of Science (M.Sc) Chemistry",
      description:
        "The M.Sc Chemistry program offers advanced knowledge of chemical concepts, including organic, inorganic, and physical chemistry. Students explore cutting-edge research in areas like nanotechnology, pharmaceutical development, and environmental chemistry. Through rigorous laboratory work and theoretical studies, this program prepares graduates for roles in industries like petrochemicals, polymers, and healthcare.",
      image: "/images/14.jpg",
    },
    "msc-physics": {
      title: "Master of Science (M.Sc) Physics",
      description:
        "The M.Sc Physics program dives deep into the principles of matter, energy, and their interactions. Covering topics like quantum mechanics, thermodynamics, and astrophysics, it trains students to approach scientific problems with precision and creativity. This program is ideal for those aiming for careers in research institutions, space agencies, or advanced technology industries. It also provides opportunities for specialization in emerging fields such as quantum computing and materials science, ensuring graduates stay ahead in this rapidly evolving discipline.",
      image: "/images/14.jpg",
    },
    "msc-math": {
      title: "Master of Science (M.Sc) Mathematics",
      description:
        "The M.Sc Mathematics program offers an in-depth exploration of advanced mathematical theories and applications. Students study topics like algebra, topology, calculus, and numerical analysis, developing strong analytical and problem-solving skills. Graduates are well-equipped for careers in data science, actuarial science, and academic research. The program also serves as a gateway to doctoral studies, opening opportunities in teaching or research positions across universities and tech companies.",
      image: "/images/14.jpg",
    },
    mcom: {
      title: "Master of Commerce (M.Com)",
      description:
        "The Master of Commerce program provides advanced expertise in finance, taxation, and corporate governance. It equips students with the strategic thinking and decision-making skills needed to excel in senior management roles. With a strong focus on business ethics and financial analysis, the program prepares graduates for leadership roles in banking, insurance, and global trade. It also lays the groundwork for pursuing professional certifications like ACCA or CMA.",
      image: "/images/14.jpg",
    },
    "ma-english": {
      title: "Master of Arts (M.A) English",
      description:
        "The M.A English program is a deep dive into the world of literature, linguistics, and critical theory. It hones students' analytical and interpretative skills, fostering a nuanced understanding of classical and contemporary texts. Graduates can pursue careers in publishing, journalism, or academia, leveraging their ability to communicate effectively and think critically. The program also offers opportunities to specialize in creative writing or translation studies, catering to diverse interests.",
      image: "/images/14.jpg",
    },
    "ma-hindi": {
      title: "Master of Arts (M.A) Hindi",
      description:
        "This program explores the richness of Hindi literature and its cultural significance. It provides a platform for students to engage with classical texts, poetry, and modern literary trends. Graduates can pursue careers in education, creative writing, or public administration. The program also helps prepare candidates for roles in media, translation, and cultural research.",
      image: "/images/14.jpg",
    },
    "ma-history": {
      title: "Master of Arts (M.A) History",
      description:
        "The M.A History program offers an in-depth study of civilizations, historical events, and cultural transformations. Students learn to analyze historical sources, interpret societal changes, and draw connections between the past and present. Graduates are prepared for careers in research, archaeology, museums, and academia. The program also serves as a stepping stone for competitive exams like UPSC, where historical knowledge is highly valued.",
      image: "/images/14.jpg",
    },
  },
};

export default async function SubItemPage({ params }) {
  const { course, subItem } = await params;

  const data = coursesData[course]?.[subItem];

  if (!data) {
    return <div>Programme or course not found.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6 xl:pl-40 bg-white relative">
      <div className="md:w-1/2 bg-gray-50 p-4 lg:p-20  ">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="mt-4 text-lg">{data.description}</p>
        <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg">
          Learn more about {data.title}
        </button>
      </div>
      <div className="md:w-1/2 ">
        <div className="block lg:absolute top-20 left-[50%]">
          <Image
            src={data.image}
            alt={data.title}
            width={500}
            height={300}
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
