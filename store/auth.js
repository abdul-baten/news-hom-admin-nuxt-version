import firebase from 'firebase'
import db from '@/plugins/firebase/init'

export const state = () => ({
  isLoggedIn: false,
  loggedInUserName: null,
  loggedInUserRole: null,
  loginErrorMessage: ''
})

export const actions = {
  userSignIn({ commit }, authData) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(authData.email, authData.password)
        .then(() => {
          const user = firebase.auth().currentUser
          const userId = user.uid
          if (user) {
            db.collection('users')
              .doc(userId)
              .get()
              .then(doc => {
                const userRole = doc.data().role
                return userRole
              })
              .then(userRole => {
                if (userRole === 'user') {
                  firebase
                    .auth()
                    .signOut()
                    .then(data => console.log(data))
                } else {
                  // router.push({ name: 'Dashboard' })
                }
              })
          }
        })
        .catch(function(error) {
          let errorCode = error.code
          let errorMessage
          if (errorCode == 'auth/weak-password') {
            errorMessage = 'The password is too weak.'
          } else if (errorCode == 'auth/invalid-email') {
            errorMessage = 'Email address is not valid.'
          } else if (errorCode == 'auth/user-not-found') {
            errorMessage = 'No user found with this email address.'
          } else if (errorCode == 'auth/wrong-password') {
            errorMessage = 'The password is not correct.'
          }
          commit('setLoginErrorMessage', errorMessage)
        })
      resolve()
    })
  },

  // else {
  //   alert(errorMessage);
  // }

  logUserOut({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(function() {
        router.push({ name: 'Login' })
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  loggedInUserInfo({ commit }) {
    let currentUserID = firebase.auth().currentUser.uid
    if (currentUserID) {
      commit('checkIfLoggedIn', true)
      db.collection('users')
        .doc(currentUserID)
        .get()
        .then(function(doc) {
          const userInfo = {
            userName: doc.data().name,
            userRole: doc.data().role
          }
          commit('setLoggedInUserInfo', userInfo)
        })
    } else {
      commit('checkIfLoggedIn', false)
    }
  }
}

export const mutations = {
  checkIfLoggedIn(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  },
  setLoggedInUserInfo(state, userInfo) {
    state.loggedInUserName = userInfo.userName
    state.loggedInUserRole = userInfo.userRole
  },
  setLoginErrorMessage(state, loginErrorMessage) {
    state.loginErrorMessage = loginErrorMessage
  }
}
export const getters = {}
