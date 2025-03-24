"use client";

import ViewWrapper from "@/components/layout/ViewWrapper";
import { FaDownload } from "react-icons/fa";

export default function ResumeView() {
  // Common class names
  const sectionHeadingClasses = "text-2xl font-semibold mb-4 border-b pb-2";
  const companyNameClasses = "text-xl font-medium text-on-surface";
  const dateClasses = "text-on-surface-variant";
  const listItemClasses = "list-disc list-inside space-y-1 text-on-surface";
  const sectionClasses = "mb-8";

  function downloadResumePDF() {
    const contentElement = document.querySelector(".resume-content");

    const printWindow = window.open("", "", "height=650,width=900");

    if (!printWindow || !contentElement) {
      alert("Unexpected error occurred. Sorry for the inconvenience.");

      return;
    }

    printWindow.document.write(
      "<html><head><title>Resume Content</title></head><body>"
    );
    printWindow.document.write(contentElement.innerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  }

  return (
    <ViewWrapper id="resume-view">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex justify-end mb-6">
          <button
            onClick={downloadResumePDF}
            className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-md"
          >
            <FaDownload className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        <div className="resume-content print:block bg-primary text-on-primary p-8 rounded-lg shadow-lg">
          <div className="mb-8 border-b pb-4">
            <h1 className="text-4xl font-bold mb-2">Yeh Hsuan Ting</h1>
            <p className={dateClasses}>
              +886 909145502 | stevenyhtyeh@gmail.com | Taiwan
            </p>
          </div>

          <section className={sectionClasses}>
            <h2 className={sectionHeadingClasses}>Experience</h2>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className={companyNameClasses}>imersive | Paris</h3>
                <p className={dateClasses}>03/2020 - 02/2025</p>
              </div>
              <p className={`${dateClasses} mb-2`}>Development Lead</p>
              <ul className={listItemClasses}>
                <li>
                  Led development teams in building system, data and
                  application-level interfaces and functional relationships.
                </li>
                <li>
                  Determined and implemented innovative and industry best
                  practices using modern designs and tools.
                </li>
                <li>
                  Collaborated with product specialists to understand
                  requirements and align business processes to product features
                  and capabilities.
                </li>
                <li>
                  Developed and evaluated solution options to build consensus
                  and drive quality solutions.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className={companyNameClasses}>Software Island | Taiwan</h3>
                <p className={dateClasses}>10/2018 - 02/2020</p>
              </div>
              <p className={`${dateClasses} mb-2`}>Software Developer</p>
              <ul className={listItemClasses}>
                <li>
                  Collaborated on stages of systems development lifecycle from
                  requirement gathering to production releases.
                </li>
                <li>
                  Participated in software field testing to verify performance
                  of developed projects.
                </li>
                <li>
                  Updated old code bases to modern development standards,
                  improving functionality.
                </li>
                <li>
                  Translated customer requirements into written use cases.
                </li>
              </ul>
            </div>
          </section>

          <section className={sectionClasses}>
            <h2 className={sectionHeadingClasses}>Skills</h2>
            <p className="text-on-surface">
              Mobile application development, Technical leadership, Software
              architecture design, Database management, Work coordination,
              Project management, Problem-solving aptitude, Needs assessment,
              Coaching
            </p>
          </section>

          <section className={sectionClasses}>
            <h2 className={sectionHeadingClasses}>Education</h2>
            <div className="mb-2">
              <h3 className={companyNameClasses}>
                Hong Kong Polytechnic University | Hong Kong
              </h3>
              <p className={dateClasses}>Civil Engineering | 03/2017</p>
            </div>
          </section>

          <section className={sectionClasses}>
            <h2 className={sectionHeadingClasses}>Languages</h2>
            <p className="text-on-surface">English, Chinese</p>
          </section>

          <section>
            <h2 className={sectionHeadingClasses}>Technical Skills</h2>
            <div className="grid grid-cols-2 gap-2 text-on-surface">
              <p>React & NextJS</p>
              <p>Tailwind CSS</p>
              <p>NodeJS</p>
              <p>Flutter</p>
              <p>Google Cloud Platform</p>
              <p>Docker</p>
              <p>SQL</p>
            </div>
          </section>
        </div>
      </div>
    </ViewWrapper>
  );
}
