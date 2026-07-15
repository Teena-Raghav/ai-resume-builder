function Testimonials() {

  const reviews = [
    {
      name: "Rahul Sharma",
      text: "This AI Resume Builder helped me land my internship."
    },
    {
      name: "Priya Singh",
      text: "Beautiful templates and very easy to use."
    },
    {
      name: "Aman Verma",
      text: "The AI suggestions improved my resume a lot."
    }
  ];

  return (
    <section className="bg-gray-100 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        What Users Say
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg"
          >

            <p className="text-gray-600">
              "{review.text}"
            </p>

            <h3 className="mt-6 font-bold text-xl">
              {review.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;