import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/lib/images";
import { ButtonLink, Preheading } from "src/components/elements";

export default function List3({ content }: any) {
  if (!content) return <></>;
  let { collections = null } = { ...content };
  if (!collections) {
    throw new Error(
      `No collections attribute provided in sections.json for template`
    );
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.data;
  }

  return (
    <section id="list-3" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-y-24">
          {items &&
            items.map((item: any, i: number) => (
              <div
                key={i}
                className="items-center grid grid-cols-1 gap-10 lg:grid-cols-2"
              >
                <div className="lg:order-last">
                  <div className="relative">
                    <Image
                      src={urlForImage(item?.attributes?.image)}
                      width={widthForImage(item?.attributes?.image)}
                      height={heightForImage(item?.attributes?.image)}
                      layout="responsive"
                      alt={item.attributes.heading}
                    />
                  </div>
                </div>

                <div>
                  <Preheading
                    attributes={item.attributes.preheading}
                  ></Preheading>
                  <h2>{item.attributes.heading}</h2>
                  <p className="mb-12">{item.attributes.blurb}</p>
                  {item.attributes.buttonLinks &&
                    item.attributes.buttonLinks.map((button: any) => {
                      return (
                        <ButtonLink
                          key={button.type}
                          attributes={button}
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
