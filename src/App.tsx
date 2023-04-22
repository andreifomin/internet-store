import {Container, Nav} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Store} from "./pages/Store";
import {Contacts} from "./pages/Contacts";
import {Navbar} from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Container className="me-3">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/store" element={<Store />}/>
                    <Route path="/contacts" element={<Contacts />}/>
                </Routes>
            </Container>
        </>
    );
}

export default App;
