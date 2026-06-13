import { useState } from "react";
import "./App.css"

function App() {
  const [query, setQuery] = useState("");  // For input value
  const [data, setData] = useState(null);  // For fetched API data

  const fetchData = async () => {
    try {
      const response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_33d43cde194f4efcab2f18b56a747db2&q=${query}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={fetchData}>Search</button>

      <div>
        {data ? (
          <pre>{data.results[0].title}</pre> // Render fetched data
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
}

export default App;
