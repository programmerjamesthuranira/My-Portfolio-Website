"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string; // optional now (for conditional rendering)
}

export default function HomePage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Mortuary Management System",
      description:
        "A system to manage mortuary records and operations efficiently.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/james1478/mortuary-management-system",
    },

    {
      id: 4,
      title: "DApp Blockchain Smart Contract with Ethereum and Solidity",
      description:
        "Blockchain Project that uses testnet to deploy smart contracts.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/james1478/bit-kca-smartContract-and-frontend",
    },
  ];

  const ongoingProjects: Project[] = [
    {
      id: 5,
      title: "DawaSphere",
      description:
        "AI-powered telemedicine and pharmacy management system. Currently in development phase.",
      tech: [
        "Next.js",
        "Solidity",
        "Gemini",
        "Postgres",
        "Node.js",
        "Tailwind",
      ],
      link: "https://dawa-sphere.vercel.app", // live
    },
    {
      id: 6,
      title: "AI Mental Health App",
      description:
        "An AI-powered wellness app to provide mental health support. 🚧 Work in Progress",
      tech: ["React Native", "Python", "TensorFlow"],
    },
    {
      id: 7,
      title: "AgriLink Platform",
      description:
        "Smart marketplace connecting farmers directly to buyers with real-time prices.",
      tech: ["React", "Express", "MySQL"],
    },
    {
      id: 8,
      title: "Fintech Micro-lending Platform",
      description: "Blockchain-based platform enabling micro-loans in Kenya.",
      tech: ["Next.js", "Solidity", "Tailwind"],
    },
  ];

  // ✅ Typed event for input & textarea changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Typed event for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Portfolio Contact from " + formData.name,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:jamesyourmail@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm James Thuranira
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Full-Stack Software Developer | Blockchain Enthusiast | Problem
            Solver
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/james-thuranira-b24170233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="px-6 py-2 bg-white text-indigo-600 rounded-full font-semibold shadow hover:bg-gray-100"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/james1478"
              className="px-6 py-2 bg-white text-indigo-600 rounded-full font-semibold shadow hover:bg-gray-100"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-10 md:mt-0"
        >
          <Image
            src="/official profile.jpeg"
            alt="Profile Picture"
            width={220}
            height={220}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow hover:shadow-lg p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="flex-grow text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="mt-auto inline-block text-indigo-600 hover:text-indigo-800 font-medium"
                  target="_blank"
                >
                  View Project On GitHub →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Ongoing Projects Section */}
      <section className="px-6 md:px-20 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Ongoing Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ongoingProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow hover:shadow-lg p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="flex-grow text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* Only show button if link exists */}
              {project.link && (
                <a
                  href={project.link}
                  className="mt-auto inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 shadow"
                  target="_blank"
                >
                  View Live Website →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recommendation Letter & CV Section */}
      <section className="px-6 md:px-20 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Recommendation Letter & CV
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Recommendation Letter */}
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              Workplace Recommendation Letter
            </h3>
            <embed
              src="/James-recommedation-Letter.pdf"
              type="application/pdf"
              width="100%"
              height="500px"
              className="rounded-lg"
            />
          </div>
          {/* CV */}
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">My CV</h3>
            <embed
              src="/James_Muriithi_Thuranira_CV.pdf"
              type="application/pdf"
              width="100%"
              height="500px"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white shadow rounded-2xl p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 shadow"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-8 bg-gray-900 text-gray-400 text-center">
        <p>
          © {new Date().getFullYear()} James Thuranira. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
