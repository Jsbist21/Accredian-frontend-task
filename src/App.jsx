import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import ReferralForm from "./components/ReferralForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Hero onReferNowClick={handleReferNowClick} />
      <ReferralForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
