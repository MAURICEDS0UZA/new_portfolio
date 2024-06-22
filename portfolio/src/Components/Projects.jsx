import { PROJECTS } from "../utils/constant";

const Projects = () => {
  return (
    <section className="min-h-max bg-gray-100 p-6 font-serif">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Projects
        </h2>

        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md   relative"
            >
              {console.log(project.image)}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72  object-fit rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 ">{project.description}</p>
              <div className="mb-4 inline-block ">
                <h4 className="text-gray-900 font-semibold mb-2 ">
                  Technologies:
                </h4>
                <ul className=" text-gray-700 flex flex-wrap gap-1">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}|</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                target="blank"
                className="text-blue-600 hover:underline absolute bottom-3 left-8 "
              >
                View Project{""}🔗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
