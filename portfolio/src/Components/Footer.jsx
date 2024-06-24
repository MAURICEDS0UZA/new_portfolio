import { FaSquareGithub, FaSquareEnvelope, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 font-serif">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/maurice-dsouza/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 flex gap-2 items-center"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/MAURICEDS0UZA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 flex gap-2 items-center"
          >
            <FaSquareGithub /> Github
          </a>
          <a
            href="mailto:maurice.m.dsouza@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 flex gap-2 items-center"
          >
            <FaSquareEnvelope />
            Gmail
          </a>
        </div>
        <p className="text-sm">
          Made by Maurice
          <br />© 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
