import { GetStaticPaths, GetStaticProps } from "next";
import { withRouter } from "next/router";
import { getConfig, getData } from "@builtjs/theme";
import Page from "@/lib/page";
import { pageTypes } from "@/lib/constants";
import fs from "fs";
import path from "path";

export default withRouter(Page);

export const getStaticPaths: GetStaticPaths = async () => {
  const pageType = "template";
  const filePath = path.join(process.cwd(), "public", "data", "pages.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const pageData = JSON.parse(jsonData);
  let pages = pageData.pages.reduce(
    (acc: any, page: any) =>
      page.type === pageType ? [...acc, `/${pageType}/${page.slug}`] : acc,
    []
  );
  return {
    paths: pages,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { slug } = context.params;
  const config = await getConfig(slug, pageTypes.TEMPLATE);
  return {
    props: { config },
  };
};
