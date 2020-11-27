import { Schema, model } from 'mongoose';

const schema = new Schema({
    plot: String,
    genres: [ String ],
    cast: [ String ],
    title: String,
    fullplot: String,
    countries: [ String ],
    directors: [ String ],
    poster: String,
    rated: String,
    awards: { 
        wins: Number,
        nominations: Number ,
        text: String
    },
    year: Number,
    imdb: {
        rating: Number ,
        votes: Number ,
        id: Number
    },
    tomatoes: {
        viewer: {
            rating: Number,
            numReviews: Number
        }
    }
});

export default model('movies', schema);
