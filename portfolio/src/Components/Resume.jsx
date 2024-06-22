import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import resumePdf from "../assets/pdf/Maurice-Minin-Dsouza.pdf";
import { RESUMEURL } from "../utils/constant";

const Resume = () => {
  return (
    <>
      <section className=" p-4 h-full">
        {/* <div className=""> */}
        <div className="mx-4 md:mx-20 my-6 md:my-16 h-4/5">
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={resumePdf} />
          </Worker>
        </div>{" "}
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

export default Resume;
