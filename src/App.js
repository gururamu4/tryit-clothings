import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './components/checkout/checkout.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import CurrentUserContext from './contexts/currentUser/current-user.context';

class App extends React.Component {
 
  state = {
    currentUser: null
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //onAuthStateChanged is a listener which keeps checking for any change in logged in user, in authentication purpose
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // const snapSht = await userRef.get();
        // this.setState({
        //   currentUser : {
        //     id: snapSht.id,
        //     ...snapSht.data()
        //   }
        // })

        userRef.onSnapshot(snapShot => { //https://firebase.google.com/docs/firestore/query-data/listen, subsribe to any change in currentUser
          this.setState({ currentUser:{ 
            id: snapShot.id,
            ...snapShot.data()
          }});
        });
      }

      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
         <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.state.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

export default App;