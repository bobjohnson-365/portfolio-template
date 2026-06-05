const Skills = () => {
  const frontEnd = [
    { name: "React", level: "Advanced", value: 90 },
    { name: "TypeScript", level: "Advanced", value: 85 },
    { name: "Next.js", level: "Advanced", value: 82 },
    { name: "Tailwind CSS", level: "Advanced", value: 88 },
    { name: "HTML", level: "Expert", value: 95 },
    { name: "CSS", level: "Expert", value: 92 },
  ];
  const backEnd = [
    { name: "Node.js", level: "Advanced", value: 88 },
    { name: "Express", level: "Advanced", value: 84 },
    { name: "NestJS", level: "Intermediate", value: 75 },
    { name: "TypeORM", level: "Intermediate", value: 72 },
    { name: "PostgreSQL", level: "Advanced", value: 80 },
    { name: "MongoDB", level: "Advanced", value: 78 },
  ];
  const cloud = [
    { name: "AWS (Lambda, S3, RDS)", level: "Intermediate", value: 76 },
    { name: "Vercel", level: "Advanced", value: 85 },
    { name: "Netlify", level: "Advanced", value: 82 },
    { name: "Docker", level: "Intermediate", value: 74 },
  ];
  const tools = [
    { name: "Git", level: "Expert", value: 93 },
    { name: "Jest", level: "Advanced", value: 80 },
    { name: "ESLint", level: "Advanced", value: 86 },
    { name: "Prettier", level: "Advanced", value: 88 },
    { name: "CI/CD", level: "Intermediate", value: 72 },
    { name: "Webpack", level: "Intermediate", value: 70 },
  ];

  const SkillCard = ({
    title,
    items,
  }: {
    title: string;
    items: { name: string; level: string; value: number }[];
  }) => (
    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/6 rounded-3xl">
      <h3 className="text-xl font-semibold mb-5 text-sky-300">{title}</h3>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex items-center justify-between gap-4 mb-2">
              <div>
                <p className="font-medium text-white">{item.name}</p>
                <p className="text-sm text-gray-400">{item.level}</p>
              </div>
              <span className="text-sm font-semibold text-sky-300">
                {item.value}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="min-h-full py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Full-stack developer — front-end, back-end, cloud & tooling. I build
            reliable, performant, and maintainable applications across the
            stack.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-2">
          <SkillCard title="Front-end" items={frontEnd} />
          <SkillCard title="Back-end & Databases" items={backEnd} />
          <SkillCard title="Cloud & DevOps" items={cloud} />
          <SkillCard title="Tools & Testing" items={tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
