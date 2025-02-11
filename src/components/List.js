"use client";

import { useState } from "react";
import "./styles.css";

function ShowList() {
  const items = [
    { id: 1, name: "Active item 1", active: true },
    { id: 2, name: "Inactive item 1", active: false },
    { id: 3, name: "Active item 2", active: true },
    { id: 4, name: "Inactive item 2", active: false },
  ];

  const [filter, setFilter] = useState("active");

  const filteredItems = items.filter((item) =>
    filter === "active" ? item.active : !item.active
  );

  return (
    <div>
      <br />
      <button className="button" onClick={() => setFilter("active")}>Show Active</button>
      <button className="button" onClick={() => setFilter("inactive")}>Show Inactive</button>
      <br />
      <br />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
