import Link from "next/link";
import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/lib/images";

export default function SocialLink({ attributes }:any) {
  if (!attributes) return <></>;
  return (
    <Link key={attributes.url} href={attributes.url}>
        <Image
          height={heightForImage(attributes?.icon)}
          width={widthForImage(attributes?.icon)}
          src={urlForImage(attributes?.icon)}
          alt={attributes.slug}
        />
    </Link>
  );
}
