import Link from "next/link";
import Image from "next/image";
import { urlForImage, widthForImage, heightForImage, entrySlug } from "@/lib/utils";

export default function ContextualLink({ data }:any) {
  if (!data) return <></>;
  return (
    <div key={data.url} className="flex items-start">
      <Image
          height={heightForImage(data?.icon)}
          width={widthForImage(data?.icon)}
          src={urlForImage(data?.icon)}
          alt={entrySlug(data)}
        />
      <div className="ml-4">
        <p className="paragraph-03">{data.text}</p>
        <Link className="dark:text-light-04" href={data.url}>
          {data.label}
        </Link>
      </div>
    </div>
  );
}
