// src/components/Testimonials.js

const testimonials = [
    {
      name: "Jane Doe",
      role: "UX Designer",
      text: "Sir Valo is a talented developer who delivers high-quality work every time!",
      avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "John Smith",
      role: "Project Manager",
      text: "Professional, fast, and reliable. Working with Sir Valo was a pleasure.",
      avatar: "https://i.pravatar.cc/100?img=2"
    },
    {
      name: "Emily Johnson",
      role: "Frontend Developer",
      text: "His attention to detail and passion for code truly stand out.",
      avatar: "https://i.pravatar.cc/100?img=3"
    }
  ];
  
  const Testimonials = () => {
    return (
      <section
        id="testimonials"
        className="p-10 bg-gray-50 dark:bg-gray-800 text-center dark:text-white"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200">“{t.text}”</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  