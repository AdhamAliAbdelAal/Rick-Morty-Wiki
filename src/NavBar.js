import {Link,NavLink} from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link className="navbar-brand ubuntu fs-3" to="/">Rick & Morty <span className="text-primary">Wiki</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Characters</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Episodes">Episodes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Locations">Locations</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;