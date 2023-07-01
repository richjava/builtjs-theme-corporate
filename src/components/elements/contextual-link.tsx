import Link from "next/link";
import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/lib/images";

export default function ContextualLink({ attributes }:any) {
  if (!attributes) return <></>;
  return (
    <div key={attributes.url} className="flex items-start">
      <Image
          height={heightForImage(attributes?.icon)}
          width={widthForImage(attributes?.icon)}
          src={urlForImage(attributes?.icon)}
          alt={attributes.slug}
        />
      <div className="ml-4">
        <p>{attributes.text}</p>
        <Link href={attributes.url}>
          {attributes.label}
        </Link>
      </div>
    </div>
  );
}
