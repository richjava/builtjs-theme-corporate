import { ButtonLink, Preheading } from "@/components/elements";

export default function Block5({ content }: any) {
  if (!content) return <></>;
  let { data = null } = { ...content };
  return (
    <section id="block-5" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
          <div>
            <Preheading data={data.preheading}></Preheading>
            <h2 className="heading-05">{data.heading}</h2>
          </div>
          <div>
            <p className="paragraph-03">{data.blurb1}</p>
            <p className="paragraph-03 mb-8">{data.blurb2}</p>
            {data.buttonLinks &&
              data.buttonLinks.map((button: any) => {
                return (
                  <ButtonLink
                    key={button.type}
                    data={button}
                  ></ButtonLink>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
