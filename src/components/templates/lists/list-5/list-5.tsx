import Link from "next/link";
import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/lib/images";
import { format } from "date-fns";

export default function List5({ content, router }: any) {
  if (!content) return <></>;
  const { collections } = content;
  if (!collections) {
    return <></>;
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.data;
  }

  return (
    <section id="list-5" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {items &&
            items.map((item: any) => {
              return (
                <div key={item.slug}>
                  <div>
                    <Link
                      className="w-24"
                      href={`/${collectionName}/${item.slug}`}
                    >
                      <div className="relative mb-6 transition-opacity h-96 lg:h-56 hover:opacity-80">
                        <Image 
                          className="bg-gray-100 rounded-lg"
                          src={urlForImage(item?.image)}
                          layout="fill"
                          objectFit="cover"
                          alt={item.heading}
                        />
                      </div>
                    </Link>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <p className="mb-0 text-sm capitalize preheading">
                        {format(new Date(item.date), "dd LLLL yyyy")}
                      </p>
                      <span className="mx-3 text-gray-400">|</span>
                      {item.category && (
                        <Link
                          className="no-underline hover:underline"
                          href={`/`}
                        >
                          <p className="mb-0 text-sm capitalize">
                            {item.category}
                          </p>
                        </Link>
                      )}
                    </div>
                    <Link
                      className="no-underline"
                      href={`/${collectionName}/${item.slug}`}
                    >
                      <h3 className="mb-2 hover:text-gray-700 dark:hover:text-gray-200">
                        {item.heading}
                      </h3>
                    </Link>
                    <p>{item.blurb}</p>
                    <Link href={`/${collectionName}/${item.slug}`}>
                      Read Article
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        {!items.length && (
          <div>
            <p>No posts</p>
          </div>
        )}
      </div>
    </section>
  );
}
