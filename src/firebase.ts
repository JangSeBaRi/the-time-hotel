import { initializeApp } from "firebase/app";
import {
    getAuth, // authentication 설정
    signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
    GoogleAuthProvider, //google login 기능
    signInWithEmailAndPassword, // email 로그인
    createUserWithEmailAndPassword,
    signOut, //email 회원가입
    updateProfile, // 회원 정보 수정
} from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firestore db
const db = getFirestore(app);

// auth 설정
const auth = getAuth();

// Email 로그인
const signupEmail = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Email 로그아웃
const signoutEmail = () => {
    return signOut(auth);
};

//Email 회원가입
const signinEmail = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};

//사용자 프로필 변경
const updateUserProfile = (obj: { displayName: string; photoURL: string }) => {
    return updateProfile(auth.currentUser!!, obj);
};

//db 데이터 추가
const addData = (collectionName: string, uid: string, data: { [key: string]: string | null }) => {
    return setDoc(doc(db, collectionName, uid), data);
};

export { signupEmail, signinEmail, signoutEmail,  auth, updateUserProfile, db, addData };
