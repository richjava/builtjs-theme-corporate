import { GetStaticPaths, GetStaticProps } from 'next';
import { withRouter } from "next/router";
import { getConfig, getEntries } from "@builtjs/theme";
import Page from "@/lib/page";
import { entrySlug } from "@/lib/utils";
import { pages } from "@/lib/constants";

export default withRouter(Page);

export const getStaticPaths: GetStaticPaths = async () => {
  const name = 'author';
  const allEntries:any = await getEntries(name);
  return {
    paths: allEntries.entries.map((entry: any) => `/${name}/${entrySlug(entry)}`) ?? [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const config = await getConfig(pages.AUTHOR_ARTICLE);
  config.params = context.params;
  return {
    props: { config }
  };
};