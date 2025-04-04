import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ChatPage from "./ChatPage"; // Import ChatPage
import RoomieAgreementForm from "./RoomieAgreementForm";
import PlacePage from "./PlacePage";
import ProfileForm from "./ProfileForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatPage />} /> {/* Add ChatPage route */}
      <Route path="/agreement" element={<RoomieAgreementForm />} />
      <Route path="/place" element={<PlacePage />} />
      <Route path="/profile" element={<ProfileForm />} />
    </Routes>
  );
};

export default App;

