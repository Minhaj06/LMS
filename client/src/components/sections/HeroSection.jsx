import React from "react";
import { Button } from "antd";

const HeroSection = () => {
  return (
    <section className="text-center my-24">
      <div className="container mx-auto px-3">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to EduBridge</h1>
        <p className="text-lg md:text-xl mb-6">
          Your gateway to a world of knowledge and learning.
        </p>
        <Button type="primary" size="large">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
