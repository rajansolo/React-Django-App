import React, { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/apidata/") // Adjust URL if necessary
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Fetched Data</h1>
      <table
        style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Key</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.key}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {item.key}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchData;
