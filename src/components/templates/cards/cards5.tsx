import Image from "next/image";
import Link from "next/link";
import { urlForImage, collectionSlug, entrySlug } from "@/lib/utils";

export default function Cards5({ content }: any) {
  if (!content) return <></>;
  let { collections = null } = { ...content };
  let data: any = null;
  const DEFAULT_COLS = 3;
  const cols = (data && data.columns) || DEFAULT_COLS;
  if (!collections) {
    return <></>;
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];

  return (
    <section id="cards-5" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-${cols}`}
        >
          {collection &&
            collection.slice(0, cols).map((entry: any, i: number) => (
              <div key={i}>
                <Link
                  href={`/${collectionSlug(collectionName)}/${entrySlug(
                    entry
                  )}`}
                >
                  <div className="relative w-full h-56 transition-opacity rounded-b-none hover:opacity-80">
                    <Image
                      className="rounded-b-none"
                      src={urlForImage(entry.image)}
                      fill
                      style={{ objectFit: "cover" }}
                      alt={entry.title}
                    />
                  </div>
                </Link>
                <div className="p-8 border border-t-0 border-light-03 rounded-b-lg dark:border-dark-02">
                  <Link
                    className="no-underline"
                    href={`/${collectionSlug(collectionName)}/${entrySlug(
                      entry
                    )}`}
                  >
                    <h3 className="heading-04 mb-4 hover:text-dark-02 dark:hover:text-light-04">
                      {entry.title}
                    </h3>
                  </Link>
                  <p className="paragraph-03">{entry.blurb}</p>
                  <Link
                    href={`/${collectionSlug(collectionName)}/${entrySlug(
                      entry
                    )}`}
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
