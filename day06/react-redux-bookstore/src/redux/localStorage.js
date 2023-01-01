export const loadStorage = (state) => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			return undefined
		}
		return JSON.parse(serializedState);
	} catch (error) {
		console.error(error);
	}
}

export const saveState = (state) => {
	try {
		const serializedState = localStorage.setItem("state", JSON.stringify(state));
		return serializedState;
	} catch (error) {
		console.error(error)
	}
}