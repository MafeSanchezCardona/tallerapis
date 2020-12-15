import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Universities from "./components/Universities";
import { BASE_URL, API_KEY } from './utils/api.js'

function App() {

  const [country, setCountry] = useState("Colombia");
  const [name, setName] = useState("");
  const [universities, setUniversities] = useState([]);

  const handlerSearch = () => {
    const nameSearch = name !== "" ? `&name=${name}` : "";
    const searchUniversities = async () => {
      const url = `${BASE_URL}?country=${country}${nameSearch}`;
      const response = await fetch(url);
      const universitiesJson = await response.json();
      console.log(universitiesJson);
      setUniversities(universitiesJson);

    };
    searchUniversities();
  }

  useEffect(() => {
    const searchUniversities = async () => {
      const url = `${BASE_URL}?name=${name}&country=${country}`;
      const response = await fetch(url);
      const universitiesJson = await response.json();
      console.log(universitiesJson);
      setUniversities(universitiesJson);

    };
    searchUniversities();
  }, [name]);

  return (
    <>
      <Container>
        <Header />
        <Row>
          <Col>
            <Formulario setCountry={setCountry} setName={setName} handlerSearch={handlerSearch} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Universities universities={universities} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
