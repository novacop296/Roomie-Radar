import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, ProgressBar, Modal, Image } from 'react-bootstrap';

const ProfileForm = () => {
    const [profile, setProfile] = useState({
        name: "Anshul",
        email: "anshul123@gmail.com",
        aboutYou: 'No description',
        habits: ["likes to sleep"],
        traits: ["always sleeps"],
        schedule: ["always home"],
        profilePic: "/anshul.jpg" // Placeholder Profile Image
    });

    const [profileStrength, setProfileStrength] = useState(10);
    const [showHelp, setShowHelp] = useState(false);
    const [showProfile, setShowProfile] = useState(false); // State for profile modal

    const habitsList = ['Smoking', 'Drinking', 'Pets', '420', 'Night owl'];
    const traitsList = ['Introvert', 'Extrovert', 'Neat', 'Messy', 'Early bird'];
    const scheduleList = ['Night classes', 'Online classes', 'Early classes', 'Weekend classes', 'Full-time student'];

    const toggleSelection = (category, value) => {
        setProfile((prev) => ({
            ...prev,
            [category]: prev[category].includes(value)
                ? prev[category].filter((item) => item !== value)
                : [...prev[category], value]
        }));
    };

    // Calculate profile strength dynamically
    useEffect(() => {
        let strength = 0;
        if (profile.aboutYou.trim() !== '') strength += 30;
        strength += (profile.habits.length / habitsList.length) * 20;
        strength += (profile.traits.length / traitsList.length) * 20;
        strength += (profile.schedule.length / scheduleList.length) * 30;

        setProfileStrength(Math.round(strength));
    }, [profile]);

    return (
        <Container className="mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Let's get to know you</h2>
                <div className="d-flex align-items-center">
                    <Button variant="outline-secondary" onClick={() => setShowHelp(true)} className="me-3">Help</Button>
                    <Image 
                        src={profile.profilePic} 
                        roundedCircle 
                        style={{ width: 40, height: 40, cursor: 'pointer' }} 
                        onClick={() => setShowProfile(true)} 
                    />
                </div>
            </div>
            
            <p>Profile Strength: {profileStrength}%</p>
            <ProgressBar now={profileStrength} label={'getting to know you'} />

            <hr />

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>About You</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter a short bio"
                        value={profile.aboutYou}
                        onChange={(e) => setProfile({ ...profile, aboutYou: e.target.value })}
                    />
                </Form.Group>

                <h5>Habits</h5>
                <Row className="mb-3">
                    {habitsList.map((habit, index) => (
                        <Col key={index} xs="auto">
                            <Button
                                variant={profile.habits.includes(habit) ? 'primary' : 'outline-secondary'}
                                onClick={() => toggleSelection('habits', habit)}
                            >
                                {habit}
                            </Button>
                        </Col>
                    ))}
                </Row>

                <h5>Personality Traits</h5>
                <Row className="mb-3">
                    {traitsList.map((trait, index) => (
                        <Col key={index} xs="auto">
                            <Button
                                variant={profile.traits.includes(trait) ? 'primary' : 'outline-secondary'}
                                onClick={() => toggleSelection('traits', trait)}
                            >
                                {trait}
                            </Button>
                        </Col>
                    ))}
                </Row>

                <h5>Academic Schedule</h5>
                <Row className="mb-3">
                    {scheduleList.map((schedule, index) => (
                        <Col key={index} xs="auto">
                            <Button
                                variant={profile.schedule.includes(schedule) ? 'primary' : 'outline-secondary'}
                                onClick={() => toggleSelection('schedule', schedule)}
                            >
                                {schedule}
                            </Button>
                        </Col>
                    ))}
                </Row>

                <Button variant="primary" className="w-100"  onClick={() => alert("profile is updated")} >Next</Button>
            </Form>

            {/* Help Modal */}
            <Modal show={showHelp} onHide={() => setShowHelp(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Help</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>About You:</strong> Enter a short description of yourself.</p>
                    <p><strong>Habits:</strong> Select any relevant habits.</p>
                    <p><strong>Personality Traits:</strong> Choose traits that describe you best.</p>
                    <p><strong>Academic Schedule:</strong> Select your study schedule.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowHelp(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

            {/* Profile Modal */}
            <Modal show={showProfile} onHide={() => setShowProfile(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>User Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <Image src={profile.profilePic} roundedCircle style={{ width: 80, height: 80 }} />
                    <h4 className="mt-3">{profile.name}</h4>
                    <p>{profile.email}</p>
                    <p><strong>Bio:</strong> {profile.aboutYou || "Not provided"}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowProfile(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ProfileForm;