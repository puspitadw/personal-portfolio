// src/sections/Projects.jsx
import React from "react";

const projects = [
  {
    title: "📚 Story Scape",
    img: "/atk-shop.png", // Simpan di folder public
    desc: "Website rekomendasi novel menggunakan data dari New York Times Books API.",
    detail:
      "Story Scape menyajikan koleksi novel populer dari NYT API. Dibuat dengan HTML, CSS, dan JavaScript, dilengkapi fitur pencarian buku dan desain yang estetis untuk pecinta literasi.",
    tech: "HTML, CSS, JavaScript, NYT Books API",
    github: "https://github.com/PutriAyu1225/Putri_Ayu_Sahara",
    demo: "#", // Tambahkan link demo jika ada
  },
  {
    title: "💻 Personal Portfolio",
    img: "/portfolio.png",
    desc: "Situs portofolio pribadi yang kamu lihat sekarang.",
    detail:
      "Portofolio ini dibangun menggunakan React dan Tailwind CSS dengan desain bertema gelap, transisi halus, serta ikon dari lucide-react untuk memperkuat identitas digital saya.",
    tech: "React, Tailwind CSS, Lucide Icons",
    github: "https://github.com/PutriAyu1225",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 py-20 bg-gradient-to-b from-gray-800 to-black text-center"
    >
      <h2 className="text-3xl font-semibold mb-6 text-pink-400">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-pink-300 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-400">{proj.desc}</p>
              <details className="mt-2 text-sm text-gray-500">
                <summary className="cursor-pointer text-pink-400 hover:underline">
                  Lihat Detail
                </summary>
                <p className="mt-2">{proj.detail}</p>
                <p className="italic mt-1">Tech Stack: {proj.tech}</p>
              </details>
              <div className="mt-4 flex gap-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline"
                >
                  GitHub
                </a>
                {proj.demo !== "#" && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
