import Image from "next/image";

const programmesData = {
  business: {
    bba: {
      title: "Bachelor of Business Administration (BBA)",
      description:
        "Our Bachelor of Business Administration (BBA) program lays a strong foundation in business administration and management. It covers key aspects of business such as marketing, finance, operations, and entrepreneurship, helping students gain a comprehensive understanding of the corporate world. This program is ideal for those looking to develop analytical and problem-solving skills, preparing them to tackle challenges in dynamic business environments. \n\nThrough a combination of theoretical knowledge and practical training, the BBA program equips students with the tools they need to excel in their careers. Graduates can pursue diverse roles in corporate settings, startups, or even venture into entrepreneurship, making this program a versatile stepping stone for success.",
      image: "/images/9.jpg",
    },
    mba: {
      title: "Master of Business Administration (MBA)",
      description:
        "The Master of Business Administration (MBA) program is designed to nurture future leaders by providing advanced knowledge in business strategies and management practices. Students learn critical skills such as strategic thinking, decision-making, and leadership, enabling them to handle complex challenges in competitive industries. The program emphasizes practical learning through case studies, projects, and internships, ensuring that graduates are industry-ready. \n\nWhether you're looking to advance in your career or transition to a leadership role, the MBA program provides the expertise needed to succeed. Graduates can explore opportunities in diverse fields such as marketing, finance, operations, and consulting, making it a gateway to a rewarding career in the business world.",
      image: "/images/9.jpg",
    },
  },
  computers: {
    bca: {
      title: "Bachelor of Computer Applications (BCA)",
      description:
        "The Bachelor of Computer Applications (BCA) program is tailored for students passionate about computer science and software development. It covers essential topics such as programming languages, database management, and web development, preparing students to meet the demands of the rapidly evolving tech industry. With a strong focus on practical skills, the program ensures that graduates are equipped to handle real-world IT challenges. \n\nThis program serves as a stepping stone for careers in software development, data analytics, and cybersecurity. Graduates can pursue roles in IT companies, startups, or further their education with advanced courses, making the BCA a versatile and valuable choice for aspiring tech professionals.",
      image: "/images/9.jpg",
    },
    mca: {
      title: "Master of Computer Applications (MCA)",
      description:
        "The Master of Computer Applications (MCA) program offers in-depth knowledge of advanced computer applications and IT concepts. It equips students with expertise in areas such as software engineering, artificial intelligence, and system design, ensuring they are prepared for specialized roles in the tech industry. The curriculum blends theoretical learning with hands-on experience, enabling students to solve complex technical problems. \n\nGraduates of the MCA program are well-positioned to take on leadership roles in IT, research, and software development. Whether it's designing innovative solutions or managing large-scale projects, the MCA provides the tools and knowledge needed to thrive in a technology-driven world.",
      image: "/images/9.jpg",
    },
  },
};

export default async function SubItemPage({ params }) {
  const { programme, subItem } = await params;

  const data = programmesData[programme]?.[subItem];

  if (!data) {
    return <div>Programme or course not found.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white">
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2 bg-gray-50 p-20">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="mt-4 text-lg">{data.description}</p>
        <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg">
          Learn more about {data.title}
        </button>
      </div>
    </div>
  );
}
