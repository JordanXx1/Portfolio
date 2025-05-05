const Header = () => (
  <header className="relative bg-gradient-to-br from-blue-800 via-blue-800 to-blue-700 py-32 text-white overflow-hidden">
    {/* เอฟเฟกต์กลมจางๆ ด้านหลัง */}
    <div className="absolute inset-0 z-0">
      <div className="absolute w-72 h-72 bg-blue-200 opacity-20 rounded-full -top-10 -left-10 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-purple-400 opacity-20 rounded-full top-10 -right-20 blur-2xl"></div>
      <div className="absolute w-72 h-72 bg-blue-500 opacity-30 rounded-full -top-10 -left-10 blur-3xl animate-float"></div>
      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full top-40 -right-20 blur-2xl animate-float delay-300"></div>
    </div>

    {/* กล่องแบบ glass */}
    <div
      className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl max-w-5xl mx-auto p-10 text-center shadow-lg"
      data-aos="zoom-in"
    >
      <h1 className="text-2xl sm:text-3xl">
        สวัสดีครับ <br></br>ผม "ชื่อนายสุรเชษฐ์ ดิลกลาภ"
      </h1>
      <p className="text-base sm:text-lg md:text-xl mt-4">
        นักพัฒนาซอฟต์แวร์ที่สามารถทำทั้ง Frontend และ Backend ขยัน เรียนรู้เร็ว
        และพร้อมพัฒนาตัวเองเสมอ
      </p>
      <p className="mt-6 italic text-blue-200">
        “Never stop learning. Never stop building.”
      </p>
      <div className="mt-8">
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-white text-blue-800 font-semibold rounded-full shadow hover:bg-blue-100 transition"
        >
          ดูผลงานของฉัน →
        </a>
        
      </div>
    </div>
  </header>
);

export default Header;
