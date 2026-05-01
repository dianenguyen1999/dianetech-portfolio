import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const securitySkills = [
        "Log Analysis",
        "Security Monitoring",
        "Incident Investigation",
        "Threat Detection",
        "Access Control (RBAC)",
        "System Hardening"
    ];

    const toolsTechnologies = [
        "AWS (IAM, CloudTrail)",
        "TCP/IP",
        "DNS",
        "HTTP/S",
        "Grafana"
    ];

    const programming = [
        "JavaScript",
        "TypeScript",
        "Python",
        "Ruby on Rails",
        "MySQL"
    ];

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center"> 
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                Hi, my name is Diane. I’m a Software QA Engineer with a strong interest
                in cybersecurity, security operations, and threat detection. My background
                in QA has helped me develop a detail-oriented and investigative mindset,
                especially when analyzing system behavior, reviewing logs, identifying
                anomalies, and troubleshooting issues in production environments.  
                </p>

                <p className="text-gray-300 mb-6">
                I’m currently building my cybersecurity skills through hands-on labs,
                security monitoring practice, network security concepts, and incident
                investigation scenarios. I’m especially interested in roles where I can
                combine my experience in system analysis, documentation, and root-cause
                investigation with cybersecurity.
                </p>

                {/* SKILLS SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Security Skills */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Security Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {securitySkills.map((skill, key)=> (
                                <span 
                                  key={key}
                                  className="bg-blue-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(58,130,246,0.2)] transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {toolsTechnologies.map((tool, key)=> (
                                <span 
                                  key={key}
                                  className="bg-blue-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(58,130,246,0.2)] transition"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Programming */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Programming</h3>
                        <div className="flex flex-wrap gap-2">
                            {programming.map((tech, key)=> (
                                <span 
                                  key={key}
                                  className="bg-blue-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(58,130,246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* EDUCATION + EXPERIENCE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education & Certifications</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>
                            B.S. Computer Science (Information Security Concentration)
                            Southern New Hampshire University (Expected May 2027)
                        </strong>
                    </li>

                    <li>
                        <strong>
                            DevPoint Labs - Full Stack Web Development Bootcamp
                        </strong>
                    </li>

                    <li>
                        <strong>CompTIA Security+</strong>
                        <div className="text-sm text-gray-400">
                            Earned February 2026
                        </div>
                    </li>

                    <li>
                        <strong>CompTIA CySA+</strong>
                        <div className="text-sm text-gray-400">
                            In Progress (Expected June 2026)
                        </div>
                    </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>

                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold"> 
                            Software QA Engineer - Acima (2021 - Present) 
                        </h4>
                        <p>
                        Analyze application workflows, troubleshoot production issues,
                        validate access controls, review logs, document findings, and
                        collaborate with engineering teams to support secure and reliable
                        system functionality.
                        </p>

                        <h4 className="font-semibold"> 
                            Processing Agent - Acima (2019 - 2021) 
                        </h4>
                        <p>
                        Reviewed and validated documentation within regulated workflows, ensuring accuracy and compliance with internal policies. 
                        Maintained secure handling of sensitive customer data and followed structured processes to support data integrity and operational security.
                        </p>
                    </div>
                </div>
              </div>

            </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};