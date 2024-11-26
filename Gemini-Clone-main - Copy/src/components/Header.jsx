import React from "react";
import { useTheme } from "./ThemeContext";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <h1>Gemini</h1>
            <div style={{ position: "relative" }}>
                {/* Profile Photo */}
                <img
                    src="profile.jpg"
                    alt="Profile"
                    className="profile-photo"
                    style={{ borderRadius: "50%", width: "40px", height: "40px" }}
                />
                {/* Theme Toggle Button */}
                <button
                    className={`toggle-button ${theme === "dark" ? "dark" : ""}`}
                    onClick={toggleTheme}
                >
                    {theme === "light" ? "🌞" : "🌜"}
                </button>
            </div>
        </header>
    );
};

export default Header;
