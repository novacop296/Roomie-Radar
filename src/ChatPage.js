import React, { useState } from "react";
import { Container, Row, Col, ListGroup, InputGroup, FormControl, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState("Anshul");
  const [chatData, setChatData] = useState({
    Anshul: [
      { sender: "You", text: "Hey Anshul! How's your day?" },
      { sender: "Anshul", text: "Pretty good! Just finished some work." },
    ],
    Samarjeet: [
      { sender: "You", text: "Hey Samarjeet! What's up?" },
      { sender: "Samarjeet", text: "Not much, just watching a movie." },
    ],
  });

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      const updatedMessages = [...chatData[selectedChat], { sender: "You", text: newMessage }];
      setChatData((prevChatData) => ({ ...prevChatData, [selectedChat]: updatedMessages }));
      setNewMessage("");
    }
  };

  const switchChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <Container fluid className="vh-100 d-flex">
      {/* Chat List Sidebar */}
      <Col md={3} className="border-end p-3 bg-light">
        <h5>Chats</h5>
        <ListGroup>
          {Object.keys(chatData).map((chat) => (
            <ListGroup.Item
              key={chat}
              action
              onClick={() => switchChat(chat)}
              active={selectedChat === chat}
              className="d-flex align-items-center rounded-lg"
              style={{ borderRadius: "10px", marginBottom: "5px" }}
            >
              <Image 
                src={`/${chat.toLowerCase()}.jpg`} 
                roundedCircle 
                width={40} 
                height={40} 
                className="me-2" 
                style={{ objectFit: "cover", aspectRatio: "1/1" }} 
              />
              {chat}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>

      {/* Chat Window */}
      <Col md={9} className="d-flex flex-column vh-100">
        {/* Header */}
        <Row className="py-2 px-3 d-flex align-items-center" style={{ backgroundColor: "#add8e6", height: "60px" }}>
          <Image 
  src={`/${selectedChat.toLowerCase()}.jpg`} 
  roundedCircle 
  width={40} 
  height={40} 
  className="me-2" 
  style={{ objectFit: "cover", width: "65px", height: "40px" }} 
/>
          <Col><strong>{selectedChat}</strong></Col>
        </Row>

        {/* Chat Messages */}
        <Row className="flex-grow-1 overflow-auto p-3" style={{ backgroundColor: "#f0f0f0" }}>
          <Col>
            <ListGroup>
              {chatData[selectedChat].map((msg, index) => (
                <ListGroup.Item
                  key={index}
                  className={`d-flex ${msg.sender === "You" ? "justify-content-end" : "justify-content-start"}`}
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <div
                    className={`p-2 rounded-lg ${msg.sender === "You" ? "bg-primary text-white" : "bg-light"}`}
                    style={{ maxWidth: "75%", borderRadius: "10px" }}
                  >
                    <small><strong>{msg.sender}</strong></small>
                    <p className="mb-0">{msg.text}</p>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>

        {/* Chat Input */}
        <Row className="p-2 border-top bg-white">
          <Col>
            <InputGroup>
              <FormControl
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button variant="primary" onClick={handleSend}>Send</Button>
            </InputGroup>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default ChatPage;
