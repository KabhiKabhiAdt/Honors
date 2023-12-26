import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://12341234:12341234@ac-s9r1fsy-shard-00-00.alif8np.mongodb.net:27017,ac-s9r1fsy-shard-00-01.alif8np.mongodb.net:27017,ac-s9r1fsy-shard-00-02.alif8np.mongodb.net:27017/?ssl=true&replicaSet=atlas-877wh0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;