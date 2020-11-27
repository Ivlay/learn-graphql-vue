import { IResolvers } from 'graphql-tools';
import MovieModel     from './model/movies';
import CommentsModel  from './model/comments';

const resolvers: IResolvers = {
    Query: {
        movieById: (_, {id}) => MovieModel.findById(id),
        moviesByYear: (_, {year}) => MovieModel.find({ year }),
        moviesPaginate: (_, {number}) => MovieModel.find({ }).sort({ $natural: 1 }).limit(number).skip(number),
        moviesByRated: (_, {rated}) => MovieModel.find({ rated }),
        randomMovie: () => {
            const random = Math.floor(Math.random() * 20000);

            return MovieModel.findOne().skip(random);
        }
    },
    Movie: {
        similarMoviesByGenre(parent) {
            const genre = parent.genres[0];
            return MovieModel.find({genres: genre}).limit(3)
        },
        comments(parent) {
            return CommentsModel.find({ movie_id: parent._id }).limit(5)
        }
    }
};

export default resolvers;
