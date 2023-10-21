// console.log("Welcome to Hell!!!")

const contacts = require("./db");

console.log(contacts);

// // index.js
// // const argv = require('yargs').argv;

// // TODO: рефакторити
// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//       case 'list':
//           const allContacts = await contacts.listContacts();
//           return console.log(allContacts);
      
      

//     // case 'get':
//     //   // ... id
//     //   break;

//     // case 'add':
//     //   // ... name email phone
//     //   break;

//     // case 'remove':
//     //   // ... id
//     //   break;

//     // default:
//     //   console.warn('\x1B[31m Unknown action type!');
//   }
// }

// invokeAction({ action: "list" });
// // invokeAction(argv);