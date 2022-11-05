import React, { FC } from "react";

declare interface ComicLeftProps {
  banner: JSX.Element;
  pricing: JSX.Element;
  chapters: JSX.Element;
}

const ComicLeft: FC<ComicLeftProps> = ({ banner, pricing, chapters }) => {
  return (
    <>
      {banner}
      {pricing}
      {chapters}
    </>
  );
};

export default ComicLeft;
