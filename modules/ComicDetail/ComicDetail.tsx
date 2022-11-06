import React from "react";
import ComicLeft from "./ComicLeft/ComicLeft";
import ComicRight from "./ComicRight/ComicRight";

import Banner from "./ComicLeft/Banner/Banner";
import Chapters from "./ComicLeft/Chapters/Chapters";
import About from "./ComicRight/About/About";
import Related from "./ComicRight/Related/Related";
import Comments from "./ComicRight/Comments/Comments";
import Connect from "./ComicRight/Connect/Connect";

import PricingAndPromotion from "./ComicLeft/PricingAndPromotion/PricingAndPromotion";

const prefix = "comic-detail";
const prefixLeft = `${prefix}_left`;
const prefixRight = `${prefix}_right`;
const ComicDetail = () => {
  /**
   * Comic Left
   */
  const renderBanner = <Banner className={prefixLeft} />;
  const renderPricing = <PricingAndPromotion className={prefixLeft} />;
  const renderChapters = <Chapters className={prefixLeft} />;

  /**
   * Comic Right
   */
  const renderAbout = <About className={prefixRight} />;
  const renderRelated = <Related className={prefixRight} />;
  const renderComments = <Comments className={prefixRight} />;
  const renderConnect = <Connect className={prefixRight} />;

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
        <ComicRight
          about={renderAbout}
          related={renderRelated}
          comments={renderComments}
          connect={renderConnect}
        />
      </div>
    </section>
  );
};

export default ComicDetail;
