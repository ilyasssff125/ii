// 🔥 Firebase Config (خاص بك)
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Login
function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      alert("تم تسجيل الدخول: " + result.user.displayName);
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Facebook Login
function loginFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      alert("تم تسجيل الدخول: " + result.user.displayName);
    })
    .catch((error) => {
      alert(error.message);
    });
}
