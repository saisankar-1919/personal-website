import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  ChevronDown,
  ExternalLink,
  Terminal,
  Cpu,
  Zap,
  Menu,
  X,
} from "lucide-react";
import personalPhoto from "../assets/personal_photo.png";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      name: "JavaScript (ES6+)",
      level: 95,
      evidence:
        "Handled async flows, closures, and complex UI logic in production features",
    },
    {
      name: "TypeScript",
      level: 89,
      evidence:
        "Migrated JS codebases to strict TS, reduced runtime bugs significantly",
    },

    {
      name: "React.js",
      level: 93,
      evidence: "Built and shipped large-scale SPAs used daily by real users",
    },
    {
      name: "Next.js",
      level: 90,
      evidence: "Implemented SSR/SSG pages improving load time and SEO metrics",
    },

    {
      name: "Node.js",
      level: 85,
      evidence:
        "Developed backend services handling auth, data flow, and integrations",
    },
    {
      name: "Express.js",
      level: 87,
      evidence:
        "Developed backend services handling auth, data flow, and integrations",
    },
    {
      name: "Python",
      level: 55,
      evidence:
        "Developed backend services handling auth, data flow, and integrations",
    },
    {
      name: "REST API Design",
      level: 89,
      evidence:
        "Designed versioned APIs with validation, pagination, and clear error models",
    },
    {
      name: "State Management (Redux / Context)",
      level: 92,
      evidence:
        "Refactored messy state into predictable flows, reducing UI bugs",
    },
    {
      name: "Performance Optimization",
      level: 93,
      evidence:
        "Improved page responsiveness by fixing re-renders and heavy components",
    },
    {
      name: "Component Architecture & Reusability",
      level: 90,
      evidence:
        "Created reusable component systems adopted across multiple features",
    },
    {
      name: "Clean Code & Best Practices",
      level: 92,
      evidence:
        "Enforced readable patterns, reviews, and refactors in team codebases",
    },
    {
      name: "Git & Version Control",
      level: 90,
      evidence: "Managed feature branches, PR reviews, and production hotfixes",
    },
    {
      name: "Debugging & Problem Solving",
      level: 94,
      evidence:
        "Resolved production issues by tracing logs, state, and edge cases",
    },
  ];

  const projects = [
    {
      title: "Trendrocket.io",
      description:
        "An e-commerce intelligence and trend research platform that helps entrepreneurs, online sellers, and brands find trending products, fast-growing stores, and competitor insights to fuel their business growth",
      tech: ["React", "GraphQL", "TypeScript", "Material UI"],
      link: "https://trendrocket.io",
      dna: [
        { label: "Frontend", value: 80 },
        { label: "Data Handling", value: 75 },
        { label: "Performance", value: 70 },
        { label: "Architecture", value: 65 },
      ],
      impact: [
        "Enabled faster product discovery for sellers",
        "Improved data visibility for market research",
      ],
    },
    {
      title: "Career Super Hero",
      description:
        "A structured career guidance experience that blends assessments, activities, and mentoring to help students understand their interests and potential with a gamified interface.",
      tech: ["Next.js", "Node.js", "GraphQL", "PostgreSQL"],
      link: "https://www.lifology.com/products/career-superhero/",
      dna: [
        { label: "UX Design", value: 85 },
        { label: "Frontend", value: 75 },
        { label: "Backend", value: 80 },
        { label: "Gamification", value: 80 },
      ],
      impact: [
        "Created an engaging, gamified learning experience",
        "Improved student engagement and completion rates",
      ],
    },
    {
      title: "Real-Time Collaboration Tool",
      description:
        "WebSocket-based collaborative workspace enabling teams to work together seamlessly with live updates.",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      link: "",
      dna: [
        { label: "Real-Time Systems", value: 85 },
        { label: "Backend", value: 75 },
        { label: "Scalability", value: 70 },
        { label: "State Sync", value: 80 },
      ],
      impact: [
        "Achieved low-latency real-time updates",
        "Improved team collaboration efficiency",
      ],
    },
  ];

  const capabilities = [
    {
      title: "Frontend",
      level: 95,
      icon: Code2,
      color: "cyan",
      stack: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      title: "Backend",
      level: 85,
      icon: Cpu,
      color: "blue",
      stack: "Node.js, Express, REST APIs, GraphQL",
    },
    {
      title: "DevOps",
      level: 65,
      icon: Zap,
      color: "cyan",
      stack: "Docker, CI/CD, AWS, Git",
    },
  ];

  const TOTAL_BARS = 5;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative">
          <div className="flex items-center gap-2">
            <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm flex items-center justify-center flex-shrink-0">
              <Terminal className="w-4 sm:w-5 h-4 sm:h-5 text-gray-950" />
            </div>
            <span className="text-sm sm:text-xl font-bold font-mono text-cyan-400 truncate">
              {"<Sai />"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 lg:gap-6 font-mono text-xs lg:text-sm">
            {[
              "home",
              "about",
              "skills",
              "highlighted builds",
              "get in touch",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-cyan-400 transition-colors relative whitespace-nowrap ${
                  activeSection === section ? "text-cyan-400" : ""
                }`}
              >
                {activeSection === section && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"></span>
                )}
                .{section}()
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:text-cyan-400 transition-colors flex-shrink-0"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-sm border-t border-cyan-400/20">
            <div className="px-4 py-4 space-y-3 max-w-6xl mx-auto">
              {[
                "home",
                "about",
                "skills",
                "highlighted builds",
                "get in touch",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 rounded font-mono text-sm capitalize transition-colors ${
                    activeSection === section
                      ? "bg-cyan-400/20 text-cyan-400"
                      : "text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400"
                  }`}
                >
                  .{section}()
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 md:pt-24 pb-10 relative"
      >
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block">
              <span className="px-3 sm:px-4 py-2 bg-cyan-500/10 border-2 border-cyan-400 rounded text-xs sm:text-sm text-cyan-400 font-mono">
                $ whoami: senior_dev
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight font-mono">
              <span className="text-cyan-400">{">"}</span> Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                Intelligent Web
              </span>
              <span className="block">Applications_</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed">
              4+ years architecting scalable solutions with React, Node.js, and
              AI-driven technologies. Transforming complex problems into elegant
              code at an AI product development company.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => scrollToSection("highlighted builds")}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-cyan-400 text-gray-950 rounded font-semibold font-mono text-sm sm:text-base hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 transition-all active:scale-95"
              >
                view_projects()
              </button>
              <button
                onClick={() => scrollToSection("get in touch")}
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-cyan-400 text-cyan-400 rounded font-semibold font-mono text-sm sm:text-base hover:bg-cyan-400/10 transition-all active:scale-95"
              >
                get_in_touch()
              </button>
            </div>
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/saisankar-1919"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors active:scale-95"
              >
                <Github className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/saisankar-s-r-896a39150/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors active:scale-95"
              >
                <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
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
              <img
                src={personalPhoto}
                alt="Sai Sankar"
                className="w-full h-full object-cover"
              />
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
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 relative"
      >
        <div className="max-w-6xl w-full relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 font-mono">
            <span className="text-cyan-400">{"<"}</span>
            About
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <div className="bg-gray-900 rounded-lg p-4 sm:p-6 md:p-8 border-2 border-cyan-400/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 bg-gray-800 border-b-2 border-cyan-400/20 flex items-center px-3 sm:px-4 gap-2">
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 sm:ml-4 text-xs text-gray-400 font-mono truncate">
                about_me.md
              </span>
            </div>
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 font-light text-gray-300 text-sm sm:text-base">
              <p className="leading-relaxed">
                <span className="text-cyan-400 font-mono">const</span> developer
                = <span className="text-blue-400">{"{"}</span>
              </p>
              <p className="pl-4 sm:pl-8 leading-relaxed">
                As a Senior Full Stack Developer with over 4 years of
                experience, I specialize in building robust, scalable web
                applications that solve real-world problems. My expertise spans
                the entire development lifecycle, from architecting solutions to
                deploying production-ready applications.
              </p>
              <p className="pl-4 sm:pl-8 leading-relaxed">
                Currently, I'm working at an AI product development company
                where I blend traditional web technologies with cutting-edge AI
                capabilities to create innovative solutions. My focus is on
                delivering high-performance applications that provide
                exceptional user experiences while maintaining clean,
                maintainable code.
              </p>
              <p className="pl-4 sm:pl-8 leading-relaxed">
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
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 relative"
      >
        <div className="max-w-6xl w-full relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 font-mono">
            <span className="text-cyan-400">{"<"}</span>
            Skills
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <div className="bg-black border border-gray-700 rounded-lg p-4 font-mono text-sm mb-12">
            {/* <p className="text-green-400">$ skills --summary</p> */}

            <ul className="mt-4 space-y-2">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="
                      grid
                      grid-cols-1
                      sm:grid-cols-[300px_100px_minmax(0,1fr)]
                      gap-4
                      items-start
                    "
                >
                  {/* Skill name */}
                  <span
                    className="
                      text-gray-300
                      text-lg
                      leading-snug
                      break-words
                      pl-2
                      -ml-2
                    "
                  >
                    ▸ {skill.name}
                  </span>

                  {/* Segmented bars */}
                  <div className="flex items-center gap-2 mt-1 font-mono text-xs text-cyan-400">
                    <span>[</span>

                    <div className="flex gap-[2px]">
                      {Array.from({ length: TOTAL_BARS }).map((_, index) => {
                        const filled =
                          index < Math.round(skill.level / (100 / TOTAL_BARS));

                        return (
                          <span
                            key={index}
                            className={`h-2 w-2 transition-all ${
                              filled
                                ? "bg-cyan-400 shadow-[0_0_6px_#22d3ee]"
                                : "bg-gray-700"
                            }`}
                          />
                        );
                      })}
                    </div>

                    <span>]</span>
                    <span className="ml-1">{skill.level}%</span>
                  </div>

                  {/* Evidence */}
                  <span
                    className="
                      text-gray-400
                      text-sm
                      leading-relaxed
                      break-words
                      max-w-2xl
                      ml-2
                    "
                  >
                    {skill.evidence}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              const TOTAL_BARS = 10;

              return (
                <div
                  key={index}
                  className="p-4 md:p-6 bg-gray-900 rounded-lg border-2 border-cyan-400/20 hover:border-cyan-400 transition-all group relative overflow-hidden"
                >
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-3 text-xs font-mono text-gray-400">
                    <span className="text-green-400">●</span>
                    <span className="text-yellow-400">●</span>
                    <span className="text-red-400">●</span>
                    <span className="ml-2">capability.scan</span>
                  </div>

                  {/* Icon */}
                  <Icon className="w-10 md:w-12 h-10 md:h-12 mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-2 font-mono text-cyan-400">
                    {cap.title}
                  </h3>

                  {/* Terminal Progress Bar */}
                  <div className="flex items-center gap-2 mb-3 font-mono text-xs text-cyan-400">
                    <span>[</span>
                    <div className="flex gap-[2px]">
                      {Array.from({ length: TOTAL_BARS }).map((_, i) => {
                        const filled =
                          i < Math.round(cap.level / (100 / TOTAL_BARS));
                        return (
                          <span
                            key={i}
                            className={`h-2 w-2 ${
                              filled ? "bg-cyan-400" : "bg-gray-700"
                            }`}
                          />
                        );
                      })}
                    </div>
                    <span>]</span>
                    <span className="ml-1">{cap.level}%</span>
                  </div>

                  {/* Stack */}
                  <p className="text-gray-400 text-xs md:text-sm font-mono">
                    {cap.stack}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="highlighted builds"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 relative"
      >
        <div className="max-w-6xl w-full relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 font-mono">
            <span className="text-cyan-400">{"<"}</span>
            Highlighted Builds
            <span className="text-cyan-400">{" />"}</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 md:p-6 border-2 border-cyan-400/20 hover:border-cyan-400 transition-all group relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400/10 rounded-bl-full group-hover:scale-150 transition-transform" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-cyan-400 rounded-sm" />

                {/* Title */}
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 font-mono text-cyan-400 relative z-10 line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed text-xs sm:text-sm relative z-10">
                  {project.description}
                </p>

                {/* 🧬 Project DNA */}
                <div className="space-y-2 mb-4 relative z-10">
                  {project.dna.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-20 text-xs text-gray-400 font-mono">
                        {item.label}
                      </span>

                      <div className="flex-1 h-1.5 bg-gray-800 rounded overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>

                      <span className="text-xs text-cyan-400 font-mono">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>

                {/* 📈 Impact Metrics */}
                {project.impact && (
                  <div className="mb-4 space-y-1 relative z-10">
                    {project.impact.map((point, i) => (
                      <p
                        key={i}
                        className="text-xs text-green-400 font-mono flex items-start gap-2"
                      >
                        <span>▲</span>
                        <span>{point}</span>
                      </p>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded text-xs text-cyan-400 font-mono whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-blue-400 transition-colors font-mono text-xs sm:text-sm relative z-10"
                  >
                    view_platform()
                    <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="get in touch"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 relative"
      >
        <div className="max-w-6xl w-full text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 font-mono">
            <span className="text-cyan-400">{"<"}</span>
            Get in Touch
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 font-light px-2">
            Whether you're looking for a skilled developer for your next project
            or want to discuss opportunities, I'm always open to connecting with
            fellow professionals and potential collaborators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-8 md:mb-12">
            <a
              href="mailto:your.email@example.com"
              className="px-6 sm:px-8 py-3 md:py-4 bg-cyan-400 text-gray-950 rounded font-semibold font-mono text-sm md:text-base hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Mail className="w-4 md:w-5 h-4 md:h-5" />
              send_email()
            </a>
            <a
              href="https://www.linkedin.com/in/saisankar-s-r-896a39150/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 md:py-4 border-2 border-cyan-400 text-cyan-400 rounded font-semibold font-mono text-sm md:text-base hover:bg-cyan-400/10 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Linkedin className="w-4 md:w-5 h-4 md:h-5" />
              connect()
            </a>
          </div>
          <div className="flex justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/saisankar-1919"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors active:scale-95"
            >
              <Github className="w-6 md:w-8 h-6 md:h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/saisankar-s-r-896a39150/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 border-2 border-gray-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors active:scale-95"
            >
              <Linkedin className="w-6 md:w-8 h-6 md:h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-cyan-400/20 py-6 md:py-8 text-center text-gray-400 relative z-10 px-4">
        <p className="font-mono text-xs sm:text-sm">
          <span className="text-cyan-400">{"</>"}</span> Built with React &
          TypeScript © Sai Sankar
        </p>
      </footer>
    </div>
  );
}
