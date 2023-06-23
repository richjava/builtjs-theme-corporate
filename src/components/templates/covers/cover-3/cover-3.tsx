import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/lib/images";
import { ButtonLink, Preheading } from "@/components/elements";

export default function Cover3({ content }: any) {
  if (!content) return <></>;
  let { attributes = null } = { ...content };

  return (
    <section id="cover-3" className="p-0 template">
      <div className="grid grid-cols-1 lg:items-center lg:min-h-screen lg:grid-cols-2">
        <div className="relative py-64 lg:h-full lg:order-last">
          <Image
            className="rounded-none"
            src={urlForImage(attributes?.image)}
            layout="fill"
            objectFit="cover"
            alt={attributes.heading}
          />
        </div>
        <div>
          <div className="px-4 pt-10 pb-20 lg:px-8 lg:mx-auto lg:max-w-xl lg:py-40">
            <Preheading attributes={attributes.preheading}></Preheading>
            <h1>{attributes.heading}</h1>
            <p className="mb-12 text-lg">{attributes.blurb}</p>
            {attributes.buttonLinks &&
              attributes.buttonLinks.map((button: any) => {
                return (
                  <ButtonLink
                    key={button.type}
                    attributes={button}
                  ></ButtonLink>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
