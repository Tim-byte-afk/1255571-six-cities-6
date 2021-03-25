import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getStarsWidth} from '../../utils';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {postFavorite} from '../../store/api-actions.js';
import {AUTHORIZATION_STATUS, AppRoute, FavoriteStatus} from '../../constants';

import cn from 'classnames';

const CardScreen = (props) => {

  const {cardData, onMouseEnter, onMouseLeave, onButtonClick, authorizationStatus} = props;
  const [isFavorite, setIsFavorite] = useState(cardData.is_favorite);
  const history = useHistory();

  const handleMouseOn = (id) => () => onMouseEnter(id);

  const handleFavoriteClick = () => {
    if (authorizationStatus === AUTHORIZATION_STATUS.NO_AUTH) {
      history.push(AppRoute.LOGIN);
    } else {
      onButtonClick(cardData.id, isFavorite ? FavoriteStatus.REMOVE : FavoriteStatus.ADD);
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleMouseOn(cardData.id)} onMouseLeave={onMouseLeave}>
      {
        cardData.is_premium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${cardData.id}`}>
          <img className="place-card__image" src={cardData.preview_image} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cardData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={cn(`button place-card__bookmark-button`, {'place-card__bookmark-button--active': isFavorite})} type="button" onClick={handleFavoriteClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getStarsWidth(cardData.rating)}%`}} ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${cardData.id}`}>
            {cardData.title}
          </Link>
        </h2>
        <p className="place-card__type">{cardData.type}</p>
      </div>
    </article>
  );
};

CardScreen.propTypes = {
  cardData: PropTypes.object.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  authorizationStatus: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClick(id, status) {
    dispatch(postFavorite(id, status));
  }
});

export {CardScreen};
export default connect(mapStateToProps, mapDispatchToProps)(CardScreen);
