import React from 'react'
import { Button, Card, Col } from "react-bootstrap"

const University = ({ university }) => {
    return (

        <tr>
            <td>{university.country}</td>
            <td>{university.name}</td>
            <td>{university.domains}</td>
            <td>{university.web_pages}</td>
            <td>
                <a href={university.web_pages[0]} target="blank">
                    Ir a la pagina
                </a>
            </td>
        </tr>


    )
}

export default University
