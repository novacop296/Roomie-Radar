import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, Navbar, Nav, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

const HomePage = () => {
  const [activeItem, setActiveItem] = useState('#home');
  const [expandedProfile, setExpandedProfile] = useState(null);
  const [expandedPlace, setExpandedPlace] = useState(false);

  const roommates = [
    { name: 'Ben Dover', description: 'Works in IT, Loves traveling', img: '/wallpaper1.jpg' },
    { name: 'Anshul', description: 'Student, Enjoys gaming', img: '/peakpx (43).jpg' },
    { name: 'Shamarjeet', description: 'Freelancer, Loves coffee', img: '/peakpx.jpg' },
  ];

  const currentPlace = {
    name: 'vs boys PG',
    img: 'pgroom.webp',
    address: '2nd cross road, kumarswami layout',
    price: '27000/month (split between roommates)',
    features: 'WiFi, Laundry, Mess'
  };

  return (
    <>
      {/* Top Navigation */}
      <Navbar bg="light" expand="lg" className="shadow-sm px-3">
        <Navbar.Brand href="#home">Roomie Radar</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#explore" >Explore</Nav.Link>
          <Nav.Link href="#requests">Requests</Nav.Link>
          <Nav.Link href="#messages">Messages</Nav.Link>
          <Nav.Link href="#settings"><i className="bi bi-gear"></i></Nav.Link>
          <Nav.Link href="#notifications"><i className="bi bi-bell"></i></Nav.Link>
          <Nav.Link href="#profile"><i className="bi bi-person-circle"></i></Nav.Link>
        </Nav>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={3} className="sidebar-custom vh-100 p-3 shadow-sm">
          <ListGroup variant="flush">
  {[
    { to: "/", icon: "bi-house-door", text: "Home" },
    { to: "/calendar", icon: "bi-calendar", text: "Calendar" },
    { to: "/chat", icon: "bi-chat-left-text", text: "Chat" },
    { to: "/agreement", icon: "bi-file-earmark-text", text: "Agreement" },
    { to: "/find-roommate", icon: "bi-person-plus", text: "Find New Roommate" },
    { to: "/place", icon: "bi-geo-alt", text: "Find New Place" },
  ].map((item) => (
    <ListGroup.Item
      key={item.to}
      action
      as={Link} // ✅ Use React Router Link
      to={item.to} // ✅ Ensure it's navigating properly
      className={`d-flex align-items-center sidebar-item ${activeItem === item.to ? "active" : ""}`}
      onClick={() => setActiveItem(item.to)}
      style={{ border: "none" }}
    >
      <i className={`bi ${item.icon} me-2`}></i> {item.text}
    </ListGroup.Item>
  ))}
</ListGroup>
          </Col>

          {/* Main Content */}
          <Col md={9} className="p-4">
            <h3>Current Roommates</h3>
            <ListGroup>
              {roommates.map((roommate, index) => (
                <ListGroup.Item key={index} className="d-flex align-items-center" style={{ border: 'none' }}>
                  <Image src={roommate.img} roundedCircle width={50} height={50} className="me-3" />
                  <div>
                    <strong>{roommate.name}</strong>
                    <Button variant="link" className="d-block p-0 mt-1" onClick={() => setExpandedProfile(expandedProfile === index ? null : index)}>
                      {expandedProfile === index ? 'Hide' : 'Read more'}
                    </Button>
                    {expandedProfile === index && <p className="mt-2">{roommate.description}</p>}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <h3 className="mt-4">Current Place</h3>
            <ListGroup>
              <ListGroup.Item className="d-flex align-items-center" style={{ border: 'none' }}>
                <Image src={currentPlace.img} roundedCircle width={50} height={50} className="me-3" />
                <div>
                  <strong>{currentPlace.name}</strong>
                  <Button variant="link" className="d-block p-0 mt-1" onClick={() => setExpandedPlace(!expandedPlace)}>
                    {expandedPlace ? 'Hide' : 'Read more'}
                  </Button>
                  {expandedPlace && (
                    <div className="mt-2">
                      <p><strong>Address:</strong> {currentPlace.address}</p>
                      <p><strong>Price:</strong> {currentPlace.price}</p>
                      <p><strong>Features:</strong> {currentPlace.features}</p>
                    </div>
                  )}
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
