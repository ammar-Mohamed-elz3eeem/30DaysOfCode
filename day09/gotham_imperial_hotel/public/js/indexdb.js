// Initiliza database in indexDB
const db = window.indexedDB.open("my-db", 8);

// users to be inserted into database
const users = [
  {"passport_number": "6651", "first_name": "Tal", "last_name": "Ater"},
  {"passport_number": "7727", "first_name": "Archie", "last_name": "Stevens"},
  {"passport_number": "1542", "first_name": "Ammar", "last_name": "Massoud"},
  {"passport_number": "5120", "first_name": "Ahmed", "last_name": "Mohamed"},
];

const  exchangeRates = [
	{"exchange_from": "CAD", "exchange_to": "USD", "rate": 0.77},
	{"exchange_from": "JPY", "exchange_to": "USD", "rate": 0.009},
	{"exchange_from": "USD", "exchange_to": "CAD", "rate": 1.29},
	{"exchange_from": "CAD", "exchange_to": "JPY", "rate": 81.60},
];

// callback if we can't connect to database
db.onerror = (err) => {
  console.error(err);
};

// callback for successful connection on database
db.onsuccess = (event) => {
  /* get the IDBDatabase from event after opening database */
  var dbRes = event.target.result;
  
  // Initialize a transaction to monitor if there was a failure in statments that will be done on db
  const trans = dbRes.transaction("customers", "readwrite");

  // if transaction caugth an error it will print it to the console
  trans.onerror = (err) => {
	console.log(err);
  };

    const store = trans.objectStore("customers");
    users.forEach(user => {
      console.log(user);
      store.add(user);
    });

  const exchangeTrans = dbRes.transaction("exchange_rates", "readwrite");

	// if transaction caugth an error it will print it to the console
  exchangeTrans.onerror = (err) => {
    console.log(err);
  };

  // initialize store from the transaction ( same to getting database table in MySQL or PostgresSQL )
  const exchange = exchangeTrans.objectStore("exchange_rates");

//   Iterate over whole object using cursor 
//   // initialize a cursor (it's like an iterator same as the one on NoSQL databases)
//   const cursor = store.openCursor();

//   const table = document.createElement("table");

//   // callback to determine if cursor initialized successfully
//   cursor.onsuccess = (event) => {
// 	// getting the cursor from the event object
// 	const cursor = event.target.result;

// 	// if cursor == NULL then we will terminate this function
// 	if (!cursor) return;
// 	const tbrow = document.createElement("tr");
// 	// iterate over all keys of the value object (value object is the result returned from the cursor)
// 	Object.keys(cursor.value).map(key => {
//       const tbcell = document.createElement("td");
//       // save the value from the cusror to the tbcell which is a single cell on table
//       tbcell.textContent = cursor.value[key];
//       tbrow.appendChild(tbcell);
//     });
//     table.appendChild(tbrow);
//     console.log(cursor);
//     cursor.continue();
// };
//   document.body.innerHTML = "";
//   document.body.appendChild(table);

  // const exchangeIndex = exchange.index("from_idx");
  // const exchangeCursor = exchangeIndex.openCursor(IDBKeyRange.lowerBound("C", false), "prev");
  // exchangeCursor.onsuccess = (event) => {
  //   let cursor = event.target.result;
	// if (!cursor) return;
  // const rate = cursor.value;
  // console.log(`${rate.exchange_from} to ${rate.exchange_to}: ${rate.rate}`);
	// cursor.continue();
  // };
  const updatedRate = {"exchange_from": "CAD", "exchange_to": "ILS", "rate": 1.2};
  const req = exchange.put(updatedRate, 2);
  req.onsuccess = () => console.log("UPDATED!!!");
};

console.log("HERE ON INDEXED DB");

// callback to identify every time we change the version number of database
db.onupgradeneeded = (event) => {
  var dbRes = event.target.result;
  if (!dbRes.objectStoreNames.contains("customers")) {
    dbRes.createObjectStore("customers", {keyPath: "passport_number"});
    
  }
  if (!dbRes.objectStoreNames.contains("exchange_rates")) {
    const exchangeStore = dbRes.createObjectStore("exchange_rates", {autoIncrement: true});

	exchangeStore.createIndex("from_idx", "exchange_from", { unique: false } );
	exchangeStore.createIndex("to_idx", "exchange_to", { unique: false } );

	exchangeStore.transaction.oncomplete = (event) => {
      const exchangeObjectStoreTrans = dbRes.transaction("exchange_rates", "readwrite");
      const exchangeObjectStore = exchangeObjectStoreTrans.objectStore("exchange_rates");
      exchangeRates.forEach(exchangeRate => {
        exchangeObjectStore.add(exchangeRate);
      });
    };
  }
};