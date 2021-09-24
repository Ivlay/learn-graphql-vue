import express          from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose         from 'mongoose';
import schema           from './schema';
const uri = '';

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
