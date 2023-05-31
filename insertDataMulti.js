const { client } = require('./dbConfig');

const insertDataMultiple = async () => {
  try {

    const DATABASE = client.db('myLocalDb');
    const Users = DATABASE.collection('Users');
    const doc = [
      {
        name: "whatever",
        age: 23,
        address: "123 street my para"
      },
      {
        name: "my account is plan",
        age: 34,
        address: "123 street my"
      },
      {
        name: "joytun",
        age: 34,
        address: "123 street my"
      },
      {
        name: "BMW",
        age: 34,
        address: "123 street my"
      }
    ]

    const result = await Users.insertMany(doc);
    console.log(`Multiple documents inserted: ${result.insertedIds}`);
    
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
insertDataMultiple();