import React, { FC } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { commentType } from "@modules/ComicDetail/ComicRight/Comments/Comments";
import Image from "next/image";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
declare interface CommentBoxProps {
  className?: string;
  comment: commentType;
}

const prefix = "comment-box";
const CommentBox: FC<CommentBoxProps> = ({ className, comment }) => {
  const { avatar, createdDate, message, totalLike, totalReply, userName } =
    comment ?? {};

  const renderInfoPreview = () =>
    [
      {
        icon: <LikeOutlined size={20} />,
        content: totalLike,
      },
      {
        icon: <MessageOutlined size={20} />,
        content: totalReply,
      },
    ].map((el, index) => (
      <div key={index}>
        <span className="icon mr-10">{el?.icon}</span>

        <span className="content mr-10">{el.content}</span>
      </div>
    ));

  return (
    <div
      className={classnames(prefix, {
        [`${className}`]: className !== "",
        "my-16": true,
      })}
    >
      <div className={`${prefix}-wrapper`}>
        <div className="avatar mr-16">
          <Image src={avatar} alt="avatar" width={32} height={32} />
        </div>
        <div className="info">
          <div className="info--title mb-4">
            <div className="user-name mr-8">{userName}</div>
            <div className="create-date">{createdDate}</div>
          </div>

          <div className="info--message mb-12">{message}</div>

          <div className="info--preview">
            {renderInfoPreview()}

            <span className="action">Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
CommentBox.propTypes = {
  className: PropTypes.string,
};

CommentBox.defaultProps = {
  className: "",
};
