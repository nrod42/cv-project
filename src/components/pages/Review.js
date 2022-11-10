import React, { useContext } from "react";
import { SetListsContext } from "../../App";
import { Button } from "react-bootstrap";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Review = () => {
  const { contactInfo, educationInfo, workInfo } = useContext(SetListsContext);
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
      <div className="finalCV" ref={printRef}>
        {/* Contact Section */}
        <div className="cvContact">
          <h1>
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
                  {school.fromDate} - {school.toDate}
                </p>
              </div>
            );
          })}
        </div>
        <div className="cvSection">
          <h2>Experience</h2>
          {workInfo.map((job) => {
            return (
              <div>
                <div>
                  {job.company} | {job.role} | {job.city}, {job.addrState}
                </div>
                <p>
                  {job.fromDate} - {job.toDate}
                </p>
                <p>{job.description}</p>
              </div>
            );
          })}
        </div>
        <div className="cvSection">
          <h2>Projects</h2>
        </div>
      </div>
      <div>
        <Button variant="primary" onClick={handleDownloadPdf}>
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default Review;
