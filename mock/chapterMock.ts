import { ChapterType } from "@modules/ComicDetail/ComicLeft/Chapters/Chapters";
import ImageChapter from "public/images/Chapter_thumbnail.svg";

export const createData = ({
  url,
  title,
  readDate,
  status,
  price,
  isRead,
}: ChapterType) => {
  return {
    url,
    title,
    readDate,
    status,
    price,
    isRead,
  };
};

export const dataLastRead: ChapterType[] = [
  createData({
    url: ImageChapter.src,
    title: "Chapter 1",
    readDate: "05/11/2022",
    status: "ACTIVITED",
    isRead: true,
  }),
  createData({
    url: ImageChapter.src,
    title: "Chapter 2",
    readDate: "03/11/2022",
    status: "ACTIVITED",
    isRead: false,
    price: 5,
  }),
  createData({
    url: ImageChapter.src,
    title: "Chapter 3",
    readDate: "01/11/2022",
    status: "LOCKED",
    isRead: true,
  }),
];

export const dataRelease = [
  createData({
    url: ImageChapter.src,
    title: "Chapter 1",
    readDate: "5/11/2022",
    status: "ACTIVITED",
    isRead: true,
  }),
  createData({
    url: ImageChapter.src,
    title: "Chapter 2",
    readDate: "3/11/2022",
    status: "ACTIVITED",
    isRead: true,
  }),
  createData({
    url: ImageChapter.src,
    title: "Chapter 3",
    readDate: "1/11/2022",
    status: "ACTIVITED",
    isRead: true,
  }),

  createData({
    url: ImageChapter.src,
    title: "Chapter 4",
    readDate: "5/11/2022",
    status: "ACTIVITED",
    price: 5,
    isRead: false,
  }),
  createData({
    url: ImageChapter.src,
    title: "Chapter 5",
    readDate: "3/11/2022",
    status: "LOCKED",
    price: 10,
    isRead: false,
  }),
  createData({
    url: ImageChapter.src,
    title: "Chapter 6",
    readDate: "1/11/2022",
    status: "ACTIVITED",
    price: 11,
    isRead: false,
  }),
];
