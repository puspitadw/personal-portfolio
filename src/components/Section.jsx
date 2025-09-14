// src/components/Section.jsx
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-pink-700 dark:text-pink-300">{title}</h2>
      {children}
    </section>
  );
}
