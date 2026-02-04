export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">
          © {currentYear} Kim Minlee. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with React, TypeScript, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </footer>
  );
};