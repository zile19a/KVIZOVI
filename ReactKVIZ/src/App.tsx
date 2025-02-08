import React from "react";
import DomManipulation from "./DomManipulation";

const App: React.FC = () => {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>React TypeScript App</h1>
            
            {/* Task 1: Fetch API and Display Data in Table */}
            <h2>Team List</h2>
            
            <hr style={{ margin: "20px 0" }} />
            
            {/* Task 2: DOM Manipulation */}
            <h2>DOM Manipulation</h2>
            <DomManipulation />
        </div>
    );
};

export default App;
