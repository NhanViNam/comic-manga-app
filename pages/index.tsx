import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";

import dynamic from "next/dynamic";
import { Suspense } from "react";

interface ComicPageProps {
  comics: any;
}

const DynamicComicModule = dynamic(
  () => import("@modules/ComicDetail/ComicDetail"),
  {
    suspense: true,
  }
);

export default function ComicPage(props: ComicPageProps) {
  return (
    <Suspense fallback={`Loading...`}>
      <div className="comic-detail-page">
        <DynamicComicModule />
      </div>
    </Suspense>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      comics: {},
    },
  };
};
