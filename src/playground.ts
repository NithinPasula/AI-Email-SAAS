import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test@gmail.com",
    firstName: "Pasula",
    lastName: "Nithin",
  },
});

console.log("done");
