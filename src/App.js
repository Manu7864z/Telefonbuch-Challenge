import data from "./phone-data.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [phoneData, setPhoneData] = useState(data);

  const handleSearch = (e) => {
    const filteredData = data.filter(
      (phone) =>
        phone.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        phone.phone.includes(e.target.value)
    );
    setPhoneData(filteredData);
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e)}
      />
      <h2>Contacts</h2>

      <div className="contact-list">
        {phoneData.map((phone) => (
          <div className="contact-card">
            <p>{phone.name}</p>
            <a href="">{phone.phone}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
