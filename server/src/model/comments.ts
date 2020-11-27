import { Schema, model } from 'mongoose';

const schema = new Schema({
    name: String,
    email: String,
    text: String
});

export default model('comments', schema);
