import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    place: "",
    name: "",
    age: "",
  });

  const [rows, setRows] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    if (!formData.place || !formData.name || !formData.age) return;

    setRows([...rows, formData]);
    setFormData({ place: "", name: "", age: "" });
  };

  const handleClear = () => {
    setFormData({ place: "", name: "", age: "" });
  };

  const handleRemove = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Add People to Table</h1>
        <p className="subtitle">Enter Place, Name, and Age, then click Add.</p>

        <div className="inputs">
          <input
            type="text"
            name="place"
            placeholder="e.g. Mumbai"
            value={formData.place}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="e.g. Akash"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="e.g. 24"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="buttons">
          <button className="add" onClick={handleAdd}>
            Add
          </button>
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
        </div>

        {rows.length === 0 ? (
          <div className="empty">No entries yet. Add your first row!</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Place</th>
                <th>Name</th>
                <th>Age</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.place}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>
                    <button
                      className="remove"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
