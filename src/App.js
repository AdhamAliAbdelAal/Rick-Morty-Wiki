import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Locations from "./Locations";
import Episodes from "./Episodes";
import NavBar from "./NavBar";
import CardDetails from "./CardDetails";
const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Episodes" element={<Episodes />} />
                <Route path="/Locations" element={<Locations />} />
                <Route path="/character/:id" element={<CardDetails />} />
                <Route path="/episode/:id" element={<CardDetails />} />
                <Route path="/location/:id" element={<CardDetails />} />
            </Routes>
        </Router>
    );
}

export default App;