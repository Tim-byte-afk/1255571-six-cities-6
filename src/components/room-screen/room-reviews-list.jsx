import React from 'react';
import Form from '../root-form/root-form';
import {connect} from 'react-redux';
import Review from './room-review-screen';
import PropTypes from 'prop-types';
import {AUTHORIZATION_STATUS} from '../../constants';
import {getAuthStatus} from '../../store/user/selectors';
import {reviewPropTypes} from '../../prop-types';

const ReviewsList = (props) => {
  const {reviewsData = [], authorizationStatus, offerId} = props;

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
      {
        authorizationStatus === AUTHORIZATION_STATUS.AUTH && <Form offerId={offerId} />

      }
    </section>
  );
};

ReviewsList.propTypes = {
  reviewsData: PropTypes.arrayOf(reviewPropTypes),
  authorizationStatus: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});


export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
