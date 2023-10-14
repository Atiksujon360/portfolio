import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-8 md:p-8 lg:p-12 xl:p-16">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">MD. ATIKUR RAHMAN</h1>
          <nav>
            <a href="#about" className="mx-2 hover:underline">
              About
            </a>
            <a href="#experience" className="mx-2 hover:underline">
              Experience
            </a>
            <a href="#education" className="mx-2 hover:underline">
              Education
            </a>
            <a href="#skills" className="mx-2 hover:underline">
              Skills
            </a>
          </nav>
        </div>
      </header>

      <section id="about" className="py-8 md:py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Software Developer at OCBC Bank (Malaysia) Berhad. I'm passionate
            about building responsive and interactive web applications.
            <br />
            Mobile: +60166861627 | Email: atiksujon7@gmail.com | Website:{" "}
            <a
              href="https://devsinsider.com/"
              className="text-blue-500 hover:underline"
            >
              devsinsider.com
            </a>
          </p>
        </div>
      </section>

      <section id="experience" className="bg-gray-200 py-8 md:py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          {/* Add experience details here */}
        </div>
      </section>

      <section id="education" className="py-8 md:py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          {/* Add education details here */}
        </div>
      </section>

      <section id="skills" className="bg-gray-200 py-8 md:py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          {/* Add skills details here */}
        </div>
      </section>
    </div>
  );
}

export default App;
