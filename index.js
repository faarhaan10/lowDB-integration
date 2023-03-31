import { postCollection, userCollection, save } from "./db.mjs";
import express from "express";
const app = express();
app.use(express.json());

async function run() {
  try {
    app.get("/users", async (req, res) => {
      const result = await userCollection;
      res.send(result);
    });
    app.get("/user/:id", async (req, res) => {
      const users = await userCollection;
      const result = users.find((user) => user.id == req.params.id);
      res.send(result);
    });
    app.post("/users", async (req, res) => {
      const id = await postCollection.length;
      const result = await postCollection.push({ id, ...req.body });
      save();
      if (result) {
        res.send({ success: true, insertedId: result });
      } else {
        res.send({ success: false, insertedId: null });
      }
    });
  } finally {
  }
}
run();

app.get("/", (req, res) => {
  res.send("server running");
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
