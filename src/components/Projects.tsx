import ChatImg from "../assets/chat.png";
import EcommerceImg from "../assets/ecommerce.png";
import PMImg from "../assets/pm.png";
import SaaSImg from "../assets/saas.png";
import { content } from "../lib/content";

const Projects = () => {
  const projects = [
    {
      title: "Realtime Chat App",
      desc: "WebSocket-powered chat with presence, typing indicators, and message history.",
      tech: ["React", "TypeScript", "Node.js", "Socket.IO", "Redis"],
      image: ChatImg,
      alt: "Realtime Chat App screenshot",
    },
    {
      title: "E‑commerce Platform",
      desc: "Product catalog, shopping cart, checkout with Stripe, admin dashboard.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "Vercel"],
      image: EcommerceImg,
      alt: "E-commerce Platform screenshot",
    },
    {
      title: "Project Management Tool",
      desc: "Task boards, real-time collaboration, notifications and role-based access.",
      tech: ["React", "NestJS", "Postgres", "Docker", "CI/CD"],
      image: PMImg,
      alt: "Project Management Tool screenshot",
    },
    {
      title: "SaaS Analytics Dashboard",
      desc: "Data visualizations, usage tracking, and actionable insights for product teams.",
      tech: ["React", "Node.js", "Chart.js", "PostgreSQL", "Docker"],
      image: SaaSImg,
      alt: "SaaS Analytics Dashboard screenshot",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Examples of full-stack work showcasing front-end UX, backend APIs,
            real-time features, and cloud deployments.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="p-6 bg-white/5 border border-white/6 rounded-lg hover:shadow-lg transition"
            >
              <div className="mb-4 rounded-md overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-40 object-cover object-center"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.desc}</p>
              <div className="flex flex-wrap">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/6 text-gray-100 mr-2 mb-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
