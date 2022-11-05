import React, { ReactElement } from "react";
import ComicLeft from "./ComicLeft/ComicLeft";
import ComicRight from "./ComicRight/ComicRight";

import Banner from "./ComicLeft/Banner/Banner";
import PricingAndPromotion from "./ComicLeft/PricingAndPromotion/PricingAndPromotion";
import Chapters from "./ComicLeft/Chapters/Chapters";
import About from "./ComicRight/About/About";

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
const prefixLeft = `${prefix}_left`;
const prefixRight = `${prefix}_right`;
const ComicDetail = () => {
  /**
   * Comic Left
   */
  const renderBanner = <Banner className={prefixLeft} dataBanner={data} />;
  const renderPricing = <PricingAndPromotion className={prefixLeft} />;
  const renderChapters = <Chapters className={prefixLeft} />;

  /**
   * Comic Right
   */
  const renderAbout = <About className={prefixRight} />;

  return (
    <section className={prefix}>
      <div className={prefixLeft}>
        <ComicLeft
          banner={renderBanner}
          pricing={renderPricing}
          chapters={renderChapters}
        />
      </div>

      <div className={prefixRight}>
        <ComicRight about={renderAbout} />
      </div>
    </section>
  );
};

export default ComicDetail;
