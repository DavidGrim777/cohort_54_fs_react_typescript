// import { useContext } from "react";
// import { BlogContext } from "../BlogManagement/BlogManagement";

// import { MessageWrapper } from "./styles";

// function Message() {
//   const { message } = useContext(BlogContext);

//   return <MessageWrapper>{message}</MessageWrapper>;
// }

// export default Message;

import { useContext } from "react";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";

import { MessageWrapper, MessageText, MessageTitle } from "./styles";

function Message() {
  const message = useContext(BlogManagementContext);

  return (
    <MessageWrapper>
      <MessageTitle>Message:</MessageTitle>
      <MessageText>{message}</MessageText>
    </MessageWrapper>
  );
}

export default Message;
