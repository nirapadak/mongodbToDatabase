const { client } = require('./dbConfig');

const findSingleData = async () => {
  try {
    
    const DATABASE = client.db('myLocalDb');
    const Users = await DATABASE.collection('Users');

    const query = { name: "BMW" }

    const result = await Users.findOne(query);

    console.log(result);

  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

findSingleData();