import Link from "next/link";
import { urlForImage, collectionSlug, entrySlug } from "@/lib/utils";
import Image from "next/image";

export default function List2({ content, router }: any) {
  if (!content) return <></>;
  const { collections } = content;
  if (!collections) {
    return <></>;
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];

  return (
    <section id="list-2" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {collection &&
            collection.map((entry: any) => {
              return (
                <div key={entry.slug}>
                  <div>
                    <Link
                      className="w-24"
                      href={`/${collectionName}/${entry.slug}`}
                    >
                      <div className="relative mb-6 transition-opacity h-96 lg:h-56 hover:opacity-80">
                        {entry.image && (
                          <Image
                            className="bg-secondaryrounded-corner-03"
                            src={urlForImage(entry.image)}
                            fill
                            style={{objectFit:"cover"}}
                            alt={entry.title}
                          />
                        )}
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="no-underline"
                      href={`/${collectionSlug(entry)}/${entrySlug(entry)}`}
                    >
                      <h3 className="mb-2 heading-04 hover:text-dark-02 dark:hover:text-light-03">
                        {entry.title}
                      </h3>
                    </Link>
                    <p className="paragraph-03">{entry.blurb}</p>
                    <Link
                      href={`/${collectionSlug(entry)}/${entrySlug(entry)}`}
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        {!collection.length && (
          <div>
            <p className="paragraph-03">No posts</p>
          </div>
        )}
      </div>
    </section>
  );
}
