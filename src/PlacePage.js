import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Navbar, Nav, Button, Image, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

const PlacePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('off-campus'); // Default to Off-campus
  const [expandedPlace, setExpandedPlace] = useState(null);
  const [bookedPlaces, setBookedPlaces] = useState(() => {
    const storedBookings = sessionStorage.getItem('bookedPlaces');
    return storedBookings ? JSON.parse(storedBookings) : {};
  });

  useEffect(() => {
    sessionStorage.setItem('bookedPlaces', JSON.stringify(bookedPlaces));
  }, [bookedPlaces]);

  const onCampusPlaces = [
    { id: 'campus1', name: 'NRI Hostel', img: '/pg4.jpg', distance: 'Eastside campus', price: '34000', people: '2', address: 'Dorm A, Campus', facilities: 'WiFi, Mess, Security, laundry' },
    { id: 'campus2', name: 'Indian Hostel', img: 'pg5.jpg', distance: 'Northside campus', price: '51000', people: '3', address: 'Dorm B, Campus', facilities: 'WiFi, Gym, Laundry, Mess, Security' }
  ];

  const offCampusPlaces = [
    { id: 'offcampus1', name: 'Anagha PG', img: '/pg1.webp', distance: '15 min walk to campus', price: 'RS.27000', people: '3', address: '2ND CROSS STREET', facilities: 'WiFi, Mess, Laundry' },
    { id: 'offcampus2', name: 'VS Boys PG', img: '/pg2.avif', distance: '10 min walk to campus', price: 'RS.16000', people: '2', address: 'KUMARSWAMI LAYOUT', facilities: 'WiFi, Security, Parking, Mess' },
    { id: 'offcampus3', name: 'Shetty PG', img: 'pg3.jpg', distance: '20 min walk to campus', price: 'RS.24000', people: '4', address: 'JHBCS LAYOUT', facilities: 'wifi, laundary' }
  ];

  const places = selectedCategory === 'on-campus' ? onCampusPlaces : offCampusPlaces;

  const handleBooking = (id) => {
    setBookedPlaces((prev) => ({ ...prev, [id]: true }));
    alert('The room has been reserved for 3 days. Visit between the time period and confirm the room in person by making the payment.');
  };

  return (
    <>
      {/* Top Navigation */}
      <Navbar bg="light" expand="lg" className="shadow-sm px-3">
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
          <Nav.Link as={Link} to="/requests">Requests</Nav.Link>
          <Nav.Link as={Link} to="/messages">Messages</Nav.Link>
          <Nav.Link as={Link} to="/settings"><i className="bi bi-gear"></i></Nav.Link>
          <Nav.Link as={Link} to="/notifications"><i className="bi bi-bell"></i></Nav.Link>
          <Nav.Link as={Link} to="/profile"><i className="bi bi-person-circle"></i></Nav.Link>
        </Nav>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={3} className="sidebar-custom vh-100 p-3 shadow-sm">
            <ListGroup variant="flush">
              {[
                { href: '/', icon: 'bi-house-door', text: 'Home' },
                { href: '/calendar', icon: 'bi-calendar', text: 'Calendar' },
                { href: '/chat', icon: 'bi-chat-left-text', text: 'Chat' },
                { href: '/agreement', icon: 'bi-file-earmark-text', text: 'Agreement' },
                { href: '/find-roommate', icon: 'bi-person-plus', text: 'Find New Roommate' },
                { href: '/find-place', icon: 'bi-geo-alt', text: 'Find New Place' },
              ].map((item) => (
                <ListGroup.Item
                  key={item.href}
                  action
                  as={Link}
                  to={item.href}
                  className={`d-flex align-items-center sidebar-item`}
                  style={{ border: 'none' }}
                >
                  <i className={`bi ${item.icon} me-2`}></i> {item.text}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Main Content */}
          <Col md={9} className="p-4">
            <h3>Find a Place</h3>

            <ToggleButtonGroup type="radio" name="options" value={selectedCategory} onChange={setSelectedCategory} className="mb-3">
              <ToggleButton id="on-campus" value="on-campus" variant="outline-primary">On-campus</ToggleButton>
              <ToggleButton id="off-campus" value="off-campus" variant="outline-primary">Off-campus</ToggleButton>
            </ToggleButtonGroup>

            <ListGroup>
              {places.map((place) => (
                <ListGroup.Item key={place.id} className="d-flex align-items-center justify-content-between" style={{ border: 'none' }}>
                  <div className="d-flex align-items-center">
                    <Image src={place.img} roundedCircle width={50} height={50} className="me-3" />
                    <div>
                      <strong>{place.name}</strong>
                      <p className="text-muted mb-0">{place.distance}</p>
                      <Button variant="link" className="d-block p-0 mt-1" onClick={() => setExpandedPlace(expandedPlace === place.id ? null : place.id)}>
                        {expandedPlace === place.id ? 'Hide' : 'Read more'}
                      </Button>
                      {expandedPlace === place.id && (
                        <div className="mt-2">
                          <p><strong>No. of people in a room:</strong> {place.people}</p>
                          <p><strong>Address:</strong> {place.address}</p>
                          <p><strong>Facilities:</strong> {place.facilities}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <Button 
                      variant="success" 
                      className="mb-1" 
                      onClick={() => handleBooking(place.id)} 
                      disabled={bookedPlaces[place.id]}
                    >
                      {bookedPlaces[place.id] ? 'Booked' : 'Book'}
                    </Button>
                    <strong>{place.price}</strong>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlacePage;
