// import { useState, createContext } from "react";
// import Card from "../Card/Card";
// import { type BlogContextType } from "./types";

// import { BlogWrapper, TextArea, PostButton } from "./styles";

// export const BlogContext = createContext<BlogContextType>({
//   message: undefined,
//   setMessage: () => {},
// });

// function BlogManagement() {
//   const [message, setMessage] = useState<string | undefined>(undefined);
//   const [inputValue, setInputValue] = useState("");

//   const handlePost = () => {
//     if (inputValue.trim() !== "") {
//       setMessage(inputValue);
//       setInputValue("");
//     }
//   };

//   return (
//     <BlogContext.Provider value={{ message, setMessage }}>
//       <BlogWrapper>
//         <TextArea
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Напишите сообщение..."
//         />
//         <PostButton onClick={handlePost}>Запостить</PostButton>
//         {message && <Card />}
//       </BlogWrapper>
//     </BlogContext.Provider>
//   );
// }

// export default BlogManagement;

import { useState, type ChangeEvent, createContext } from "react";
import Button from "components/Button/Button";
import Card from "homeworks/Homework_13/components/Card/Card";
import { BlogManagementWrapper, TextArea } from "./styles";


export const BlogManagementContext = createContext<string | undefined>(
  undefined
);

function BlogManagement() {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onChangeTextAreaMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };
  const postMessage = () => {
    setMessage(textAreaValue);
  };

  return (
    <BlogManagementContext.Provider value={message}>
      <BlogManagementWrapper>
        <TextArea
          name="message"
          value={textAreaValue}
          onChange={onChangeTextAreaMessage}
          placeholder="Enter message to post"
        />
        <Button name="Запостить" onClick={postMessage} />
        <Card />
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}


export default BlogManagement;
