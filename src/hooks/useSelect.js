import React, { useState } from "react";
import { Form } from "react-bootstrap";

const useSelect = (stateInitial, options, label) => {
    const [state, setState] = useState(stateInitial);
    const selectCountry = () => (
        <>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                as="select"
                value={state}
                onChange={(e) => setState(e.target.value)}
            >
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}

            </Form.Control>
        </>
    );
    return [state, selectCountry];
};

export default useSelect;