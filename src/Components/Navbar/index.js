import './index.css'

const Header = () => {
    return (
        <nav className="nav_bg">
            <h1 className="nav-heading">IndigoLearn</h1>
            <ul className = "nav-list">
                <li className="list-items">Why choose us?</li>
                <li className="list-items">Eligibility</li>
                <li className="list-items">learn In ACCA</li>
                <li className="list-items">Placement Assistance</li>
            </ul>
            <button type="button" className="login-button">
                Login/Register
            </button>
        </nav>
    );
}
export default Header