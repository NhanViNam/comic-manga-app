import React, { FC } from "react";
import classnames from "classnames";
import { ChapterType } from "@modules/ComicDetail/ComicLeft/Chapters/Chapters";
import { LockOutlined } from "@ant-design/icons";
import Image from "next/image";
import Coin from "public/images/Coin.svg";
import PropTypes from "prop-types";

declare type modeCardType = "RELEASE" | "LAST_READ";

declare interface ChapterCardProps {
  modeCard: modeCardType;
  chapter: ChapterType;
  className?: string;
}

const prefix = "chapter-card";
const ChapterCard: FC<ChapterCardProps> = ({
  className,
  chapter,
  modeCard,
}) => {
  const {
    url,
    status,
    title,
    readDate: read_date,
    price,
    isRead,
  } = chapter ?? {};
  const isLocked = status === "LOCKED";
  const isLastRead = modeCard === "LAST_READ";
  const nowDate = new Date();
  const readDate = new Date(read_date ?? "");
  const lastedDate =
    (nowDate.getTime() - readDate.getTime()) / (1000 * 3600 * 24) ?? 0;

  return (
    <div
      className={classnames(prefix, {
        [`${className}`]: className !== "",
      })}
    >
      <div className="card-wrapper">
        <div className="card-wrapper--left">
          <div
            className={classnames("images", {
              "images-lock": isLocked,
            })}
            style={{
              backgroundImage: `url(${url})`,
            }}
          >
            {isLocked && (
              <div className="icon-lock flex-center">
                <LockOutlined width={12} height={12} />
              </div>
            )}
            {isRead && (
              <div className="progress">
                <div className="outer m-0 p-0">
                  <div className="inner" style={{ width: `70%` }} />
                </div>
              </div>
            )}
          </div>
          <div className="info ml-12">
            <div className="title">{title}</div>
            <div className="date-read">
              <span>Last read {Math.floor(lastedDate)} days ago </span>
            </div>
          </div>
        </div>

        <div className="card-wrapper--right">
          {!isLastRead && (
            <div className="price">
              {!price ? (
                "FREE"
              ) : (
                <div>
                  <Image
                    width={18}
                    height={18}
                    alt="coin"
                    src={Coin}
                    className="mb-4"
                  />
                  <span className="num ml-4">{price}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterCard;
ChapterCard.propTypes = {
  className: PropTypes.string,
  modeCard: PropTypes.oneOf<modeCardType>(["LAST_READ", "RELEASE"]).isRequired,
  // chapter: PropTypes.shape({
  //   url: PropTypes.string,
  //   title: PropTypes.string,
  //   readDate: PropTypes.string,
  //   price: PropTypes.number,
  //   isRead: PropTypes.bool,
  //   status: PropTypes.oneOf<statusType>(["LOCKED", "ACTIVITED"]),
  // }).isRequired,
};

ChapterCard.defaultProps = {
  className: "",
};
