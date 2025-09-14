/* App.jsx */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Code2, Sun, Moon, Phone, MapPin, Instagram, Languages } from "lucide-react";
import foto from "./assets/foto.jpg"; // ganti path jika perlu
import wf from "./assets/wf.jpg";
import rf from "./assets/rf.jpg";
import tv from "./assets/tv.png";
import "./index.css"; // pastikan Tailwind sudah dikonfigurasi

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [themeLight, setThemeLight] = useState(false);
  const [contactRevealed, setContactRevealed] = useState(false);
  const [language, setLanguage] = useState('id'); // 'id' untuk Indonesia, 'en' untuk Inggris


  // Terjemahan untuk semua teks
  const translations = {
    id: {
      nav: {
        home: "Beranda",
        about: "Tentang",
        projects: "Proyek",
        contact: "Kontak"
      },
      hero: {
        title: "Puspita Dewi",
        subtitle: "Fullstack Developer — React • Java • Spring Boot",
        viewWork: "Lihat Karya Saya",
        contactMe: "Hubungi Saya"
      },
      about: {
        title: "Tentang Saya",
        description: "Saya seorang Fullstack Developer yang menyukai kode yang rapi, performa optimal, dan UX yang baik. Fokus saya pada React di frontend, Java + Spring Boot di backend, serta MySQL sebagai database. Saya senang membuat solusi yang maintainable, teruji, dan berdampak.",
        location: "📍 Lokasi:",
        education: "🎓 Pendidikan:",
        availability: "💼 Ketersediaan:",
        email: "📫 Email:",
        locationValue: "Bandung, Indonesia",
        educationValue: "Manajemen Informatika",
        availabilityValue: "Freelance • Full-time",
        emailValue: "puspita12dw@gmail.com"
      },
      skills: {
        title: "Teknologi",
        frontend: "Frontend",
        backend: "Backend",
        database: "Database"
      },
      projects: {
        title: "Proyek Saya",
        atkShop: "Weather Flow",
        atkDesc: "Aplikasi web yang menampilkan cuaca berdasarkan berbagai lokasi di Indonesia, menggunakan HTML, CSS, JavaScript, dan API cuaca.",
        apiService: "Resep Verse",
        apiDesc: "Aplikasi web untuk manajemen resep berbasis Java Spring Boot dengan database MySQL.",
        taskManager: "Teume Vault",
        taskDesc: "Aplikasi web untuk manajemen katalog produk merchandise Treasure menggunakan React.js.",
        tech: "Teknologi:",
        viewCode: "Lihat Proyek",
        liveDemo: "Demo Langsung"
      },
      contact: {
        title: "Mari Terhubung",
        subtitle: "Saya terbuka untuk kolaborasi atau peluang full-time. Hubungi saya!",
        email: "Email",
        phone: "Telepon",
        contactMe: "Hubungi Saya"
      },
      footer: "© {year} Puspita Dewi"
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        title: "Puspita Dewi",
        subtitle: "Fullstack Developer — React • Java • Spring Boot",
        viewWork: "View My Work",
        contactMe: "Contact Me"
      },
      about: {
        title: "About Me",
        description: "I am a Fullstack Developer who values clean code, optimal performance, and great user experience (UX). My focus is on React for the frontend, Java + Spring Boot for the backend, and MySQL as the database. I enjoy building solutions that are maintainable, well-tested, and impactful.",
        location: "📍 Location:",
        education: "🎓 Education:",
        availability: "💼 Availability:",
        email: "📫 Email:",
        locationValue: "Bandung, Indonesia",
        educationValue: "Informatics Management",
        availabilityValue: "Freelance • Full-time",
        emailValue: "puspita12dw@gmail.com"
      },
      skills: {
        title: "Technologies",
        frontend: "Frontend",
        backend: "Backend",
        database: "Database"
      },
      projects: {
        title: "My Projects",
        atkShop: "Weather Flow",
        atkDesc: "A web application that displays weather information for various locations in Indonesia, built using HTML, CSS, JavaScript, and a weather API.",
        apiService: "Resep Verse",
        apiDesc: "A web application for recipe management based on Java Spring Boot with a MySQL database.",
        taskManager: "Teume Vault",
        taskDesc: "A web application for managing the product catalog of Treasure merchandise using React.js.",
        tech: "Tech:",
        viewCode: "View Project",
        liveDemo: "Live Demo"
      },
      contact: {
        title: "Let's Connect",
        subtitle: "I'm open to collaboration, or full-time opportunities. Get in touch!",
        email: "Email",
        phone: "Phone",
        contactMe: "Contact Me"
      },
      footer: "© {year} Puspita Dewi"
    }
  };

  const t = translations[language];

  useEffect(() => {
    // optional: simpan preferensi tema di localStorage
    const savedTheme = localStorage.getItem("puspita_theme");
    if (savedTheme) setThemeLight(savedTheme === "light");

    // optional: simpan preferensi bahasa di localStorage
    const savedLang = localStorage.getItem("puspita_language");
    if (savedLang) setLanguage(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("puspita_theme", themeLight ? "light" : "dark");
    localStorage.setItem("puspita_language", language);
  }, [themeLight, language]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className={`${themeLight ? "light-theme" : ""} font-sans`}>
      <div
        className={`min-h-screen ${themeLight
          ? "bg-gradient-to-br from-purple-50 via-purple-100 to-white text-slate-800"
          : "bg-gradient-to-br from-[#0b0410] via-[#1a0b2a] to-[#291334] text-gray-100"
          } transition-colors duration-500`}
      >
        {/* NAVBAR */}
        <nav
          className={`sticky top-0 z-50 backdrop-blur-md ${themeLight ? "bg-white/60" : "bg-black/40"
            } border-b ${themeLight ? "border-purple-200/40" : "border-purple-800/40"} py-3`}
        >
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1
                className="text-xl md:text-2xl font-extrabold tracking-widest"
                style={{
                  color: themeLight ? "#6b21a8" : "#c4a6ff",
                  textShadow: themeLight ? "none" : "0 0 12px rgba(196,166,255,0.12)",
                }}
              >
                Puspita Dewi
              </h1>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
              {["home", "about", "projects", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`capitalize hover:scale-105 transform transition ${themeLight ? "text-slate-700 hover:text-purple-600" : "text-gray-200 hover:text-purple-300"
                      }`}
                  >
                    {t.nav[id]}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                  className="p-1 rounded-full hover:opacity-90 transition flex items-center gap-1"
                  aria-label="Toggle language"
                  title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
                >
                  <Languages size={18} />
                  <span className="text-xs">{language === 'id' ? 'EN' : 'ID'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setThemeLight((s) => !s)}
                  className="p-1 rounded-full hover:opacity-90 transition"
                  aria-label="Toggle theme"
                >
                  {themeLight ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </li>
            </ul>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="p-1 rounded-full hover:opacity-90 transition flex items-center gap-1 text-purple-300"
                title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
              >
                <Languages size={16} />
                <span className="text-xs">{language === 'id' ? 'EN' : 'ID'}</span>
              </button>
              <button
                onClick={() => setThemeLight((s) => !s)}
                className="p-1 rounded-full hover:opacity-90 transition text-purple-300"
              >
                {themeLight ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setNavOpen((s) => !s)}
                aria-label="Open menu"
                className={`p-2 rounded-lg ${themeLight ? "bg-purple-50/80" : "bg-black/30"} `}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-purple-300">
                  <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
                  <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
                  <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Diubah menjadi fixed untuk menghindari scroll berlebihan */}
          {navOpen && (
            <div className="md:hidden fixed top-full left-0 right-0 bg-black/95 backdrop-blur-lg z-50 px-6 pb-4 pt-2 border-t border-purple-800/40">
              <ul className="flex flex-col gap-2 text-base">
                {["home", "about", "projects", "contact"].map((id) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="w-full text-left py-3 rounded-md hover:bg-purple-800/20 transition border-b border-purple-900/30"
                    >
                      {t.nav[id]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* HERO */}
        <header id="home" className="min-h-[75vh] flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="flex-1"
            >
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className={`text-3xl md:text-5xl font-extrabold leading-tight ${themeLight ? "text-[#4c1d95]" : "text-white"}`}
              >
                {t.hero.title}
                <span className="block text-xl md:text-2xl mt-2 font-medium" style={{ color: themeLight ? "#6b21a8" : "#cdb8ff" }}>
                  {t.hero.subtitle}
                </span>
              </motion.h2>

              <motion.div className="mt-8 flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="#projects"
                  className="px-5 py-2 rounded-full font-semibold shadow-lg"
                  style={{
                    background: themeLight ? "linear-gradient(90deg,#7c3aed,#a78bfa)" : "linear-gradient(90deg,#6b21a8,#a78bfa)",
                    color: themeLight ? "#fff" : "#fff",
                    boxShadow: themeLight ? "0 6px 20px rgba(124,58,237,0.18)" : "0 8px 28px rgba(103,78,162,0.18)",
                  }}
                >
                  {t.hero.viewWork}
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="#contact"
                  className={`px-5 py-2 rounded-full font-semibold border-2`}
                  style={{
                    borderColor: themeLight ? "#d6bcfa" : "rgba(167,139,250,0.45)",
                    color: themeLight ? "#4c1d95" : "#dcd6ff",
                    background: themeLight ? "white" : "transparent",
                  }}
                >
                  {t.hero.contactMe}
                </motion.a>
              </motion.div>
            </motion.div>
            {/* Right - Avatar Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="w-full md:w-80"
            >
              <div
                className={`relative rounded-2xl p-4 ${themeLight ? "bg-gradient-to-b from-white to-purple-50/60" : "bg-[rgba(255,255,255,0.02)]"
                  } shadow-xl`}
                style={{
                  border: themeLight ? "1px solid rgba(124,58,237,0.08)" : "1px solid rgba(167,139,250,0.08)",
                  boxShadow: themeLight ? "0 10px 30px rgba(124,58,237,0.06)" : "0 12px 40px rgba(16,8,32,0.6)",
                }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div
                    className={`rounded-full p-1 ${themeLight ? "bg-gradient-to-br from-purple-200 to-purple-400" : "bg-gradient-to-br from-purple-700 to-purple-900"
                      }`}
                    style={{ boxShadow: themeLight ? "0 6px 18px rgba(167,139,250,0.18)" : "0 8px 30px rgba(103,78,162,0.18)" }}
                  >
                    <img
                      src={foto}
                      alt="Puspita Dewi"
                      className="w-70 h-70 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: themeLight ? "#6b21a8" : "#bfb6e8" }}>
                      Programmer • Software Engineer
                    </p>
                  </div>

                  <div className="flex gap-3 mt-2">
                    <a
                      href="/CV_PuspitaDewi.pdf"
                      download
                      className="px-4 py-2 rounded-full text-sm font-semibold"
                      style={{
                        background: themeLight ? "linear-gradient(90deg,#a78bfa,#7c3aed)" : "linear-gradient(90deg,#7c3aed,#a78bfa)",
                        color: "#fff",
                      }}
                    >
                      Download CV
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </header>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="px-6 py-16"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            {/* Kiri: teks + list */}
            <div>
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: themeLight ? "#4c1d95" : "#cdb8ff" }}
              >
                {t.about.title}
              </h3>
              <p
                className="text-gray-300 leading-relaxed"
                style={{ color: themeLight ? "#374151" : "#d7d0f6" }}
              >
                {t.about.description}
              </p>

              {/* List di bawah teks */}
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="text-sm">
                  <strong>{t.about.location}</strong> {t.about.locationValue}
                </li>
                <li className="text-sm">
                  <strong>{t.about.education}</strong> {t.about.educationValue}
                </li>
                <li className="text-sm">
                  <strong>{t.about.availability}</strong> {t.about.availabilityValue}
                </li>
                <li className="text-sm">
                  <strong>{t.about.email}</strong> {t.about.emailValue}
                </li>
              </ul>
            </div>

            {/* Kanan: Tech Stack dengan judul di luar card */}
            <div>
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: themeLight ? "#4c1d95" : "#cdb8ff" }}
              >
                {t.skills.title || "Teknologi"}
              </h3>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-xl border"
                style={{
                  background: themeLight ? "#fff" : "transparent",
                  borderColor: themeLight ? "rgba(124,58,237,0.06)" : "rgba(167,139,250,0.06)",
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {["React.js", "HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL", "VSCode", "C"].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full grid place-items-center"
                        style={{
                          background: themeLight ? "#ede9fe" : "rgba(255,255,255,0.03)",
                        }}
                      >
                        <Code2 size={16} />
                      </div>
                      <span className={themeLight ? "text-purple-700" : "text-gray-200"}>{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="px-6 py-16"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8" style={{ color: themeLight ? "#4c1d95" : "#cdb8ff" }}>
              {t.projects.title}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: t.projects.atkShop,
                  desc: t.projects.atkDesc,
                  tech: "HTML, CSS, JavaScript, Weather API",
                  repo: "https://weatherflow-chi.vercel.app/",
                  image: wf
                },
                {
                  title: t.projects.apiService,
                  desc: t.projects.apiDesc,
                  tech: "Java, Spring Boot, MySQL",
                  repo: "https://github.com/puspitadw/resep_verse",
                  image: rf
                },
                {
                  title: t.projects.taskManager,
                  desc: t.projects.taskDesc,
                  tech: "React.js, CSS, JavaScript",
                  repo: "https://uas-puspita-dewi.vercel.app/",
                  image: tv
                },
              ].map((p, i) => (
                <motion.article
                  key={i}
                  whileHover={{ translateY: -6 }}
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: themeLight ? "linear-gradient(180deg,#fff,#faf5ff)" : "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                    border: themeLight ? "1px solid rgba(124,58,237,0.06)" : "1px solid rgba(167,139,250,0.05)",
                    boxShadow: themeLight ? "0 4px 12px rgba(124,58,237,0.08)" : "0 4px 20px rgba(0,0,0,0.2)"
                  }}
                >
                  {/* Project Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-fit"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className={themeLight ? "text-purple-800 font-semibold text-xl mb-2" : "text-purple-200 font-semibold text-xl mb-2"}>
                      {p.title}
                    </h4>
                    <p className="text-sm mb-4" style={{ color: themeLight ? "#374151" : "#d6cfee" }}>
                      {p.desc}
                    </p>
                    <p className="text-xs mb-4" style={{ color: themeLight ? "#6b21a8" : "#bfb6e8" }}>
                      <strong>{t.projects.tech}</strong> {p.tech}
                    </p>
                    <div className="mt-4">
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full"
                        style={{
                          background: themeLight ? "linear-gradient(90deg,#a78bfa,#7c3aed)" : "linear-gradient(90deg,#7c3aed,#a78bfa)",
                          color: "#fff",
                        }}
                      >
                        {t.projects.viewCode}
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="px-6 py-16"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-center" style={{ color: themeLight ? "#4c1d95" : "#cdb8ff" }}>
              {t.contact.title}
            </h3>
            <p className="text-center mb-8 max-w-2xl mx-auto" style={{ color: themeLight ? "#374151" : "#d7d0f6" }}>
              {t.contact.subtitle}
            </p>

            <div className="max-w-md mx-auto">
              {contactRevealed ? (
                <motion.div
                  className="grid gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={`p-4 rounded-xl flex items-center gap-4 ${themeLight ? "bg-purple-50" : "bg-purple-900/20"}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-3 rounded-full ${themeLight ? "bg-purple-100" : "bg-purple-800/30"}`}>
                      <Mail size={24} className={themeLight ? "text-purple-600" : "text-purple-300"} />
                    </div>
                    <div>
                      <div className="font-medium" style={{ color: themeLight ? "#4c1d95" : "#cdb8ff" }}>{t.contact.email}</div>
                      <div className={themeLight ? "text-purple-700" : "text-purple-200"}>puspita12dw@gmail.com</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className={`p-4 rounded-xl flex items-center gap-4 ${themeLight ? "bg-purple-50" : "bg-purple-900/20"}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-3 rounded-full ${themeLight ? "bg-purple-100" : "bg-purple-800/30"}`}>
                      <Phone size={24} className={themeLight ? "text-purple-600" : "text-purple-300"} />
                    </div>
                    <div>
                      <div className="font-medium" style={{ color: themeLight ? "#4c1d95" : "#cdb8ff" }}>{t.contact.phone}</div>
                      <div className={themeLight ? "text-purple-700" : "text-purple-200"}>+62 838-6553-1980</div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  className="grid gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`p-4 rounded-xl flex items-center gap-4 ${themeLight ? "bg-purple-50" : "bg-purple-900/20"} opacity-80`}>
                    <div className={`p-3 rounded-full ${themeLight ? "bg-purple-100" : "bg-purple-800/30"}`}>
                      <Mail size={24} className={themeLight ? "text-purple-600" : "text-purple-300"} />
                    </div>
                    <div>
                      <div className="font-medium" style={{ color: themeLight ? "#4c1d95" : "#cdb8ff" }}>{t.contact.email}</div>
                      <div className={themeLight ? "text-purple-700" : "text-purple-200"}>•••••••••••@•••••••.com</div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl flex items-center gap-4 ${themeLight ? "bg-purple-50" : "bg-purple-900/20"} opacity-80`}>
                    <div className={`p-3 rounded-full ${themeLight ? "bg-purple-100" : "bg-purple-800/30"}`}>
                      <Phone size={24} className={themeLight ? "text-purple-600" : "text-purple-300"} />
                    </div>
                    <div>
                      <div className="font-medium" style={{ color: themeLight ? "#4c1d95" : "#cdb8ff" }}>{t.contact.phone}</div>
                      <div className={themeLight ? "text-purple-700" : "text-purple-200"}>+62 ••• •••• ••••</div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                {!contactRevealed && (
                  <motion.button
                    onClick={() => setContactRevealed(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 rounded-full font-semibold shadow-lg"
                    style={{
                      background: themeLight ? "linear-gradient(90deg,#7c3aed,#a78bfa)" : "linear-gradient(90deg,#6b21a8,#a78bfa)",
                      color: "#fff",
                    }}
                  >
                    {t.contact.contactMe}
                  </motion.button>
                )}

                <div className="flex gap-4">
                  <motion.a
                    href="https://www.instagram.com/pspita_dw/"
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-full ${themeLight ? "bg-purple-100 text-purple-700" : "bg-purple-900/30 text-purple-300"}`}
                    whileHover={{ y: -3 }}
                    title="Instagram"
                  >
                    <Instagram size={20} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/puspitadw"
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-full ${themeLight ? "bg-purple-100 text-purple-700" : "bg-purple-900/30 text-purple-300"}`}
                    whileHover={{ y: -3 }}
                    title="GitHub"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/puspita-dewi-b5367a381/"
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-full ${themeLight ? "bg-purple-100 text-purple-700" : "bg-purple-900/30 text-purple-300"}`}
                    whileHover={{ y: -3 }}
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="py-6">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
            <div className="mb-3" style={{ borderTop: themeLight ? "1px solid rgba(124,58,237,0.06)" : "1px solid rgba(167,139,250,0.06)" }} />
            {t.footer.replace('{year}', new Date().getFullYear())}
          </div>
        </footer>
      </div>
    </div>
  );
}