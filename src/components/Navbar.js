"use client";

import { useState } from "react";
import "./styles.css";
import Welcome from "../components/Home";
import Counter from "../components/Counter";
import Notes from "../components/Form";
import ShowList from "../components/List";

function Navbar() {
    const [selectedComponent, setSelectedComponent] = useState("welcome");

    const handleSelection = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><a href="#" onClick={() => handleSelection("welcome")}>Home</a></li>
                    <li><a href="#" onClick={() => handleSelection("counter")}>Counter</a></li>
                    <li><a href="#" onClick={() => handleSelection("notes")}>Notes</a></li>
                    <li><a href="#" onClick={() => handleSelection("filteredList")}>Filtered List</a></li>
                </ul>
            </nav>

            <div className="component-display">
                {selectedComponent === "welcome" && <Welcome />}
                {selectedComponent === "counter" && <Counter />}
                {selectedComponent === "notes" && <Notes />}
                {selectedComponent === "filteredList" && <ShowList />}
            </div>
        </div>
    );
}

export default Navbar;


