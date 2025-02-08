import React, { useState } from "react";

const DomManipulation: React.FC = () => {
    const [headerText, setHeaderText] = useState("Original Header");
    const [subtitle, setSubtitle] = useState<React.ReactNode | null>(null);
    const [menuItems, setMenuItems] = useState<string[]>([
        "Home", "Menu Item 1", "Menu Item 2", "Menu Item 3", "Menu Subitem 3.2", "Menu Item 4"
    ]);
    const [formData, setFormData] = useState<{ name: string; email: string }>({ name: "", email: "" });
    const [submittedData, setSubmittedData] = useState<string>("");

    const updateHeader = () => {
        setHeaderText("Updated Header!");
        setSubtitle(<h2><em>This is the subtitle</em></h2>); // ✅ CORRECT
    };

    const updateMenu = () => {
        setMenuItems((prev) => {
            const newMenu = [...prev];
            const index = newMenu.indexOf("Menu Subitem 3.2");
            if (index !== -1) newMenu.splice(index, 0, "Menu Subitem 3.1");
            return newMenu.filter((item) => item !== "Menu Item 4");
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmittedData(`Hi ${formData.name}. Your email is ${formData.email}.`);
    };

    return (
        <div>
            <h1>{headerText}</h1>
            {subtitle}
            <button onClick={updateHeader}>Update Header</button>
            
            <h3>Navigation</h3>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className={item === "Home" ? "active" : ""}>{item}</li>
                ))}
            </ul>
            <button onClick={updateMenu}>Update Menu</button>
            
            <p>
                <img src="images/01.png" alt="Read more" />
            </p>
            
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                </label>
                <br />
                <label>
                    Email: <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>

            {submittedData && <p id="result">{submittedData}</p>}
        </div>
    );
};

export default DomManipulation;
