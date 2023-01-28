import React from "react";

function Header({ children }) {
    return (
        <>
            <div style={{ width: "100%", height: "10vh", background: "blue" }}>
                234567890-0986
            </div>
            <div>{children}</div>
        </>
    );
}

export default Header;
