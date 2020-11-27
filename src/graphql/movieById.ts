import gql from 'graphql-tag';

export const movieById = gql`
query movieById($id: ID!) {
    movieById(id: $id) {
        title
        cast
        year
        genres
        imdb {
            rating
            votes
        }
        poster
        fullplot
        tomatoes {
            viewer {
                rating
                numReviews
            }
        }
        directors
        comments {
            name
            text
        }
    }
}`;
