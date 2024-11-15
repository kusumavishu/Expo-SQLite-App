import * as SQLite from "expo-sqlite";

// Open the database connection
const dbPromise = SQLite.openDatabaseAsync("databaseName");

// Create operation - Initializes the table and inserts sample data
export async function createEntries() {
  try {
    const db = await dbPromise;
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS UserList (
          id INTEGER PRIMARY KEY NOT NULL, 
          fullName TEXT NOT NULL, 
          email TEXT NOT NULL, 
          phoneNumber TEXT NOT NULL, 
          age INTEGER, 
          password TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS test (
          id INTEGER PRIMARY KEY NOT NULL, 
          value TEXT NOT NULL, 
          intValue INTEGER
        );
      `);
    console.log("Table created and sample entries added.");
  } catch (error) {
    console.error("Error creating entries: ", error);
  }
}

//Inserting into UserList
export async function insertUserValues({
  name,
  email,
  phoneNumber,
  age,
  password,
}) {
  const db = await dbPromise;
  const statement = await db.prepareAsync(
    "INSERT INTO UserList (fullName, email, phoneNumber, age, password) VALUES ($fullName, $email, $phoneNumber, $age, $password)"
  );

  try {
    let result = await statement.executeAsync({
      $fullName: name,
      $email: email,
      $phoneNumber: phoneNumber,
      $age: age,
      $password: password,
    });
    console.log(
      `User inserted with ID ${result.lastInsertRowId}, Changes: ${result.changes}`
    );
  } catch (error) {
    console.error("Error inserting user values:", error);
  } finally {
    await statement.finalizeAsync();
  }
}

// Read all row in userList
export async function readAllUserList() {
  try {
    const db = await dbPromise;
    const allRow = await db.getAllAsync("SELECT * FROM UserList");
    console.log(allRow);
    return allRow;
  } catch (error) {
    console.error("Error reading first entry: ", error);
  }
}

//validation for login
export async function validateLogin({ usermail, userpswd }) {
  try {
    const db = await dbPromise;
    const query = "SELECT * FROM UserList WHERE email = ? AND password = ?";
    const user = await db.getAllAsync(query, [usermail, userpswd]);
    if (user) {
      console.log("User authenticated:", user);
      // console.log(
      //   "user.email === usermail",
      //   user[0].email === usermail,
      //   user[0].email,
      //   usermail
      // );

      if (user[0].email === usermail && user[0].password === userpswd) {
        console.log("matched continue");
        return user;
      } else if (user[0].email !== usermail && user[0].password === userpswd) {
        console.log("email is invaild");
      } else if (user[0].email === usermail && user[0].password !== userpswd) {
        console.log("password is Invaild");
      } else {
        console.log("try again");
      }
    } else {
      console.log("Invalid email or password");
      return null;
    }
  } catch (error) {
    console.error("Error reading login entry: ", error);
  }
}

//Delete UserList
export async function deleteUserEntry(id) {
  try {
    const db = await dbPromise;
    await db.runAsync("DELETE FROM UserList WHERE id = $id", {
      $id: id,
    });
    console.log(`Deleted entry with id '${id}'.`);
  } catch (error) {
    console.error("Error deleting entry: ", error);
  }
}

//updating UserLists
export async function updateUserEntry({
  id,
  fullname,
  email,
  phoneNumber,
  age,
}) {
  try {
    const db = await dbPromise;
    await db.runAsync(
      "UPDATE UserList SET fullname = ?, email=?, phoneNumber=?,age=? WHERE id = ?",
      [fullname, email, phoneNumber, age, id]
    );
    console.log(`Updated entry with id '${id}'.`);
  } catch (error) {
    console.error("Error updating entry: ", error);
  }
}
//
// export async function updateUserEntry({
//   id,
//   fullname,
//   email,
//   phoneNumber,
//   age,
// }) {
//   try {
//     const db = await dbPromise;
//     await db.runAsync(
//       "UPDATE UserList SET fullname = ?, email=?, phoneNumber=?,age=? WHERE id = ?",
//       [fullname, email, phoneNumber, age, id]
//     );
//     console.log(`Updated entry with id '${id}'.`);
//   } catch (error) {
//     console.error("Error updating entry: ", error);
//   }
// }

// Read operation - Retrieves all rows from the table
export function readAllEntries() {
  dbPromise
    .then((db) => {
      return db.getAllAsync("SELECT * FROM test");
    })
    .then((allRows) => {
      allRows.forEach((row) => {
        console.log(row.id, row.value, row.intValue);
      });
    })
    .catch((error) => {
      console.error("Error reading entries: ", error);
    });
}

// Update operation - Updates a specific row's `intValue` by `value`
export function updateEntry(value, newIntValue) {
  dbPromise
    .then((db) => {
      return db.runAsync("UPDATE test SET intValue = ? WHERE value = ?", [
        newIntValue,
        value,
      ]);
    })
    .then(() => {
      console.log(
        `Updated entry with value '${value}' to intValue '${newIntValue}'.`
      );
    })
    .catch((error) => {
      console.error("Error updating entry: ", error);
    });
}

// Delete operation - Deletes a row by `value`
export function deleteEntry(value) {
  dbPromise
    .then((db) => {
      return db.runAsync("DELETE FROM test WHERE value = $value", {
        $value: value,
      });
    })
    .then(() => {
      console.log(`Deleted entry with value '${value}'.`);
    })
    .catch((error) => {
      console.error("Error deleting entry: ", error);
    });
}
