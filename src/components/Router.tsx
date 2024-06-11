import HomePage from 'pages/home';
import NotificationsPage from 'pages/notifications';
import PostListPage from 'pages/posts';
import PostDetail from 'pages/posts/detail';
import PostEdit from 'pages/posts/edit';
import PostNew from 'pages/posts/new';
import ProfilePage from 'pages/profile';
import ProfileEdit from 'pages/profile/edit';
import SearchPage from 'pages/search';
import LoginPage from 'pages/users/login';
import SignupPage from 'pages/users/signup';
import { Navigate, Route, Routes } from 'react-router-dom';
export default function Router() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/posts" element={<PostListPage />} />
    <Route path="/posts/:id" element={<PostDetail />} />       {/* 개별적 아이디사용해서 게시글상세페이지로 갈수있게 경로설정 */}
    <Route path="/posts/new" element={<PostNew />} /> 
    <Route path="/posts/edit/:id" element={<PostEdit />} /> 
    <Route path="/profile" element={<ProfilePage />} /> 
    <Route path="/profile/edit" element={<ProfileEdit />} /> 
    <Route path="/notifications" element={<NotificationsPage />} /> 
    <Route path="/search" element={<SearchPage />} /> 
    <Route path="/users/login" element={<LoginPage />} /> 
    <Route path="/users/signup" element={<SignupPage />} /> 
    <Route path="*" element={<Navigate replace to="/"/> } />
    {/* "*" 의 의미 : 모든 패스를 받는다 = 위에서 정의한 경로가 아닌 경우엔 지정경로로 이동되게함 */}

  </Routes>
  )
}