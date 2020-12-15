import React from 'react'
import { Form, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand className="font-weight-bold" href="#home">
                <img
                    alt=""
                    src="https://thumbs.dreamstime.com/b/s%C3%ADmbolo-del-edificio-de-la-universidad-85127100.jpg"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />
                <Form.Label className="text-white h3 px-3">Universidades</Form.Label>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header
