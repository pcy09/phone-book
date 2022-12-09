import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./ContactItem.module.css";

export default function ContactItem({ item }) {
	return (
		<div className={style.box}>
			<Row>
				<Col xs="auto">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpNJCjtY1J3Su3TyyvLE04vdToQBetP5YPsrLVMELHRZjdL-kgWrXaah-pabnQNayIHk&usqp=CAU"
						alt=""
					/>
				</Col>
				<Col xs className={style.text}>
					<h5>{item.name}</h5>
					<p>{item.phoneNumber}</p>
				</Col>
			</Row>
		</div>
	);
}
