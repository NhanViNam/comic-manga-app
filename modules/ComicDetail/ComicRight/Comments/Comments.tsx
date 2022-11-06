import React, { FC } from "react";
import OwnerUrl from "public/images/owner.svg";
import AuthorUrl from "public/images/author.svg";
import CommentBox from "@components/CommentBox/CommentBox";
import { Button, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

declare interface CommentsProps {
  className: string;
}

export declare type commentType = {
  avatar: string;
  userName: string;
  createdDate: string;
  totalLike: number;
  totalReply: number;
  message: string;
};

const data: commentType[] = [
  {
    avatar: AuthorUrl?.src,
    userName: "Han Solo",
    createdDate: "Commented on Chapter 35 • 24 min. ago",
    totalLike: 61,
    totalReply: 12,
    message:
      "I had no idea such a sequel was coming as I thought the show had ended and Kyoto Animation took a hard hit from the tragedy but currently 4 episodes in as of writing this review, and I love every second of it.",
  },
  {
    avatar: AuthorUrl?.src,
    userName: "Han Solo",
    createdDate: "Commented on Chapter 35 • 24 min. ago",
    totalLike: 61,
    totalReply: 12,
    message:
      "I had no idea such a sequel was coming as I thought the show had ended and Kyoto Animation took a hard hit from the tragedy but currently 4 episodes in as of writing this review, and I love every second of it.",
  },
];
const Comments: FC<CommentsProps> = ({ className }) => {
  const _prefix = `${className}-comments`;
  const totalComment =
    data.length +
    data.reduce((acc, { totalReply }) => {
      return acc + totalReply;
    }, 0);

  const renderComments = () => {
    return data.map((comment, index) => {
      return <CommentBox key={index} comment={comment} />;
    });
  };

  return (
    <div className={_prefix}>
      <div className={`${_prefix}--title`}>{totalComment} Comments</div>
      <div className={`${_prefix}--comments`}>{renderComments()}</div>

      <div className={`${_prefix}--reply`}>
        <div
          className="owner"
          style={{ backgroundImage: `url(${OwnerUrl?.src})` }}
        />

        <Input placeholder="Add your comment" />
      </div>

      <div className={`${_prefix}--submit`}>
        <Button icon={<SendOutlined />} className="flex-center">
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default Comments;
