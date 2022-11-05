import React, { FC } from "react";

interface Props {
  className: string;
  banner: JSX.Element | JSX.Element[];
}

const ComicLeft: FC<Props> = ({ className, banner }) => {
  const _prefix = `${className}_left`;

  return (
    <section className={_prefix}>
      <section className={`${_prefix}-banner`}>{banner}</section>
    </section>
  );
};

export default ComicLeft;
