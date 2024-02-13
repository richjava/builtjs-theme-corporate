import { ButtonLink } from "@/components/elements";

export default function Banner4({ content }: any) {
  if (!content) return <></>;
  let { data = null, variants = null } = { ...content };
  const backgroundColor =
    variants && variants.backgroundColor
      ? `bg-${variants.backgroundColor}`
      : "";
  return (
    <section id="banner-4" className={`template ${backgroundColor}`}>
      <div className="mx-auto max-w-screen-lg">
        <div className="px-4 py-20 text-center bg-gray-100 rounded-lg dark:bg-gray-700">
          <h2>{data.heading}</h2>
          <p className="max-w-xl mx-auto mb-12 text-lg">{data.blurb}</p>
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
