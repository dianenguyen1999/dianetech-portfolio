import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
  {
    title: "Cybersecurity Lab Practice",
    description:
      "Completed hands-on TryHackMe and CTF labs focused on log analysis, reconnaissance, basic vulnerability identification, and investigating simulated security scenarios.",
    skills: ["TryHackMe", "CTFs", "Log Analysis", "Reconnaissance"],
    link: "#",
  },
  {
    title: "Network Security Fundamentals",
    description:
      "Practiced analyzing network security concepts including TCP/IP, DNS, HTTP/S, suspicious traffic patterns, and indicators of compromise through guided labs.",
    skills: ["TCP/IP", "DNS", "HTTP/S", "Network Security"],
    link: "#",
  },
  {
    title: "AWS Security Basics Lab",
    description:
      "Built a small AWS lab to practice foundational cloud security concepts such as IAM permissions, access control, and reviewing basic activity logs.",
    skills: ["AWS IAM", "CloudTrail", "Access Control", "Cloud Security"],
    link: "#",
  },
  {
    title: "QA Experience Applied to Security",
    description:
      "Applied software QA experience to analyze application behavior, validate role-based access controls, document issues, and troubleshoot system anomalies.",
    skills: ["QA", "RBAC", "Documentation", "Root Cause Analysis"],
    link: "#",
  },
 ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            Security Projects & Learning Labs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(58,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(58,130,246,0.1)] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project 🠪
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};