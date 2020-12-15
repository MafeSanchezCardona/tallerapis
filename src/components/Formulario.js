import React from "react";
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

const Formulario = ({ setCountry, setName, handlerSearch }) => {

    const opciones = [
        { value: "Colombia", label: "Colombia" },
        { value: "United States", label: "Estados Unidos" },
        { value: "Turkey", label: "Turquia" },
        { value: "Canada", label: "Canada" },
        { value: "Germany", label: "Alemania" },
        { value: "France", label: "Francia" }
    ];

    const handlerSubmit = (e) => {
        e.preventDefault();
        handlerSearch();
    }

    const handlerInputName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handlerCountry = (e) => {
        e.preventDefault();
        setCountry(e.target.value);
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handlerSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre de Universidad</Form.Label>
                        <Form.Control required type="text" placeholder="Ingrese un nombre" name="name"
                            onChange={handlerInputName} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Seleccione un País</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={handlerCountry}
                        >
                            {opciones.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}

                        </Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary">Buscar</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Formulario
