import { ButtonLink } from "@/components/elements";

export default function Banner1({ content }:any) {
  if (!content) return <></>;
  let { data=null} = {...content};
  return (
    <section id="banner-1" className="template">
      <div className="px-4 py-20 text-center bg-primary dark:bg-dark-02">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="heading-05">{data.heading}</h2>
          <p className="max-w-xl mx-auto mb-12 paragraph-03">{data.blurb}</p>
          {data.buttonLinks &&
            data.buttonLinks.map((button:any) => {
              return <ButtonLink key={button.type} data={button}></ButtonLink>;
            })}
        </div>
      </div>
    </section>
  );
}
