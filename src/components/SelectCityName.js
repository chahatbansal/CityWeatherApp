import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import {connect} from 'react-redux';
import { fetchTemperature } from "../redux/actions";

const SelectCity = (props) => {
	const [show, setShow] = useState(false);
	const [city, setCity] = useState('');

    const onSubmit=()=>{
        props.fetchTemperature(city);
        setShow(false);
        setCity('');
    }
	return (
		<>
			<Button variant="primary" onClick={() => setShow(true)}>
				Search City
			</Button>
			<Modal
				show={show}
				onHide={() => {
					console.log("Pressed");
					setShow(false);
				}}
				aria-labelledby="contained-modal-title-vcenter"
				centered
				autoFocus={false}>
				<Modal.Header >
					<Modal.Title>Enter the City Name</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input
						type="search"
						placeholder="Type your city"
						value={city}
						onChange={text => setCity(text.target.value)}
						autoFocus={true}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={onSubmit}>
						Search
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default connect(null,{fetchTemperature})(SelectCity);
