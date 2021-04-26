let db;
const request = IndexedDB.open("budgetDB", 1);
// create a new db request for a "BudgetDB" database.

// Create an object store inside the onupgradeneeded method.
request.onupgradeneeded = ({ target }) => {
  const db = target.result;
  const budgetStore = db.createObjectStore("budgetStore", {
    keyPath: "listID",
    autoIncrement: true
  });
};

// On success console the result.
request.onsuccess = event => {
  const db = target.result;

  const objectStore = db.createObjectStore("budgetStore");
  objectStore.createIndex("timestamp", "timestamp");
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  console.log(event.target.error)
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(["budgetList"], "readwrite");
    const budgetStore = transaction.objectStore("budgetList");

    toDoListStore.add({ listID: "1", status: "complete" });
    toDoListStore.add({ listID: "2", status: "in-progress" });
    toDoListStore.add({ listID: "3", status: "complete" });
    toDoListStore.add({ listID: "4", status: "backlog" });
  }
  // access your pending object store
  // add record to your store with add method.
}

function checkDatabase() {
  // open a transaction on your pending db
  // access your pending object store
  // get all records from store and set to a variable

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          // access your pending object store
          // clear all items in your store
        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);
