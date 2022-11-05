import { bannerType, typeIcon } from "@modules/ComicDetail/ComicDetail";
import { isEmpty } from "lodash";
import Image from "next/image";
import React, { FC } from "react";
import BgImage from "public/images/bg.svg";
import {
  ReadOutlined,
  LikeOutlined,
  ShareAltOutlined,
  MoreOutlined,
} from "@ant-design/icons";

declare type typeAction = "share" | "more";
declare type actionstype = {
  type: typeAction;
  icon: JSX.Element;
  action: () => void;
};

declare interface BannerProps {
  dataBanner: bannerType;
  className: string;
}

const iconsActions: actionstype[] = [
  {
    type: "share",
    icon: <ShareAltOutlined />,
    action: () => {},
  },
  {
    type: "more",
    icon: <MoreOutlined />,
    action: () => {},
  },
];

const Banner: FC<BannerProps> = ({ dataBanner, className }) => {
  const _prefix = `${className}-banner`;
  const { title, author, category, totalChaper, reactions, tags } =
    dataBanner ?? {};

  const renderTypeIcon = (type: typeIcon): JSX.Element => {
    const typeIconHandler = {
      like: <LikeOutlined size={20} />,
      read: <ReadOutlined size={20} />,

      none: <></>,
    };

    return typeIconHandler[type] ?? typeIconHandler["none"];
  };

  const renderReactions = () => {
    if (isEmpty(reactions)) return;
    return reactions.map((react, index) => {
      return (
        <div key={`${react?.type}--${index}`}>
          <span>{renderTypeIcon(react.type)}</span>
          <span>{react?.count}</span>
        </div>
      );
    });
  };

  const renderTags = () => {
    if (isEmpty(tags)) return;
    return tags.map((tag, index) => (
      <div className="tag" key={`${tag}-${index}`}>
        {tag}
      </div>
    ));
  };

  const renderActions = () => {
    const handleClick = (type: typeAction) => console.log(type);

    return iconsActions.map((icon) => (
      <div
        key={`${icon?.type}`}
        className="action flex-center"
        onClick={() => handleClick(icon.type)}
      >
        {icon?.icon}
      </div>
    ));
  };

  return (
    <section className={_prefix}>
      <Image alt="banner_image" src={BgImage} width={180} height={272} />
      <div className="banner-info">
        <div className="banner-info--left">
          <div className="top">
            <div className="title">{title}</div>
            <div className="author">{author}</div>
            <div className="category">
              {category} {totalChaper} chapter
            </div>

            <div className="reactions">{renderReactions()}</div>
            <div className="tags">{renderTags()}</div>
          </div>

          <div className="bottom">
            <div>Read First Chapter for FREE</div>
          </div>
        </div>

        <div className="banner-info--right">{renderActions()}</div>
      </div>
    </section>
  );
};

export default Banner;
