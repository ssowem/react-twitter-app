
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/posts" element={<h1>Post List Page</h1>} />
      <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />       {/* 개별적 아이디사용해서 게시글상세페이지로 갈수있게 경로설정 */}
      <Route path="/posts/new" element={<h1>Post New Page</h1>} /> 
      <Route path="/posts/edit/:id" element={<h1>Post Edit Page</h1>} /> 
      <Route path="/profile" element={<h1>Profile Page</h1>} /> 
      <Route path="/profile/edit" element={<h1>Profile Edit Page</h1>} /> 
      <Route path="/notifications" element={<h1>Notifications Page</h1>} /> 
      <Route path="/search" element={<h1>Search Page</h1>} /> 
      <Route path="/users/login" element={<h1>Login Page</h1>} /> 
      <Route path="/users/signup" element={<h1>Signup Page</h1>} /> 
      <Route path="*" element={<Navigate replace to="/"/> } />
      {/* "*" 의 의미 : 모든 패스를 받는다 = 위에서 정의한 경로가 아닌 경우엔 지정경로로 이동되게함 */}

    </Routes>
  );
}

export default App;
