import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import style from "./SearchBox.module.css";

export default function SearchBox() {
	const [keyword, setKeyword] = useState();
	let dispatch = useDispatch();

	const searchByName = (e) => {
		e.preventDefault();
		dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
	};

	return (
		<form className={style.form} onSubmit={searchByName}>
			<Row>
				<Col xs>
					<Form.Control
						onChange={(e) => {
							setKeyword(e.target.value);
						}}
						value={keyword}
						type="text"
						placeholder="이름을 입력해 주세요"
					/>
				</Col>
				<Col xs="auto">
					<Button variant="primary" type="submit">
						찾기
					</Button>
				</Col>
			</Row>
		</form>
	);
}
