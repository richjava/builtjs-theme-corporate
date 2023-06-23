import React from "react";
import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/lib/images";
import { ButtonLink, Preheading } from "src/components/elements";

export default function Cover5({ content }: any) {
  if (!content) return <></>;
  let { attributes = null } = { ...content };

  return (
    <section id="cover-5" className="p-0 template">
      <div className="relative flex items-center min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            className="rounded-none"
            src={urlForImage(attributes?.image)}
            layout="fill"
            objectFit="cover"
            alt={attributes.heading}
          />
        </div>

        <div className="relative z-10 px-4 py-20 mx-auto text-center lg:py-40">
          <Preheading attributes={attributes.preheading}></Preheading>
          <h1 className="max-w-5xl mx-auto">{attributes.heading}</h1>
          <p className="max-w-xl mx-auto mb-12 text-lg text-whit dark:text-white">
            {attributes.blurb}
          </p>
          {attributes.buttonLinks &&
            attributes.buttonLinks.map((button: any) => {
              return (
                <ButtonLink key={button.type} attributes={button}></ButtonLink>
              );
            })}
        </div>
      </div>
    </section>
  );
}
