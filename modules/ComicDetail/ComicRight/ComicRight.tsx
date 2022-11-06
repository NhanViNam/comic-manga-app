import React, { FC } from "react";

declare interface ComicRightProps {
  about: JSX.Element;
  related: JSX.Element;
  comments: JSX.Element;
}
const ComicRight: FC<ComicRightProps> = ({ about, related, comments }) => {
  return (
    <>
      {about}
      {related}
      {comments}
    </>
  );
};

export default ComicRight;
