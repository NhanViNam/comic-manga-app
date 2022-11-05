import { BellOutlined, SortAscendingOutlined } from "@ant-design/icons";
import ChapterCard from "@components/ChapterCard/ChapterCard";
import { isEmpty } from "lodash";
import { dataLastRead, dataRelease } from "mock/chapterMock";
import React, { FC } from "react";

interface Chapters {
  className: string;
}

export declare type statusType = "ACTIVITED" | "LOCKED";
export declare interface ChapterType {
  url: string;
  title: string;
  readDate: string;
  price?: number;
  isRead: boolean;
  status: statusType;
}

const Chapters: FC<Chapters> = ({ className }) => {
  const _prefix = `${className}-chapters`;

  const renderLastRead = (): JSX.Element[] | undefined => {
    if (isEmpty(dataLastRead)) return;
    return dataLastRead.map((elm, index) => {
      return (
        <ChapterCard
          key={`${elm.title}-${index}`}
          modeCard="LAST_READ"
          chapter={elm}
          className="mb-24"
        />
      );
    });
  };

  const renderRelease = (): JSX.Element[] | undefined => {
    if (isEmpty(dataRelease)) return;
    return dataRelease.map((elm, index) => {
      return (
        <ChapterCard
          key={`${elm.title}-${index}`}
          modeCard="RELEASE"
          chapter={elm}
          className="mb-24"
        />
      );
    });
  };

  const renderActions = () => {
    return [
      { icon: <BellOutlined width={16} height={16} /> },
      { icon: <SortAscendingOutlined width={16} height={16} /> },
    ].map((el) => (
      <div key={`${el?.icon}`} className="icon flex-center">
        {el?.icon}
      </div>
    ));
  };

  return (
    <section className={_prefix}>
      <div className={`${_prefix}--last-read`}>
        <div className="title mb-10">Last read</div>
        <div className="box">{renderLastRead()}</div>
      </div>

      <div className={`${_prefix}--release`}>
        <div className={`${_prefix}--release-header mb-8`}>
          <div className="left">
            <div className="title">10 Chapters</div>
            <div className="subtitle">New chapter every Thursday </div>
          </div>
          <div className="right">{renderActions()}</div>
        </div>
      </div>

      <div className={`${_prefix}--release-content`}>{renderRelease()}</div>
    </section>
  );
};

export default Chapters;
