import { FiImage } from "react-icons/fi";
import { Link } from "react-router-dom";
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

const posts: PostProps[] = [
  {
    id: "1",
    email: "test@test.com",
    content: "내용입니다",
    createdAt: "2021-10-01",
    uid: "123123",
  },
  {
    id: "2",
    email: "test@test.com",
    content: "내용입니다",
    createdAt: "2021-10-01",
    uid: "123123",
  },
  {
    id: "3",
    email: "test@test.com",
    content: "내용입니다",
    createdAt: "2021-10-01",
    uid: "123123",
  },
  {
    id: "4",
    email: "test@test.com",
    content: "내용입니다",
    createdAt: "2021-10-01",
    uid: "123123",
  },
  {
    id: "5",
    email: "test@test.com",
    content: "내용입니다",
    createdAt: "2021-10-01",
    uid: "123123",
  },
  {
    id: "6",
    email: "test@test.com",
    content: "내용입니다",
    createdAt: "2021-10-01",
    uid: "123123",
  },
];

export default function HomePage() {
  const handelFileUpload = () => {};
  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For You</div>
        <div className="home__tab">Following</div>
      </div>
      {/* Post Form */}
      <form className="post-form">
        <textarea
          className="post-form__textarea"
          required
          name="content"
          placeholder="What is happening?"
        />
        <div className="post-form__submit-area">
          <label htmlFor="file-input" className="post-form__file">
            <FiImage className="post-form__file-icon" />
          </label>
          <input
            type="file"
            name="file-input"
            accept="image/*" // 파일선택을 이미지 파일만 가능하게 제한
            onChange={handelFileUpload}
            className="hidden"
          />
          <input
            type="submit"
            value="Tweet"
            className="post-form__submit-btn"
          />
        </div>
      </form>
      {/* Tweet Post */}
      <div className="post">
        {posts?.map((post) => (
          <div className="post__box" key={post?.id}>
            <Link to={`posts/${post?.id}`}></Link>
              <div className="post__box-profile">
                
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
