function Navbar() {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
                aria-label="Main navigation"
                role="navigation"
                onClick={() => {
                    console.log("Navbar clicked");
                }}
            >
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}