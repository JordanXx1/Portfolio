const About = () => (
  <section
    className="relative p-10 dark:bg-gray-900 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-white"
    id="about"
    data-aos="fade-up"
  >
    {/* เอฟเฟกต์พื้นหลังเบลอจางๆ */}
    <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl -top-10 -left-10 animate-float z-0" />
    <div className="absolute w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-2xl -bottom-20 -right-20 animate-float z-0" />

    <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white/10 dark:bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
      {/* รูปโปรไฟล์ */}
      <div className="w-120 h-120 rounded-md overflow-hidden shadow-2xl hover:scale-105 transition duration-300 border-2 border-blue-600 bg-white dark:bg-gray-800">
        <img
          src="/images/jordan.jpg"
          alt="Surachet"
          className="w-full h-full object-cover"
        />
      </div>

      {/* เนื้อหา */}
      <div className="text-center md:text-left text-gray-800 dark:text-gray-200">
        <h2 className="text-2xl sm:text-3xl">เกี่ยวกับฉัน</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          ผมชื่อสุรเชษฐ์ เป็นนักพัฒนาเว็บไซต์ที่สามารถทำงานได้ทั้งฝั่ง Frontend
          และ Backend มีความตั้งใจจริง ชอบเรียนรู้สิ่งใหม่ ๆ
          และมุ่งมั่นในการสร้างเว็บที่ตอบโจทย์ทั้งด้านประสบการณ์ผู้ใช้และความเสถียรของระบบ
        </p>

        {/* ทักษะ */}
        <div className="flex flex-wrap gap-3 text-sm font-medium justify-center md:justify-start">
          {[
            "React",
            "Node.js",
            "JavaScript",
            "Tailwind CSS",
            "MongoDB",
            "MySQL",
          ].map((skill, i) => (
            <span
              key={i}
              className="bg-blue-600 text-white px-3 py-1 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* คำคม */}
        <p className="mt-6 italic text-blue-300 font-light">
          “Learning never exhausts the mind, it only ignites it.”
        </p>
      </div>
    </div>
  </section>
);

export default About;
