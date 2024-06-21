const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 font-serif">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/maurice-dsouza/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <i className="fab fa-linkedin fa-beat-fade" aria-hidden="true"></i>{" "}
            LinkedIn
          </a>
          <a
            href="https://github.com/MAURICEDS0UZA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <i className="fab fa-github" aria-hidden="true"></i> Github
          </a>
          <a
            href="mailto:maurice.m.dsouza@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400"
          >
            <i
              className="fa-solid fa-envelope fa-beat-fade"
              aria-hidden="true"
            ></i>{" "}
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
