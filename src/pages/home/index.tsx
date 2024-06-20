import PostForm from "components/posts/PostForm";
import PostBox from "components/posts/PostBox";
import { useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "firebaseApp";
export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileUrl?: string;
  Likes?: string[];
  likeCount?: number;
  comments?: any;
}

export default function HomePage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const {user} = useContext(AuthContext);
  //사용자가 로그인한 상태인지 확인하기위해 정의해둔 useContext사용

  useEffect(() => {
    if(user) {
      // 콜렉션에서 디비를 가져오고
      // firestore의 'posts' 컬렉션을 가져옴
      let postsRef = collection(db,"posts");
      let postsQuery = query(postsRef, orderBy('createAt', 'desc'));

      onSnapshot(postsQuery, (snapShot) => {
        let dataObj = snapShot.docs.map((doc) => ({
          ...doc.data(),
          id: doc?.id,
        }));

        setPosts(dataObj as PostProps[]); 
      });
    }
  }, [user])


  return (
    <div className="home">
      <div className="home__top">
        <div className="home__title">Home</div>
        <div className="home__tabs">
          <div className="home__tab home__tab--active">For You</div>
          <div className="home__tab">Following</div>
        </div>
      </div>

      <PostForm />
      {/* Tweet Post */}
      <div className="post">
        {posts?.length > 0 ? (
          posts?.map((post) => <PostBox post={post} key={post.id} />)
        ) : (
          <div className="post__no-posts">
            <div className="post__text">게시글이 없습니다.</div>
          </div>
        )}
      </div>
    </div>
  );
}
