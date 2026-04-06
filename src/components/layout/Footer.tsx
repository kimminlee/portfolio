export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-600 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-[13px]">
        <p>© {currentYear} Kim Minlee</p>
        <p>Built with React · Tailwind CSS · Framer Motion</p>
      </div>
    </footer>
  );
};
