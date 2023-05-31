const { client } = require('./dbConfig');

const insertData = async () => {
  try { 


    const DATABASE = client.db('myLocalDb');
    const Users = DATABASE.collection('Users');
    const doc = {
      name: 'nikihl pal',
      age: 30,
      address: "mahishaban pal para"
    }
    const result = await Users.insertOne(doc);
    console.log(`One document a insert ${result.insertId}`);


  } catch (error) {
    
    console.log(error);

  } finally {
    
    await client.close();

   }
  
}

insertData();