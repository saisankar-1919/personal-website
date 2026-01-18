import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Briefcase,
  User,
  ChevronDown,
  ExternalLink,
  Terminal,
  Cpu,
  Zap,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "React", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "TypeScript", level: 92 },
    { name: "Full Stack Development", level: 90 },
    { name: "Web Applications", level: 93 },
  ];

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "A real-time analytics platform built with React and Node.js, featuring intelligent data visualization and predictive insights.",
      tech: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      link: "#",
    },
    {
      title: "E-Commerce Microservices Platform",
      description:
        "Scalable microservices architecture handling 100K+ daily transactions with Next.js frontend and Node.js backend.",
      tech: ["Next.js", "Node.js", "Redis", "Docker"],
      link: "#",
    },
    {
      title: "Real-Time Collaboration Tool",
      description:
        "WebSocket-based collaborative workspace enabling teams to work together seamlessly with live updates.",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      link: "#",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-950/95 backdrop-blur-sm shadow-lg shadow-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm flex items-center justify-center">
              <Terminal className="w-5 h-5 text-gray-950" />
            </div>
            <span className="text-xl font-bold font-mono text-cyan-400">
              {"<Sai Sankar />"}
            </span>
          </div>
          <div className="flex gap-6 font-mono text-sm">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-cyan-400 transition-colors relative ${
                    activeSection === section ? "text-cyan-400" : ""
                  }`}
                >
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"></span>
                  )}
                  .{section}()
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-cyan-500/10 border-2 border-cyan-400 rounded text-sm text-cyan-400 font-mono">
                $ whoami: senior_dev
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-mono">
              <span className="text-cyan-400">{">"}</span> Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                Intelligent Web
              </span>
              <span className="block">Applications_</span>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              4+ years architecting scalable solutions with React, Node.js, and
              AI-driven technologies. Transforming complex problems into elegant
              code at an AI product development company.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-cyan-400 text-gray-950 rounded font-semibold font-mono hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
              >
                view_projects()
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded font-semibold font-mono hover:bg-cyan-400/10 transition-all"
              >
                get_in_touch()
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/saisankar-1919"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/saisankar-s-r-896a39150/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-3xl"></div>
            <div className="relative w-full aspect-square rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-cyan-400 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>
              <User className="w-48 h-48 text-cyan-400 relative z-10" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-gray-950/90 backdrop-blur-sm rounded border border-cyan-400/50 font-mono text-xs text-cyan-400">
                img_placeholder.jpg
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-gray-950/90 backdrop-blur-sm rounded border border-cyan-400/50 font-mono text-xs text-cyan-400">
                400x400px
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-400 rounded-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-400/20 rounded-lg"></div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-20 relative"
      >
        <div className="max-w-4xl w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-mono">
            <span className="text-cyan-400">{"<"}</span>
            About
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <div className="bg-gray-900 rounded-lg p-8 border-2 border-cyan-400/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 border-b-2 border-cyan-400/20 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-xs text-gray-400 font-mono">
                about_me.md
              </span>
            </div>
            <div className="mt-8 space-y-4 font-light text-gray-300">
              <p className="leading-relaxed">
                <span className="text-cyan-400 font-mono">const</span> developer
                = <span className="text-blue-400">{"{"}</span>
              </p>
              <p className="pl-8 leading-relaxed">
                As a Senior Full Stack Developer with over 4 years of
                experience, I specialize in building robust, scalable web
                applications that solve real-world problems. My expertise spans
                the entire development lifecycle, from architecting solutions to
                deploying production-ready applications.
              </p>
              <p className="pl-8 leading-relaxed">
                Currently, I'm working at an AI product development company
                where I blend traditional web technologies with cutting-edge AI
                capabilities to create innovative solutions. My focus is on
                delivering high-performance applications that provide
                exceptional user experiences while maintaining clean,
                maintainable code.
              </p>
              <p className="pl-8 leading-relaxed">
                I'm passionate about staying at the forefront of web
                development, constantly exploring new technologies and best
                practices. Whether it's optimizing performance, implementing
                complex features, or mentoring team members, I bring dedication
                and technical excellence to every project.
              </p>
              <p className="leading-relaxed">
                <span className="text-blue-400">{"}"}</span>;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-6 py-20 relative"
      >
        <div className="max-w-4xl w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">{"<"}</span>
            Skills
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center font-mono">
                  <span className="text-lg">{skill.name}</span>
                  <span className="text-cyan-400">[{skill.level}%]</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-sm overflow-hidden border border-gray-700">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 rounded-lg border-2 border-cyan-400/20 hover:border-cyan-400 transition-colors group">
              <Code2 className="w-12 h-12 mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 font-mono text-cyan-400">
                Frontend
              </h3>
              <p className="text-gray-400 text-sm">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border-2 border-cyan-400/20 hover:border-cyan-400 transition-colors group">
              <Cpu className="w-12 h-12 mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 font-mono text-blue-400">
                Backend
              </h3>
              <p className="text-gray-400 text-sm">
                Node.js, Express, RESTful APIs, GraphQL
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border-2 border-cyan-400/20 hover:border-cyan-400 transition-colors group">
              <Zap className="w-12 h-12 mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 font-mono text-cyan-400">
                DevOps
              </h3>
              <p className="text-gray-400 text-sm">Docker, CI/CD, AWS, Git</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 py-20 relative"
      >
        <div className="max-w-6xl w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono">
            <span className="text-cyan-400">{"<"}</span>
            Projects
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border-2 border-cyan-400/20 hover:border-cyan-400 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400/10 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-cyan-400 rounded-sm"></div>
                <h3 className="text-2xl font-bold mb-3 font-mono text-cyan-400 relative z-10">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm relative z-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded text-xs text-cyan-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-blue-400 transition-colors font-mono text-sm relative z-10"
                >
                  view_code() <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
          {/* <p className="text-center text-gray-500 mt-12 font-mono text-sm">
            // TODO: Replace with actual project data
          </p> */}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 py-20 relative"
      >
        <div className="max-w-4xl w-full text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-mono">
            <span className="text-cyan-400">{"<"}</span>
            Contact
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Whether you're looking for a skilled developer for your next project
            or want to discuss opportunities, I'm always open to connecting with
            fellow professionals and potential collaborators.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-4 bg-cyan-400 text-gray-950 rounded font-semibold font-mono hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              send_email()
            </a>
            <a
              href="https://www.linkedin.com/in/saisankar-s-r-896a39150/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded font-semibold font-mono hover:bg-cyan-400/10 transition-all flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              connect()
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://github.com/saisankar-1919"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/saisankar-s-r-896a39150/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-cyan-400/20 py-8 text-center text-gray-400 relative z-10">
        <p className="font-mono text-sm">
          <span className="text-cyan-400">{"</>"}</span> Built with React &
          TypeScript © 2026 Sai Sankar
        </p>
      </footer>
    </div>
  );
}
