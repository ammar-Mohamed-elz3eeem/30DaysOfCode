

const openDatabase = () => {
	if (!window.indexedDB) {
		return false;
	}

	var request = window.indexedDB.open("gih-reservations", 1);

	if (request.readyState == "done") {
		console.log(request.result);
	}

	request.onerror = event => console.log(`Database Error: ${event.target.error}`);

	request.onupgradeneeded = event => {
		const db = event.target.result;
		if (!db.objectStoreNames.contains("reservations")) {
			db.createObjectStore("reservations", {keyPath: "id"});
		}
	};

	return request;
};

const openObjectStore = (storeName, successCallback, transactionMode) => {
	let db = openDatabase();
	if (!db) return false;
	db.onsuccess = event => {
		let db = event.target.result;
		let objectStoreTrans = db.transaction(storeName, transactionMode);
		let objectStore = objectStoreTrans.objectStore(storeName);
		successCallback(objectStore);
	};
	return true;
};

const getReservations = (successCallback) => {
	let reservations = [];
	let db = openObjectStore("reservations", (objectStore) => {
		objectStore.openCursor().onsuccess = event => {
			let cursor = event.target.result;
			if (cursor) {
				reservations.push(cursor.value);
				cursor.continue();
			} else {
				if (reservations.length > 0) {
					successCallback(reservations);
				} else {
					$.getJSON("/reservations.json", (reservations) => {
						openObjectStore("reservations", (reservationsStore) => {
							reservations.forEach(reservation => {
								reservationsStore.add(reservation);
							});
							successCallback(reservations);
						}, "readwrite");
					});
				}
			}
		};
	});
	if (!db) {
		$.getJSON("/reservations.json", successCallback);
	}
};

const addToObjectStore = (storeName, object) => {
	openObjectStore(storeName, (store) => {
		store.add(object);
	}, "readwrite");
};

const updateInObjectStore = (storeName, id, object) => {
	openObjectStore(storeName, (store) => {
		store.openCursor().onsuccess = event => {
			let cursor = event.target.result;
			if (!cursor) return;
			if (cursor.value.id === id) {
				cursor.update(object);
				return;
			}
			cursor.continue();
		};
	}, "readwrite");
};