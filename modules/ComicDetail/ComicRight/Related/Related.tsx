import React, { FC } from "react";
import RelatedUrl from "public/images/details/related.svg";
import RelatedCard from "@components/RelatedCard/RelatedCard";

export declare type relatedCardType = {
  url: string;
  title: string;
  category: string;
  totalView: number;
  exclusive: boolean;
};

declare interface RelatedProps {
  className: string;
}
const dataRelated: relatedCardType[] = [
  {
    title: "Title Name 1",
    category: "PREQUEL",
    url: RelatedUrl?.src,
    totalView: 45.6,
    exclusive: true,
  },

  {
    title: "Title Name 2",
    category: "PREQUEL",
    url: RelatedUrl?.src,
    totalView: 45.6,
    exclusive: true,
  },

  {
    title: "Title Name 3",
    category: "PREQUEL",
    url: RelatedUrl?.src,
    totalView: 45.6,
    exclusive: false,
  },
];
const Related: FC<RelatedProps> = ({ className }) => {
  const _prefix = `${className}-related`;

  const renderRelateds = () => {
    return dataRelated.map((elm, index) => {
      return <RelatedCard key={index} related={elm} className="mb-16" />;
    });
  };
  return (
    <div className={_prefix}>
      <div className={`${_prefix}--title`}>Related Titles</div>
      <div className={`${_prefix}--box`}>{renderRelateds()}</div>
    </div>
  );
};

export default Related;
