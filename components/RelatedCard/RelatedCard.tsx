import React, { FC } from "react";
import classnames from "classnames";
import { relatedCardType } from "@modules/ComicDetail/ComicRight/Related/Related";
import PropTypes from "prop-types";
import Image from "next/image";
import Currency from "public/images/currency.svg";

declare interface RelatedCardProps {
  className?: string;
  related: relatedCardType;
}
const prefix = "related-card";
const RelatedCard: FC<RelatedCardProps> = ({ className, related }) => {
  const { category, title, totalView, exclusive, url } = related ?? {};
  return (
    <div
      className={classnames(prefix, {
        [`${className}`]: className !== "",
      })}
    >
      <div className={`${prefix}_wrapper`}>
        <div
          className="url-images"
          style={{ backgroundImage: `url(${url})` }}
        ></div>
        <div className="info-related ml-24">
          <div className="title">{title}</div>
          {exclusive && (
            <div className="exclusive">
              EXCLUSIVE{" "}
              <Image
                width={18}
                height={18}
                alt="coin"
                src={Currency}
                className="mb-6 ml-4"
              />
            </div>
          )}
          <div className="category">{category}</div>

          <div className="totalView">{totalView} reads</div>
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
RelatedCard.propTypes = {
  className: PropTypes.string,
};

RelatedCard.defaultProps = {
  className: "",
};
