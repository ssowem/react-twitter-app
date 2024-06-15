import { FiImage } from "react-icons/fi";

export default function PostForm() {
  const handleFileUpload = () => {};
  return (
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
          onChange={handleFileUpload}
          className="hidden"
        />
        <input type="submit" value="Tweet" className="post-form__submit-btn" />
      </div>
    </form>
  );
}
