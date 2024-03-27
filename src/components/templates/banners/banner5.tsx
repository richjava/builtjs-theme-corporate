import { ButtonLink } from "@/components/elements";

export default function Banner5({ content }:any) {
  if (!content) return <></>;
  let { data } = content;
  return (
    <section id="banner-5" className="template">
      <div className="mx-auto max-w-screen-lg">
        <div className="px-10 py-20 bg-primary rounded-corner-03 dark:bg-dark-02">
          <div className="items-center grid grid-cols-1 gap-x-6 md:grid-cols-4">
            <div className="col-span-3">
              <h2 className="heading-05">{data.heading}</h2>
              <p className="max-w-xl mb-12 md:mb-0">{data.blurb}</p>
            </div>
            <div className="md:text-right">
              {data.buttonLinks &&
                data.buttonLinks.map((button:any) => {
                  return <ButtonLink key={button.type} data={button}></ButtonLink>;
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
