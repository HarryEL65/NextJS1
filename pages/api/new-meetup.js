import { MongoClient } from "mongodb";
// /api/new-meetup
// POST /api/new-meetup
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;
    // we are creating a connection to the meetupsDB database.
    // if the database does not exist it will be created
    const client = await MongoClient.connect(
      "mongodb+srv://admin:admin@cluster0.tcybw5n.mongodb.net/meetupsDB"
    );
    const db = client.db();
    // console.log("client ===> ", client);
    // console.log("db ===> ", db);
    // if the meetups coolection does not exist it will be created
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log("retrieved obj from db: ", result);

    client.close();

    res.status(201).json({ message: "Meetup inserted! " });
  }
};

export default handler;
