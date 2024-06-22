import { SKILLS } from "../utils/constant";

const Skills = () => {
  return (
    <section className="  p-6  py-20 bg-gray-100  font-serif ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {SKILLS.map((skillCategory, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {skillCategory.category}
              </h3>
              <ul className="  text-gray-700">
                {skillCategory.skills.map((skill, idx) => (
                  <li key={idx} className="italic">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
