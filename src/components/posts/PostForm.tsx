import { useContext, useState } from "react";
import { FiImage } from "react-icons/fi";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "firebaseApp";
import { toast } from "react-toastify";
import AuthContext from "context/AuthContext";

export default function PostForm() {
  const [content, setContent] = useState<string>("");
  const {user} = useContext(AuthContext);

  const handleFileUpload = () => {};
  
  const onSubmit = async(e: any) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        content: content,
        createAt: new Date()?.toLocaleDateString("ko",{
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        uid: user?.uid,
        email: user?.email,
      });
      setContent("");
      toast.success("게시글을 생성했습니다.")
    } catch(e: any){
      console.log(e)
    }
  };


  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: {name, value},
    } = e;
    console.log(name, value);

    if (name === "content") {
      setContent(value);
    }
  };
  return (
    <form className="post-form" onSubmit={onSubmit}>
      <textarea
        className="post-form__textarea"
        required
        name="content"
        placeholder="What is happening?"
        onChange={onChange}
        value={content}
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
