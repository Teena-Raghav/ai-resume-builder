function Stats() {
  const stats = [
    { number: "50K+", title: "Users" },
    { number: "120K+", title: "Resumes Created" },
    { number: "25+", title: "Templates" },
    { number: "98%", title: "Success Rate" },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Achievements
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="text-center bg-gray-50 rounded-xl p-8 shadow hover:shadow-xl transition"
          >
            <h3 className="text-4xl font-bold text-blue-600">
              {item.number}
            </h3>

            <p className="mt-3 text-gray-600">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;