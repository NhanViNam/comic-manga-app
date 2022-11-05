import React, { FC } from "react";

declare interface ComicRightProps {
  about: JSX.Element;
  related: JSX.Element;
}
const ComicRight: FC<ComicRightProps> = ({ about, related }) => {
  return (
    <>
      {about}
      {related}
    </>
  );
};

export default ComicRight;
