import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {

    return ( 
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-right">
                         Hi, I’m Diane — Security Focused QA Engineer
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        CompTIA Security+ certified professional with a background in Software QA, experienced in analyzing system behavior, reviewing logs, and identifying anomalies in production environments. Skilled in validating access controls and troubleshooting security-impacting issues, with hands-on experience in cybersecurity labs, threat detection, and system hardening.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a  
                            href="#projects" 
                            className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                        >
                            View Projects
                        </a>

                        <a  
                            href="#contact" 
                            className="border border-purple-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-500/10"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* GitHub link */}
                    <div className="mt-4 flex justify-center">
                        <a
                            href="https://github.com/dianenguyen1999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition text-sm"
                        >
                            View GitHub Profile →
                        </a>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};