import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/lib/utils";
import { ButtonLink, Preheading } from "@/components/elements";

export default function Cover2({ content }: any) {
  if (!content) return <></>;
  let { data = null } = { ...content };

  return (
    <section id="cover-2" className="p-0 template">
      <div className="mx-auto lg:flex lg:items-center lg:min-h-screen max-w-screen-2xl">
        <div className="items-center grid grid-cols-1 gap-x-28 lg:grid-cols-2">
          <div className="p-4 lg:order-last">
            <Image
              className="rounded-full"
              src={urlForImage(data?.image)}
              width={widthForImage(data?.image)}
              height={heightForImage(data?.image)}
              style={{ objectFit: "cover" }}
              alt={data.heading}
            />
          </div>
          <div className="px-4 pt-10 pb-20 lg:py-40">
            <Preheading data={data.preheading}></Preheading>
            <h1>{data.heading}</h1>
            <p className="mb-12 text-lg">{data.blurb}</p>
            {data.buttonLinks &&
              data.buttonLinks.map((button: any) => {
                return (
                  <ButtonLink key={button.type} data={button}></ButtonLink>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}