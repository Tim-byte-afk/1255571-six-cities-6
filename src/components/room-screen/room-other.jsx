import React, {useState} from 'react';
import {getStarsWidth} from '../../utils';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {postFavorite} from '../../store/favorites/operations';
import {AUTHORIZATION_STATUS, AppRoute, FavoriteStatus} from '../../constants';
import {getAuthStatus} from '../../store/user/selectors';
import {offerPropTypes} from '../../prop-types';

import cn from 'classnames';

const Other = (props) => {
  const {otherOffer, authorizationStatus, onButtonClick} = props;
  const [isFavorite, setIsFavorite] = useState(otherOffer.is_favorite);
  const history = useHistory();

  const handleFavoriteClick = () => {
    if (authorizationStatus === AUTHORIZATION_STATUS.NO_AUTH) {
      history.push(AppRoute.LOGIN);
    } else {
      onButtonClick(otherOffer.id, isFavorite ? FavoriteStatus.REMOVE : FavoriteStatus.ADD);
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <React.Fragment>
      <article className="near-places__card place-card">
        {
          otherOffer.is_premium && (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          )
        }
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <Link to={`/offer/${otherOffer.id}`}>
            <img className="place-card__image" src={otherOffer.preview_image} width="260" height="200" alt="Place image" />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{otherOffer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={cn(`button place-card__bookmark-button`, {'place-card__bookmark-button--active': isFavorite})} type="button" onClick={handleFavoriteClick}>
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${getStarsWidth(otherOffer.rating)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${otherOffer.id}`} >
              {otherOffer.title}
            </Link>
          </h2>
          <p className="place-card__type">{otherOffer.type}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

Other.propTypes = {
  otherOffer: offerPropTypes,
  authorizationStatus: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClick(id, status) {
    dispatch(postFavorite(id, status));
  }
});

export {Other};
export default connect(mapStateToProps, mapDispatchToProps)(Other);
