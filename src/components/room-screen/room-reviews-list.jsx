import React from 'react';
import Form from '../root-form/root-form';
import Review from './room-review-screen';
import PropTypes from 'prop-types';

const ReviewsList = (props) => {
  const {reviewsData = []} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsData.length}</span></h2>
      <ul className="reviews__list">
        {reviewsData.map((element) => (
          <Review
            reviewData={element}
            key={element.id}
          />
        ))}
      </ul>
      <Form />
    </section>
  );
};

ReviewsList.propTypes = {
  reviewsData: PropTypes.array.isRequired,
};

export default ReviewsList;
