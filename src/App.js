import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { auth, provider } from "./firebase";
import { authAction } from "./store/actions";


function App({ actions }) {
  console.log(actions)
  const { user } = useSelector(state => state.AuthReducer)

  console.log('this is AuthReducer', user)
  console.log('this is auth action', authAction)

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth?.email, userAuth?.displayName)

      actions.authAction(userAuth?.email).then((resp) => {
        console.log(resp)
      })
      return unSubscribe
    })
  }, [])
  const SignIn = (e) => {
    e.preventDefault()
    auth.signInWithPopup(provider)
  }
  const SignOut = (e) => {
    e.preventDefault()
    auth.signOut()
  }
  console.log('this is AuthReducer', user)

  return (
    <div style={{ textAlign: 'center' }} className="app">
      <h1 > BoilerPlate</h1>
      <button onClick={SignIn}>Sign In</button>
      <button onClick={SignOut}>Sign Out</button>
      <br />
      {user && user}
    </div>
  );
}
const mapStateToProps = ({ AuthReducer }) => {
  const { user } = AuthReducer
  return { user }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      authAction
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
