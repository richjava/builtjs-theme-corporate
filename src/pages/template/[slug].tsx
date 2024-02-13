import { GetStaticPaths, GetStaticProps } from 'next';
import { withRouter } from "next/router";
import { getConfig, getData } from "@builtjs/theme";
import Page from "../../lib/page";
import { pageTypes } from "../../lib/constants";

export default withRouter(Page);

export const getStaticPaths: GetStaticPaths = async () => {
  const pageType = 'template'
  let pageData = await getData("/data/pages.json");
  let pages = pageData.pages.reduce(
    (acc:any, page:any) =>
      page.type === pageType ? [...acc, `/${pageType}/${page.slug}`] : acc,
    []
  );
  return {
    paths: pages,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context:any) => {
  const { slug } = context.params;
  const config = await getConfig(slug, pageTypes.TEMPLATE);
  return {
    props: { config }
  };
};

