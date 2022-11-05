import React, { ReactElement } from "react";
import ComicLeft from "./ComicLeft/ComicLeft";
import ComicRight from "./ComicRight/ComicRight";

import Banner from "./ComicLeft/Banner/Banner";

export declare type typeIcon = "like" | "read" | "none";

declare type reactType = {
  type: typeIcon;
  count: string | number;
};

export declare type bannerType = {
  title: string;
  author: string;
  category: string;
  totalChaper: number;
  reactions: Array<reactType>;
  tags: Array<string>;
};

const data: bannerType = {
  title: "Kasane",
  author: "By Kodansha",
  category: "Drama",
  totalChaper: 10,
  reactions: [
    { type: "read", count: "74.483" },
    { type: "like", count: "15,863" },
  ],
  tags: ["18", "NEW", "TRENDING", "BESTSELLER", "MANGA"],
};

const prefix = "comic-detail";
const ComicDetail = () => {
  const renderBanner = <Banner dataBanner={data} />;

  return (
    <section className={prefix}>
      <ComicLeft className={prefix} banner={renderBanner} />
      <ComicRight />
    </section>
  );
};

export default ComicDetail;
