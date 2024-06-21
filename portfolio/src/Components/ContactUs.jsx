import { SOCIALMEDIA } from "../utils/constant";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-6 font-serif">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Contact Me
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2 mb-6 lg:mb-0">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Connect with me
            </h3>
            <ul className="space-y-4">
              {SOCIALMEDIA.map((link, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <i className={`${link.icon} text-blue-600 text-2xl`}></i>
                  <a href={link.url} className="text-blue-600 hover:underline">
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
