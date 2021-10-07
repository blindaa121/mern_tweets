import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './SignupForm';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);