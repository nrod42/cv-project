import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Navi = () => {
  const tabs = [
    {name: 'Home', path: '/cv-project'}, 
    {name: 'contact', path: '/cv-project/contact-info'}, 
    {name: 'education', path: '/cv-project/education-history'}, 
    {name: 'work', path: '/cv-project/work-history'}, 
    {name: 'projects', path: '/cv-project/projects'}, 
    {name: 'skills', path: '/cv-project/skills'}, 
    {name: 'review', path: '/cv-project/review'},
  ] 
  return (
    <Nav variant="pills" defaultActiveKey="home">
      {tabs.map((tab) => {
        return (
        <Nav.Item>
          <Nav.Link as={Link} to={tab.path} eventKey={tab.name} className="text-white">
            {`${tab.name[0].toUpperCase()}${tab.name.slice(1)}`}
          </Nav.Link>
        </Nav.Item>
        )
      })}
    </Nav>
  );
};

export default Navi;
