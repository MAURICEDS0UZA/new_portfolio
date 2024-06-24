import { RESUMEURL } from "../utils/constant";

const ShimmerResume = () => {
  return (
    <>
      <section className=" p-4 h-full">
        <div className="mx-4 md:mx-20 my-6 md:my-16 h-4/5 py-[60%] md:py-[35%] bg-gray-50  shadow-lg shadow-gray-400"></div>{" "}
        <a
          className="p-2  grid  w-fit m-auto md:p-4  rounded-lg bg-gray-800 text-white text-center"
          href={RESUMEURL}
          target="blank"
        >
          Download
        </a>
      </section>
    </>
  );
};
export default ShimmerResume;
