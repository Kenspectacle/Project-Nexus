import React, { useState, useEffect } from "react";
import ActionBar from "./ActionBar";

function HistoryTable() {
  const [historyEntries, setHistoryEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/HistoryEntry")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
        setHistoryEntries(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <>
      <h4>History Table</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Expression</th>
            <th scope="col">Note</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {historyEntries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.expression}</td>
              <td>{entry.note}</td>
              <td><ActionBar objectId={entry.id}></ActionBar></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default HistoryTable;
