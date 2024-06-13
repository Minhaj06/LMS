import React from "react";
import { Button } from "antd";

const CallToActionSection = () => {
  return (
    <section className="text-center my-24">
      <div className="container mx-auto px-3">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-lg mb-6">
          Join EduBridge today and take the first step towards a brighter future.
        </p>
        <Button type="primary" size="large">
          Sign Up Now
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
