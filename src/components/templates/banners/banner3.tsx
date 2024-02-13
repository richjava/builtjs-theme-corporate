import { ButtonLink } from "@/components/elements";

export default function Banner3({ content }: any) {
  if (!content) return <></>;
  let { data = null, variants = null } = { ...content };
  const backgroundColor =
    variants && variants.backgroundColor
      ? `bg-${variants.backgroundColor}`
      : "";
  return (
    <section id="banner-3" className={`template p-0 ${backgroundColor}`}>
      <div className="px-4 py-20 bg-gray-100 dark:bg-gray-700">
        <div className="mx-auto max-w-screen-lg">
          <div className="items-center grid grid-cols-1 gap-x-6 md:grid-cols-4">
            <div className="col-span-3">
              <h2>{data.heading}</h2>
              <p className="max-w-xl mb-12 text-lg md:mb-0">
                {data.blurb}
              </p>
            </div>
            <div className="md:text-right">
              {data.buttonLinks &&
                data.buttonLinks.map((button:any) => {
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
      </div>
    </section>
  );
}
