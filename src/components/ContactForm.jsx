import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const dispatch = useDispatch();

	const addContact = (e) => {
		e.preventDefault();
		dispatch({
			//던져줄 액션을 dispatch를 이용해 만들어준다
			type: "ADD_CONTACT",
			payload: { name, phoneNumber },
		});
		setName("");
		setPhoneNumber("");
	};
	return (
		<Form onSubmit={addContact}>
			<Form.Group className="mb-3" controlId="formName">
				<Form.Label>이름을 입력해 주세요</Form.Label>
				<Form.Control
					type="text"
					placeholder="Name"
					onChange={(e) => {
						setName(e.target.value);
					}}
					value={name}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formContact">
				<Form.Label>전화번호를 입력해 주세요</Form.Label>
				<Form.Control
					type="number"
					placeholder="Number"
					onChange={(e) => {
						setPhoneNumber(e.target.value);
					}}
					value={phoneNumber}
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				추가
			</Button>
		</Form>
	);
}
