import React from "react";

const FeatureSection = () => {
  return (
    <section className="my-24">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Interactive Courses</h2>
            <p className="text-lg">
              Engage with interactive courses designed to enhance your skills and knowledge.
            </p>
          </div>
          <div className="p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Expert Instructors</h2>
            <p className="text-lg">
              Learn from industry experts with years of experience in their respective fields.
            </p>
          </div>
          <div className="p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Community Support</h2>
            <p className="text-lg">
              Join a community of learners and get support from peers and mentors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
