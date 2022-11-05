/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useMemo, useState } from "react";
import Detail1 from "public/images/details/detail_1.svg";
import Detail2 from "public/images/details/detail_2.svg";
import Detail3 from "public/images/details/detail_3.svg";
import Detail4 from "public/images/details/detail_4.svg";
import Detail5 from "public/images/details/detail_5.svg";

import Avatar from "public/images/details/default.svg";
import Avatar1 from "public/images/details/default-1.svg";
import Avatar2 from "public/images/details/default-2.svg";
import classNames from "classnames";
import Image from "next/image";

declare interface AboutProps {
  className: string;
}

declare type creditsType = {
  avatar: string;
  author: string;
  title: string;
};

declare type factType = {
  title: string;
  content: string;
};

declare type aboutType = {
  genres: string[];
  sumary: {
    description: string;
    imagesPreview: string[];
  };
  credits: creditsType[];
  facts: factType[];
};

const dataAbout: aboutType = {
  genres: ["Horror", "Psychological", "Seinen"],
  sumary: {
    description:
      "Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasanes mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. However, there is nothing to do with this.",
    imagesPreview: [
      Detail1?.src,
      Detail2?.src,
      Detail3?.src,
      Detail4?.src,
      Detail5?.src,
    ],
  },
  credits: [
    { avatar: Avatar?.src, author: "Kodansha", title: "Publisher" },
    { avatar: Avatar1?.src, author: "Kodansha", title: "Publisher" },
    { avatar: Avatar2?.src, author: "Kodansha", title: "Publisher" },
  ],
  facts: [
    { title: "Last Updated", content: "2 days ago" },
    { title: "Age Rating", content: "Mature (18+)" },
    { title: "Color", content: "Black & White" },
    { title: "Origin Media", content: "Print" },
    { title: "Style Origin", content: "Japanese Comics (Manga)" },
    { title: "Copyright", content: "© Daruma Matsuura / Kodansha Ltd." },
    { title: "Other Names", content: "Kasane -voleuse de visage" },
  ],
};

const About: FC<AboutProps> = ({ className }) => {
  const _prefix = `${className}-about`;
  const [hasMore, setHasMore] = useState<boolean>(false);
  const { genres, sumary, credits, facts } = dataAbout ?? {};

  const renderGenres = () => {
    return (
      <div className="genes">
        <div className="title">Genres</div>
        {genres.map((gen, index) => {
          return (
            <span key={index} className="tag mr-6 p-6">
              {gen}
            </span>
          );
        })}
      </div>
    );
  };

  const renderImagwsPreview = (imagwsSummary: string[]) => {
    return (
      <>
        <div className="images-summary mt-16">
          {imagwsSummary.map((el, index) => {
            return (
              <Image
                key={index}
                src={el}
                width={84}
                height={126}
                alt="images_summary"
              />
            );
          })}
        </div>
      </>
    );
  };

  const renderSummary = () => {
    const { description, imagesPreview } = sumary ?? {};
    return (
      <div className="summary">
        <div className="title">Summary</div>
        <div
          className={classNames("description", {
            "description-more": hasMore,
          })}
        >
          {description}

          {hasMore && renderImagwsPreview(imagesPreview)}
        </div>
      </div>
    );
  };

  const renderCredits = () => {
    return (
      <div className="credits">
        <div className="title">Credits</div>
        <div className="content">
          {credits.map(({ author, avatar, title }, index) => {
            return (
              <div key={index} className="mb-12">
                <div className="avatar mr-10">
                  <Image src={avatar} width={40} height={40} alt="avatar" />
                </div>
                <div className="info">
                  <div className="author">{author}</div>
                  <div className="title">{title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderFacts = () => {
    return (
      <div className="facts">
        <div className="title">Other Facts</div>

        <div className="content">
          {facts.map((fac, index) => {
            return (
              <div key={index} className="content--item">
                <div className="fact-title">{fac.title}</div> :
                <div className="fact-content">{fac.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={_prefix}>
      <div className={`${_prefix}--title`}>About This</div>
      <div className={`${_prefix}--content`}>
        {renderGenres()}
        {renderSummary()}

        {hasMore && renderCredits()}
        {hasMore && renderFacts()}
      </div>

      {!hasMore && (
        <div className={`${_prefix}--show-more`}>
          <div onClick={() => setHasMore((prevState) => !prevState)}>
            Show More
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
