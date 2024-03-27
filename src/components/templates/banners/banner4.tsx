import { ButtonLink } from "@/components/elements";

export default function Banner4({ content }: any) {
  if (!content) return <></>;
  let { data = null } = { ...content };
  return (
    <section id="banner-4" className="template">
      <div className="mx-auto max-w-screen-lg">
        <div className="px-4 py-20 text-center bg-primary rounded-corner-03 dark:bg-dark-02">
          <h2 className="heading-05">{data.heading}</h2>
          <p className="max-w-xl mx-auto mb-12">{data.blurb}</p>
          {data.buttonLinks &&
            data.buttonLinks.map((button: any) => {
              return (
                <ButtonLink key={button.type} data={button}></ButtonLink>
              );
            })}
        </div>
      </div>
    </section>
  );
}
