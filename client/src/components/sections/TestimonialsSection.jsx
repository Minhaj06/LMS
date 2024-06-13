import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="text-center my-24">
      <div className="container mx-auto px-3">
        <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 shadow-md rounded-md">
            <p className="text-lg mb-4">
              "EduBridge has transformed my career. The courses are comprehensive and the
              instructors are fantastic."
            </p>
            <p className="font-bold">- John Doe</p>
          </div>
          <div className="p-6 shadow-md rounded-md">
            <p className="text-lg mb-4">
              "The community support is amazing. I've made so many connections and learned so
              much from my peers."
            </p>
            <p className="font-bold">- Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
