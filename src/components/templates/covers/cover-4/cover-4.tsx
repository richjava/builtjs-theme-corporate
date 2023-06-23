import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/lib/images";
import { ButtonLink, Preheading } from "src/components/elements";

export default function Cover4({ content }: any) {
  if (!content) return <></>;
  let { attributes = null } = { ...content };

  return (
    <section id="cover-4" className="p-0 template">
      <div className="lg:flex lg:items-center lg:min-h-screen">
        <div className="w-full max-w-screen-xl px-4 py-20 mx-auto ">
          <div className="pb-24 text-center">
            <Preheading attributes={attributes.preheading}></Preheading>
            <h1 className="max-w-5xl mx-auto">{attributes.heading}</h1>
            <p className="max-w-xl mx-auto mb-12 text-lg">{attributes.blurb}</p>
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
          <div className="relative">
            <Image
              src={urlForImage(attributes?.image)}
              width={widthForImage(attributes?.image)}
              height={heightForImage(attributes?.image)}
              layout="responsive"
              alt={attributes.heading}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
