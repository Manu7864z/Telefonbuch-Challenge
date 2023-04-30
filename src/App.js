import data from "./phone-data.json";
import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [phoneData, setPhoneData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const sortedData = phoneData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredData = data.filter(
      (phone) =>
        phone.name.toLowerCase().includes(query) || phone.phone.includes(query)
    );
    setPhoneData(filteredData);
    setSearchQuery(query);
    setSearchValue(e.target.value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSearchValue("");
    setPhoneData(data);
    setSearchQuery("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="heading">Phonebook</h1>
        <input
          type="text"
          id="Search-bar"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => handleSearch(e)}
        />
        <Button variant="contained" onClick={(e) => handleReset(e)}>
          Reset
        </Button>
      </header>
      <div className="texts">
        {searchQuery && (
          <p id="Search-text">Search results for "{searchQuery}"</p>
        )}
        {sortedData.length === 0 && <p id="No-Results">No results found</p>}
      </div>

      <section className="Card-Container">
        {sortedData.map((phone) => (
          <div key={phone.phone} className="Cards">
            <p>Name: {phone.name}</p>

            <a href="" id="phone-number">
              Phone: {""}
              {phone.phone}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
