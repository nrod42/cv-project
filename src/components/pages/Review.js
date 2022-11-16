import React, { useContext } from "react";
import { SetPageInfoContext } from "../../App";
import { Button } from "react-bootstrap";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Review = () => {
  const { contactInfo, educationInfo, workInfo, projectInfo, skills } = useContext(SetPageInfoContext);
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
          <h1 style={{marginTop: "20px"}}>
            {contactInfo[0]?.firstName} {contactInfo[0]?.lastName}
          </h1>

          <p>
            {contactInfo[0]?.address}, {contactInfo[0]?.city},{" "}
            {contactInfo[0]?.addrState}, {contactInfo[0]?.zip}
          </p>
          <p>
            {contactInfo[0]?.phone} | {contactInfo[0]?.email}
          </p>
        </div>
        <div className="cvSection">
          <h2>Skills</h2>
            <div>
              {skills[0]?.skills}
            </div>
        </div>
        <div className="cvSection">
          <h2>Education</h2>
          {educationInfo.map((school) => {
            return (
              <div>
                <div>
                  {school.school} | {school.degree}
                </div>
                <p>
                <p>{`${new Date(school.fromDate).toLocaleDateString('en-En',{ year: 'numeric', month: 'long', day: 'numeric' })} - ${new Date(school.toDate).toLocaleDateString('en-En',{ year: 'numeric', month: 'long', day: 'numeric' })}`}</p>

                </p>
              </div>
            );
          })}
        </div>
        <div className="cvSection">
          <h2>Work Experience</h2>
          {workInfo.map((job) => {
            return (
              <div>
                <div>
                  {job.company} | {job.role} | {job.city}, {job.addrState}
                </div>
                <p>{`${new Date(job.fromDate).toLocaleDateString('en-En',{ year: 'numeric', month: 'long', day: 'numeric' })} - ${new Date(job.toDate).toLocaleDateString('en-En',{ year: 'numeric', month: 'long', day: 'numeric' })}`}</p>
                <p>{job.description}</p>
              </div>
            );
          })}
        </div>
        <div className="cvSection">
          <h2>Projects</h2>
          {projectInfo.map((project) => {
            return (
              <div>
                <div>
                  {project.name}
                </div>
                <p>{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{marginBottom: "30px"}}>
        <Button variant="success" onClick={handleDownloadPdf}>
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default Review;
