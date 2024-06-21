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
            I'm Maurice Minin Dsouza,
          </span>{" "}
          a passionate Front-end Developer based in Bangalore, India. With
          extensive experience in web development , I have honed my skills in
          creating, engaging efficient web applications.
        </p>
        <p className="hidden sm:block text-base sm:text-lg text-gray-700 mb-6">
          In my current role at Tata Consultancy Services, I have developed and
          optimized numerous applications, significantly enhancing user
          experiences and data integrity. My expertise in React.js, Tailwind
          CSS, and various other modern technologies enables me to build
          responsive and dynamic web interfaces.
        </p>
        <p className="hidden sm:block text-base sm:text-lg text-gray-700 mb-6">
          My projects showcase a strong emphasis on performance, code quality,
          and best practices. I am dedicated to continuous learning and staying
          updated with the latest industry trends, ensuring that my work remains
          at the cutting edge of web development.
        </p>
        <p className="hidden sm:block text-base sm:text-lg text-gray-700 mb-6">
          Explore my portfolio to see my projects, skills, and experiences.
          Let's connect and create something amazing together!
        </p>

        <a
          href="/contact"
          className="bg-gray-700  text-white flex items-center w-48 m-auto justify-center px-4 py-2 rounded-full shadow-md hover:bg-gray-800 font-semibold"
        >
          Connect 🤝
        </a>
      </div>
    </section>
  );
};

export default Home;
