import React, { FC } from "react";

declare interface ComicRightProps {
  about: JSX.Element;
  related: JSX.Element;
  comments: JSX.Element;
  connect: JSX.Element;
}
const ComicRight: FC<ComicRightProps> = ({
  about,
  related,
  comments,
  connect,
}) => {
  return (
    <>
      {about}
      {related}
      {comments}
      {connect}
    </>
  );
};

export default ComicRight;
