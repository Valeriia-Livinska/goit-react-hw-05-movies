import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'helpers/Api';
import { ReviewItem, ReviewAuthor } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch {
        console.log('error');
      }
    }
    getMovieReviews();
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ author, content }) => {
        return (
          <ReviewItem key={author}>
            <ReviewAuthor>Author: {author}</ReviewAuthor>
            <p>{content}</p>
          </ReviewItem>
        );
      })}
    </ul>
  ) : (
    <div>There is no reviews</div>
  );
};

export default Reviews;
