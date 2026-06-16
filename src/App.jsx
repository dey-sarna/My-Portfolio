import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  MapPin,
  ExternalLink,
  Terminal,
  ChevronRight,
  Code2,
  Database,
  Wrench,
  Award,
  Download,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const SKILLS = {
  Languages: ["C", "C++", "JavaScript", "HTML", "CSS"],
  Frontend: ["React.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  Database: ["MySQL", "MongoDB"],
  Tools: ["Git", "GitHub", "VS Code", "XAMPP"],
  Concepts: ["OOP", "DBMS", "Data Structures"],
};

const PROJECTS = [
  {
    id: "01",
    name: "Servify",
    tag: "Complaint Management",
    desc: "A role-based public complaint management system. Citizens file complaints, staff triage and resolve them, all behind JWT-secured REST APIs.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    github: "https://github.com/dey-sarna/Servify",
  },
  {
    id: "02",
    name: "Pet Rescue & Adoption",
    tag: "Group Project",
    desc: "A pet adoption platform built with a team. Owned the database schema and backend APIs powering user and admin-facing functionality.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/dey-sarna/Pet-Adoption",
  },
  {
    id: "03",
    name: "News Portal",
    tag: "Full Stack",
    desc: "A full-stack news platform with authentication, real-time publishing, personalized dashboards, and full CRUD for editorial control.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/dey-sarna/News-Portal",
  },
];

const EXPERIENCE = {
  role: "Software Engineer Intern",
  org: "BAIUST Computer Club",
  period: "Jul 2025 - Dec 2025",
  points: [
    "Built full-stack web applications using React.js, Node.js, Express.js and MySQL.",
    "Collaborated with a team to design, develop, and test software solutions.",
    "Contributed to database design, API development, and system implementation.",
  ],
};

const EDUCATION = {
  degree: "B.Sc. in Computer Science & Engineering",
  school: "Bangladesh Army International University of Science and Technology",
  period: "2023 - Present",
};

const CERTS = [
  "Full Stack Web Development with JavaScript (MERN) - Ostad",
  "Learn & Hack Bootcamp - bongoDev",
  "Champion, Dataset Creation Challenge (2025)",
];

const LANGUAGES = ["Bengali (Native)", "English", "Hindi"];

const TERM_LINES = [
  "$ whoami",
  "Sarna Dey - CSE undergrad & full-stack developer",
  "$ cat focus.txt",
  "Building practical, full-stack solutions with the MERN stack.",
];

function useTypewriter(lines, speed = 28, lineDelay = 250) {
  const [output, setOutput] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let current = "";
    let timeoutId;
    const built = [];

    function typeChar() {
      const line = lines[lineIdx];

      if (!line) {
        setDone(true);
        return;
      }

      if (charIdx < line.length) {
        current += line[charIdx];
        charIdx += 1;
        setOutput([...built, current]);
        timeoutId = setTimeout(typeChar, speed);
      } else {
        built.push(current);
        lineIdx += 1;
        charIdx = 0;
        current = "";

        if (lineIdx < lines.length) {
          timeoutId = setTimeout(typeChar, lineDelay);
        } else {
          setDone(true);
        }
      }
    }

    timeoutId = setTimeout(typeChar, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return { output, done };
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

function SectionLabel({ index, name }) {
  return (
    <div className="flex items-baseline gap-3 mb-10">
      <span className="font-mono text-[13px] text-emerald-400/70">
        {`// ${index}`}
      </span>

      <h2 className="font-display text-2xl sm:text-3xl text-slate-100">
        {name}
      </h2>

      <div className="flex-1 h-px bg-slate-700/60 ml-2" />
    </div>
  );
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const { output, done } = useTypewriter(TERM_LINES);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("sarnadey228@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-slate-200 font-body antialiased">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm text-emerald-400">
            sarna<span className="text-slate-500">.dev</span>
          </a>

          <div className="hidden sm:flex items-center gap-8 font-mono text-[13px] text-slate-400">
            <a href="#projects">projects</a>
            <a href="#skills">skills</a>
            <a href="#experience">experience</a>
            <a href="#contact">contact</a>
            <a href="#resume">resume</a>
          </div>

          <a
            href="#contact"
            className="font-mono text-[13px] px-3 py-1.5 rounded border border-emerald-500/40 text-emerald-400"
          >
            say hi →
          </a>
        </div>
      </nav>

      <header
        id="top"
        className="max-w-5xl mx-auto px-6 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32"
      >
        <div className="grid sm:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <p className="font-mono text-[13px] text-slate-400 mb-3 flex items-center gap-2">
              <MapPin size={13} /> Comilla, Bangladesh
            </p>

            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-slate-50 leading-[1.05] mb-6">
              Sarna Dey
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
           I am a Full Stack Developer specializing in the MERN stack and a Computer Science and Engineering student passionate about building scalable, user-focused web applications that solve real-world problems.

I enjoy transforming ideas into impactful digital solutions through continuous learning, creativity, and problem-solving.

I believe great software is measured not by the amount of code written, but by the impact it creates for people. This mindset drives me to continuously learn, innovate, and grow as a Software Engineer.


            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="font-mono text-sm px-4 py-2.5 rounded bg-emerald-500 text-slate-950 font-medium flex items-center gap-2"
              >
                View projects <ChevronRight size={15} />
              </a>

              <a
                href="https://github.com/dey-sarna"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-4 py-2.5 rounded border border-slate-700 text-slate-300 flex items-center gap-2"
              >
                <FaGithub size={15} /> GitHub
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <img
              src="public\Picture.jpeg"
              alt="Sarna Dey"
              className="w-52 h-52 rounded-2xl object-cover border-4 border-emerald-500 shadow-2xl shadow-black/40"
            />

            <div className="w-full sm:w-[380px] rounded-lg border border-slate-700/80 bg-[#0A0E14] shadow-2xl shadow-black/40 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-800 bg-[#0D1117]">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <span className="ml-2 font-mono text-[11px] text-slate-500">
                  sarna@portfolio
                </span>
              </div>

              <div className="p-4 font-mono text-[13px] leading-relaxed min-h-[140px]">
                {output.map((line, i) => {
                  const isPrompt = line.startsWith("$");

                  return (
                    <div
                      key={i}
                      className={
                        isPrompt
                          ? "text-emerald-400"
                          : "text-slate-300 mb-2"
                      }
                    >
                      {isPrompt && <span className="text-slate-500">$ </span>}
                      {isPrompt ? line.replace(/^\$ /, "") : line}
                    </div>
                  );
                })}

                <span
                  className={`inline-block w-2 h-4 bg-emerald-400 ${
                    done ? "cursor-blink" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-slate-800/60"
      >
        <Reveal>
          <SectionLabel index="01" name="Projects" />
        </Reveal>

        <div className="space-y-5">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-slate-800 bg-[#11161D] hover:border-emerald-500/40 p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[12px] text-slate-600">
                      {p.id}
                    </span>

                    <h3 className="font-display text-xl text-slate-100 group-hover:text-emerald-400">
                      {p.name}
                    </h3>
                  </div>

                  <ExternalLink size={16} className="text-slate-600" />
                </div>

                <p className="font-mono text-[11px] uppercase tracking-wider text-emerald-500/70 mb-3">
                  {p.tag}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-2xl">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2.5 py-1 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-slate-800/60"
      >
        <Reveal>
          <SectionLabel index="02" name="Skills" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <Reveal key={category} delay={i * 60}>
              <div className="rounded-lg border border-slate-800 bg-[#11161D] p-5 h-full">
                <div className="flex items-center gap-2 mb-3 text-slate-500">
                  {category === "Languages" && <Code2 size={14} />}
                  {category === "Database" && <Database size={14} />}
                  {category === "Tools" && <Wrench size={14} />}
                  {(category === "Frontend" ||
                    category === "Backend" ||
                    category === "Concepts") && <Terminal size={14} />}

                  <span className="font-mono text-[11px] uppercase tracking-wider">
                    {category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-[13px] px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-slate-800/60"
      >
        <Reveal>
          <SectionLabel index="03" name="Experience" />
        </Reveal>

        <Reveal>
          <div className="rounded-lg border border-slate-800 bg-[#11161D] p-6 sm:p-7 mb-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display text-lg text-slate-100">
                {EXPERIENCE.role}
              </h3>

              <span className="font-mono text-[12px] text-slate-500">
                {EXPERIENCE.period}
              </span>
            </div>

            <p className="text-emerald-400/80 text-sm mb-4">
              {EXPERIENCE.org}
            </p>

            <ul className="space-y-2">
              {EXPERIENCE.points.map((pt, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm text-slate-400 leading-relaxed"
                >
                  <span className="text-slate-600 font-mono">›</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="font-mono text-[13px] text-emerald-400/70 mb-4">
            {`// education`}
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-lg border border-slate-800 bg-[#11161D] p-6 sm:p-7 mb-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="font-display text-lg text-slate-100">
                {EDUCATION.degree}
              </h3>

              <span className="font-mono text-[12px] text-slate-500">
                {EDUCATION.period}
              </span>
            </div>

            <p className="text-slate-400 text-sm">{EDUCATION.school}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="font-mono text-[13px] text-emerald-400/70 mb-4 flex items-center gap-2">
            <Award size={13} /> {`// certifications & achievements`}
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-lg border border-slate-800 bg-[#11161D] p-6 sm:p-7 mb-10">
            <ul className="space-y-2">
              {CERTS.map((c, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm text-slate-400 leading-relaxed"
                >
                  <span className="text-slate-600 font-mono">›</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="font-mono text-[13px] text-emerald-400/70 mb-4">
            {`// languages`}
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map((l) => (
              <span
                key={l}
                className="text-[13px] px-3 py-1.5 rounded-full border border-slate-700 text-slate-300"
              >
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 sm:px-8 py-24 border-t border-slate-800/60"
      >
        <Reveal>
          <div className="text-center max-w-xl mx-auto">
            <p className="font-mono text-[13px] text-emerald-400/70 mb-3">
              {`// 04 contact`}
            </p>

            <h2 className="font-display text-3xl sm:text-4xl text-slate-50 mb-4">
              Let&apos;s build something.
            </h2>

            <p className="text-slate-400 mb-9">
              Open to internships, collaborations, and interesting full-stack
              problems.
            </p>

            <button
              onClick={handleCopyEmail}
              className="font-mono text-sm px-5 py-3 rounded bg-emerald-500 text-slate-950 font-medium flex items-center gap-2 mx-auto justify-center"
            >
              <Mail size={15} />
              {copied ? "Copied!" : "sarnadey228@gmail.com"}
            </button>

            <div className="flex items-center justify-center gap-5 mt-10">
              <a
                href="https://github.com/dey-sarna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-emerald-400"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/sarna-dey-647853394"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-emerald-400"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="resume"
        className="max-w-5xl mx-auto px-6 sm:px-8 py-20 border-t border-slate-800/60 text-center"
      >
        <Reveal>
          <p className="font-mono text-[13px] text-emerald-400/70 mb-3">
            {`// 05 resume`}
          </p>

          <h2 className="font-display text-3xl sm:text-4xl text-slate-50 mb-4">
            My Resume
          </h2>

          <p className="text-slate-400 mb-8">
            Download my latest resume to learn more about my skills, projects,
            and experience.
          </p>

          <a
            href="MY RESUME.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-emerald-500 text-slate-950 font-mono text-sm font-medium hover:bg-emerald-400 transition"
          >
            <Download size={16} />
            Download
          </a>
        </Reveal>
      </section>

      <footer className="text-center py-8 border-t border-slate-800/60">
        <p className="font-mono text-[11px] text-slate-600">
          Sarna Dey {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}