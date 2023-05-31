import React, { useContext } from "react";
import { SetPageInfoContext } from "../../App";
import { Button } from "react-bootstrap";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import uniqid from "uniqid";

const Review = () => {
  const { contactInfo, educationInfo, workInfo, projectInfo, skills } =
    useContext(SetPageInfoContext);
  const printRef = React.useRef();

  // Transforms div into pdf
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  return (
    <div className="page">
      <h1>Resume</h1>
      <div className="finalCV" ref={printRef}>
        <div className="cvContact">
          <h1 style={{ marginTop: "20px" }}>
            {contactInfo.firstName} {contactInfo.lastName}
          </h1>

          <p>
            {contactInfo.address}, {contactInfo.city}, {contactInfo.addrState},{" "}
            {contactInfo.zip}
          </p>
          <p>
            {contactInfo.phone} | {contactInfo.email}
          </p>
        </div>
        <div className="cvSection">
          <h2>Skills</h2>
          <div>{skills.skills}</div>
        </div>
        <div className="cvSection">
          <h2>Education</h2>
          {educationInfo.map((school) => {
            return (
              <div key={uniqid()}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{school.school}</span>
                  <span>{`${new Date(school.fromDate).toLocaleDateString(
                    "en-En",
                    { year: "numeric", month: "long", day: "numeric" }
                  )} - ${new Date(school.toDate).toLocaleDateString("en-En", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}`}</span>
                </div>
                <p>{school.degree}</p>
              </div>
            );
          })}
        </div>
        <div className="cvSection">
          <h2>Work Experience</h2>
          {workInfo.map((job) => {
            return (
              <div key={uniqid()}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{job.company}</span>
                  <span>
                    {job.city}, {job.addrState}
                  </span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>{job.role}</span>
                  <span>{`${new Date(job.fromDate).toLocaleDateString("en-En", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })} - ${new Date(job.toDate).toLocaleDateString("en-En", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}`}</span>
                </div>
                <p>{job.description}</p>
              </div>
            );
          })}
        </div>
        <div className="cvSection">
          <h2>Projects</h2>
          {projectInfo.map((project) => {
            return (
              <div key={uniqid()}>
                <div>{project.name}</div>
                <p>{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Button variant="success" onClick={handleDownloadPdf}>
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default Review;
