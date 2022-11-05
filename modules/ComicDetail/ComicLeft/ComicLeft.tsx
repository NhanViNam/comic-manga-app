import React, { FC } from "react";

interface Props {
  className: string;
  banner: JSX.Element | JSX.Element[];
  pricing: JSX.Element | JSX.Element[];
  chapters: JSX.Element | JSX.Element[];
}

const ComicLeft: FC<Props> = ({ className, banner, pricing, chapters }) => {
  const _prefix = `${className}_left`;

  return (
    <section className={_prefix}>
      {banner}
      {pricing}
      {chapters}
    </section>
  );
};

export default ComicLeft;
