let initialState = {
	//초기값으로 contactList이름의 빈 배열
	contactList: [],
	keyword: "",
};

function reducer(state = initialState, action) {
	let { type, payload } = action; //action재분해 이용 (deconstructing)
	switch (type) {
		case "ADD_CONTACT":
			state.contactList.push({
				name: payload.name,
				phoneNumber: payload.phoneNumber,
			});
			break;
		case "SEARCH_BY_NAME":
			state.keyword = payload.keyword;
			break;
	}
	return { ...state };
}

export default reducer;
