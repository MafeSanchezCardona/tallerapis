import React from 'react'
import { Table } from 'react-bootstrap'
import University from './University'

const Universities = ({ universities }) => {
    return (
        <Table striped bordered hover className="mt-3">
            <thead>
                <tr>
                    <th>País</th>
                    <th>Nombre</th>
                    <th>Dominios</th>
                    <th>Paginas</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {universities.map((university, index) => (
                    <University key={index} university={university} />
                ))}
            </tbody>
        </Table>

    )
}

export default Universities
