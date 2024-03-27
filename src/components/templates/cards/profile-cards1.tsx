import Image from "next/image";
import Link from "next/link";
import { urlForImage, collectionSlug, entrySlug } from "@/lib/utils";

export default function ProfileCards1({ content }: any) {
  if (!content) return <></>;
  let { collections = null } = { ...content };
  let data: any = null;
  const DEFAULT_COLS = 3;
  const cols = (data && data.columns) || DEFAULT_COLS;
  if (!collections) {
    throw new Error("No template collections");
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];

  return (
    <section id="profile-cards-1" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-${cols}`}
        >
          {collection &&
            collection.slice(0, cols).map((author: any, i: number) => (
              <div key={i}>
                <Link href={`/${collectionSlug(author)}/${entrySlug(author)}`}>
                  <div className="relative w-full h-56 transition-opacity rounded-b-none hover:opacity-80">
                    <Image
                      className="rounded-b-none"
                      src={urlForImage(author?.profile?.profileImage)}
                      fill
                      style={{ objectFit: "cover" }}
                      alt={author.fullName}
                    />
                  </div>
                </Link>
                <div className="p-6 px-8 border border-t-0 rounded-b-lg border-light-03 dark:border-dark-02">
                  <span className={`preheading blank left`}>
                    {author.position}
                  </span>
                  <Link
                    className="no-underline"
                    href={`/${collectionSlug(author)}/${entrySlug(author)}`}
                  >
                    <h3 className="mb-4 heading-04 hover:text-dark-02 dark:hover:text-light-03">
                      {author.fullName}
                    </h3>
                  </Link>
                  <p className="paragraph-03">{author?.profile?.excerpt}</p>
                  <Link
                    className="dark:text-light-04"
                    href={`/${collectionSlug(author)}/${entrySlug(author)}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
