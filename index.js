import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 flex flex-col text-left">
      <table className="mb-6">
        <tr>
          <td>
            <img src="pic2.jp" alt="Venkata Prasad Nusullapalli" className="w-60 h-60 rounded-full border-4 border-white" />
          </td>
          <td className="pl-6">
            <h1 className="text-4xl font-bold">Venkata Prasad Nusullapalli</h1>
            <p className="text-lg">
              <em>
                Software Developer || Full Stack Java Developer
              </em>
            </p>
          </td>
        </tr>
      </table>
      
      <hr className="w-full border-gray-600 mb-6" />

      <p className="mb-6 text-lg">
        A results-driven software developer with over six years of experience in designing and developing high-performance web and mobile applications. 
        Specializing in full-stack development, cloud computing, and microservices architecture, I am dedicated to creating innovative solutions 
        that enhance user experience and optimize system performance. Skilled in modern technologies and best practices, I focus on building 
        scalable, secure, and efficient applications that drive business success.
      </p>
      
      <hr className="w-full border-gray-600 mb-6" />
      <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
      <table className="mb-6">
        <tr>
          <td className="px-4 py-2">Programming Languages</td>
          <td className="px-4 py-2">Java, Python, JavaScript, TypeScript</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Frontend</td>
          <td className="px-4 py-2">React, Next.js, Angular</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Backend</td>
          <td className="px-4 py-2">Spring Boot, Node.js, Django, Flask</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Cloud</td>
          <td className="px-4 py-2">AWS, Azure</td>
        </tr>
        <tr>
          <td className="px-4 py-2">Databases</td>
          <td className="px-4 py-2">MySQL, MongoDB, Cassandra</td>
        </tr>
      </table>

      <hr className="w-full border-gray-600 mb-6" />
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <p className="mb-4"><strong>NetApp (2023-Present):</strong></p>
      <ul className="list-disc pl-6 mb-4">
        <li>Developing high-performance microservices and architecting API solutions.</li>
        <li>Implementing cloud-native technologies to enhance enterprise storage solutions.</li>
        <li>Working on Kubernetes-based deployments and optimizing distributed storage solutions.</li>
      </ul>
      <p className="mb-4"><strong>Nextracker (2022-2023):</strong></p>
      <ul className="list-disc pl-6 mb-4">
        <li>Designed and built scalable applications for solar tracking systems.</li>
        <li>Optimized performance and reliability in renewable energy solutions.</li>
        <li>Developed microservices-based solutions for monitoring solar energy data.</li>
      </ul>
      <p className="mb-4"><strong>Johnson Controls (2020-2022):</strong></p>
      <ul className="list-disc pl-6 mb-4">
        <li>Led the development of cloud-based automation solutions.</li>
        <li>Implemented GraphQL APIs and enhanced IoT integrations.</li>
        <li>Improved efficiency and integration across building management systems.</li>
      </ul>
      <p className="mb-4"><strong>Mindtree (2019-2020):</strong></p>
      <ul className="list-disc pl-6 mb-4">
        <li>Migrated legacy monolithic applications to a microservices-based architecture.</li>
        <li>Developed and optimized REST APIs, CI/CD pipelines, and containerized applications.</li>
        <li>Utilized Docker and Kubernetes for improved deployment and scalability.</li>
      </ul>
      <p className="mb-4"><strong>DXC Technology (2016-2019):</strong></p>
      <ul className="list-disc pl-6 mb-4">
        <li>Developed and maintained enterprise-level web applications.</li>
        <li>Automated deployment processes using Jenkins.</li>
        <li>Improved software release efficiency and reduced downtime.</li>
      </ul>
      
      <hr className="w-full border-gray-600 mb-6" />
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <p className="mb-6 text-xl">Master of Science in Computer Science, Wright State University</p>
      
      <hr className="w-full border-gray-600 mb-6" />
      <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
      <p className="text-lg">Phone: 9842124031</p>
      <p className="text-lg">Email: prasadvenkatn09@gmail.com</p>
      
      <footer className="flex gap-4 mt-4">
        <a href="mailto:prasadvenkatn09@gmail.com" className="text-white hover:text-yellow-400">
          <FaEnvelope size={28} />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-white hover:text-blue-300">
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com/yourgithub" target="_blank" className="text-white hover:text-gray-400">
          <FaGithub size={28} />
        </a>
        <a href="tel:9842124031" className="text-white hover:text-green-400">
          <FaPhone size={28} />
        </a>
      </footer>
    </div>
  );
};

export default Portfolio;
