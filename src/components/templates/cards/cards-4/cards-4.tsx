import { ButtonLink, Preheading } from "src/components/elements";

export default function Cards4({ content }: any) {
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
    <section id="cards-4" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {items &&
            items.map((item: any, i: number) => (
              <div
                key={i}
                className="p-8 bg-gray-100 rounded-lg dark:bg-gray-700"
              >
                <Preheading
                  attributes={item.preheading}
                ></Preheading>
                <h3 className="mb-4">{item.heading}</h3>
                <p className="mb-10">{item.blurb}</p>
                {item.buttonLinks &&
                  item.buttonLinks.map((button: any) => {
                    return (
                      <ButtonLink
                        key={button.type}
                        attributes={button}
                      ></ButtonLink>
                    );
                  })}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
