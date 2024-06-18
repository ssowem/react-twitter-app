import { useState, useEffect } from "react";
import { Layout } from "components/Layout";
import Router from "components/Router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const auth = getAuth(app);
  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth.currentUser  // auth.currentUser가 있으면 ture, 없으면 false값으로 변환
  );

  // onAuthStateChanged: 사용자상태를 실시간으로 볼 수 있도록하는 firebase만의 실시간 업데이트 측정 함수
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {  //유저값을 받고 유저값이 있으면 setIsAuthenticated(true); 아니면  setIsAuthenticated(false);
      if(user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true); //onAuthStateChanged 호출이 되면 항상 setInit(true);
    })
  },[auth]) // auth값이 바뀔때마다 호출

  return (
    <Layout>
      <ToastContainer />
      {/* 라우터를 바로 보여주는게 아닌 상태값이 변경되었는지 아닌지 확인*/}
      {init ? <Router isAuthenticated={isAuthenticated}/> : "loading..."}
    </Layout>
  );
}

export default App;
