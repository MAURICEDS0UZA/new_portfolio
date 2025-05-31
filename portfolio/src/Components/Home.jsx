import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className=" min-h-fit bg-gray-100 text-justify p-6 font-serif ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 text-center ">
          Welcome to My Portfolio🧑‍💻
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Hello!{" "}
          <span className="italic font-semibold">
            {"I'm Maurice Minin Dsouza,"}
          </span>
          {
            " a passionate Front-end Developer based in Bangalore, India, with over 3 years of professional experience building modern, scalable, and user-friendly web applications."
          }
        </p>
        <p className="hidden sm:block text-base sm:text-lg text-gray-700 mb-6">
          In my current role at Tata Consultancy Services, I’ve had the
          opportunity to lead and contribute to high-impact FinTech projects. My
          work focuses on building reusable, performance-optimized interfaces
          using technologies like{" "}
          <span className="font-semibold">React.js</span>,{" "}
          <span className="font-semibold">Tailwind CSS</span>,{" "}
          <span className="font-semibold">TypeScript</span>,{" "}
          <span className="font-semibold">Redux Toolkit</span>, and{" "}
          <span className="font-semibold">Redux-Saga</span>. I’ve also developed
          cross-platform applications with{" "}
          <span className="font-semibold">Electron.js</span>, helping teams
          reduce development cycles and deliver consistent experiences across
          devices.
        </p>
        <p className="hidden sm:block text-base sm:text-lg text-gray-700 mb-6">
          {`I’m driven by clean code, pixel-perfect design, and a strong focus on
        performance and accessibility. I enjoy collaborating with
        cross-functional teams and staying up to date with modern web
        development practices.`}
        </p>
        <p className="hidden sm:block text-base sm:text-lg text-gray-700 mb-6">
          {`Explore my portfolio to see my projects, skills, and experiences.
          Let's connect and create something amazing together!`}
        </p>
        <Link
          to="/contact"
          className="bg-gray-700  text-white flex items-center w-48 m-auto justify-center px-4 py-2 rounded-full shadow-md hover:bg-gray-800 font-semibold"
        >
          {" "}
          Connect 🤝
        </Link>
      </div>
    </section>
  );
};

export default Home;
