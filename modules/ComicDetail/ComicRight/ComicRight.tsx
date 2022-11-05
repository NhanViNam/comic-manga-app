import React, { FC } from "react";

declare interface ComicRightProps {
  about: JSX.Element;
}
const ComicRight: FC<ComicRightProps> = ({ about }) => {
  return <>{about}</>;
};

export default ComicRight;
