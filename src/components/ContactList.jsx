import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

export default function ContactList() {
	const { contactList, keyword } = useSelector((state) => state);
	const [filterdList, setFilterdList] = useState([]);
	useEffect(() => {
		if (keyword !== "") {
			//키워드가(서치에서) 입력이 되었을 때
			let book = contactList.filter((item) => item.name.includes(keyword));
			setFilterdList(book);
		} else {
			//입력값이 없을때
			setFilterdList(contactList);
		}
	}, [keyword, contactList]);
	return (
		<div>
			<SearchBox />
			<div>
				현재 {filterdList.length}명 (총 {contactList.length}명)
				{filterdList.map((item) => (
					<ContactItem item={item} />
				))}
			</div>
		</div>
	);
}
