import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/lib/utils";
import { ButtonLink, Preheading } from "@/components/elements";

export default function List1({ content }: any) {
  if (!content) return <></>;
  let { collections = null } = { ...content };
  if (!collections) {
    return <></>;
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];

  return (
    <section id="list-1" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-y-24">
          {collection &&
            collection.map((entry: any, i: number) => (
              <div
                key={i}
                className="items-center grid grid-cols-1 gap-10 lg:grid-cols-2"
              >
                <div className={`${i % 2 === 0 ? "" : "lg:order-last"}`}>
                  <div className="relative">
                    {entry.image && (
                      <Image
                        className="bg-gray-100 rounded-lg"
                        src={urlForImage(entry.image)}
                        width={widthForImage(entry.image)}
                        height={heightForImage(entry.image)}
                        style={{ objectFit: "cover" }}
                        alt={entry.title}
                      />
                    )}
                  </div>
                </div>

                <div>
                  {entry.preheading && (
                    <Preheading data={entry.preheading}></Preheading>
                  )}
                  <h2>{entry.title}</h2>
                  <p className="mb-12">{entry.blurb}</p>
                  {entry.buttonLinks &&
                    entry.buttonLinks.map((button: any) => {
                      return (
                        <ButtonLink
                          key={button.type}
                          data={button}
                        ></ButtonLink>
                      );
                    })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
