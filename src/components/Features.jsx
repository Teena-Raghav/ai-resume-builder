function Features() {
  const features = [
    {
      title: "AI Resume Generator",
      description: "Generate professional resumes in minutes."
    },
    {
      title: "ATS Friendly",
      description: "Templates optimized for recruiters."
    },
    {
      title: "PDF Download",
      description: "Download resumes instantly as PDF."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Features
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;