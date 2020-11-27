import express          from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose         from 'mongoose';
import schema           from './schema';
const uri = 'mongodb+srv://fiva:836063abc@cluster0.rrnof.mongodb.net/sample_mflix?retryWrites=true&w=majority';

const PORT = 3005;

const app = express();

const server = new ApolloServer({
    schema,
    playground: true
});

server.applyMiddleware({ app, path: '/graphql' });

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch(error => console.error(error));

app.listen({port: PORT}, () => console.log(`Apollo server on http://localhost:${PORT}/graphql`));
