import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AUTHORIZATION_STATUS} from '../../constants';
import {getAuthStatus} from '../../store/user/selectors';

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  const isAuthorized = authorizationStatus === AUTHORIZATION_STATUS.AUTH;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isAuthorized
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
