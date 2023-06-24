import Head from "next/head";
import { urlForImage } from "@/lib/images";

export default function Seo( {content}:any ) {
  let { attributes = {} } = { ...content };
  let shareImage = urlForImage(attributes?.shareImage);
  return (
    <>
      {attributes && (
        <Head>
          {attributes.pageTitle && (
            <>
              <title>{attributes.pageTitle}</title>
              <meta property="og:title" content={attributes.pageTitle} />
              <meta name="twitter:title" content={attributes.pageTitle} />
            </>
          )}
          {attributes.description && (
            <>
              <meta name="description" content={attributes.description} />
              <meta
                property="og:description"
                content={attributes.description}
              />
              <meta
                name="twitter:description"
                content={attributes.description}
              />
            </>
          )}
          {attributes.shareImage && (
            <>
              <meta property="og:image" content={shareImage} />
              <meta name="twitter:image" content={shareImage} />
              <meta name="image" content={shareImage} />
            </>
          )}
          {attributes.article && <meta property="og:type" content="article" />}
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      )}
    </>
  );
}
