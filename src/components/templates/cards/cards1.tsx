import { ButtonLink, Preheading } from "@/components/elements";

export default function Cards1({ content }: any) {
  if (!content) return <></>;
  let { collections = null } = { ...content };
  if (!collections) {
    return <></>;
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];

  return (
    <section id="cards-1" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {collection &&
            collection.map((entry: any, i: number) => (
              <div
                key={i}
                className="p-8 border rounded-corner-03 border-light-03 dark:border-dark-02"
              >
                <Preheading
                  data={entry.preheading}
                ></Preheading>
                <h3 className="mb-4 heading-04">{entry.title}</h3>
                <p className="mb-10 paragraph-03">{entry.blurb}</p>
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
            ))}
        </div>
      </div>
    </section>
  );
}
