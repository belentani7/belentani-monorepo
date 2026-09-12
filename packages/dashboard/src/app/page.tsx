import Link from 'next/link';

const platforms = [
  {
    name: 'UX Academy',
    desc: 'Formación profesional en UX/Product Design: práctica, evaluación y capstone.',
    href: 'https://github.com/belentani7/ux-academy-professional-program',
    tag: '04',
  },
  {
    name: 'Manos Abiertas',
    desc: 'Educación gratuita: cursos IA/Office, CV y guías de derechos para migrantes.',
    href: 'https://github.com/belentani7/ManosAbiertas',
    tag: '03',
  },
  {
    name: 'Judas Experience',
    desc: 'Experiencia musical interactiva del universo Belentani.',
    href: 'https://github.com/belentani7/belentani-the-judas-experience',
    tag: '02',
  },
  {
    name: 'AI Lab',
    desc: 'Sistemas multi-agente e investigación IA del laboratorio NOIACORE.',
    href: 'https://github.com/belentani7/noiacore-lab',
    tag: '01',
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-gray-200">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <span className="font-mono text-xs tracking-[6px] text-[#ff073a] uppercase">
          Unified Creative OS
        </span>
        <h1 className="title-glow neon-text text-5xl md:text-7xl font-bold leading-none mt-6">
          BELENTANI
          <br />
          ECOSYSTEM
        </h1>
        <p className="max-w-2xl mt-8 text-gray-400 text-lg">
          Dashboard central del ecosistema Belentani: UX Academy, Manos Abiertas,
          Judas Experience y AI Lab — orquestados desde un único sistema.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {platforms.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="neo-glass p-8 block group"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm tracking-[4px] text-[#ff073a]">
                  {p.tag}
                </span>
                <span className="text-[#ff073a] opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
              <h2 className="font-bold text-2xl mt-6 group-hover:text-[#ff073a] transition-colors">
                {p.name}
              </h2>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">{p.desc}</p>
            </Link>
          ))}
        </div>
        <footer className="mt-20 font-mono text-xs text-gray-600 tracking-[3px] uppercase">
          belentani7 · noiacore · 2026
        </footer>
      </section>
    </main>
  );
}