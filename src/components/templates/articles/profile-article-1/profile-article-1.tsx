import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/lib/images";

const getHTML = (content:any) => {
  return {
    __html: content,
  };
};

export default function ProfileArticle1({ content }:any) {
  if (!content) return <></>;
  let { item = null } = { ...content };
  return (
    <article id="profile-article-1" className="template">
      {item && (
        <div className="max-w-screen-xl mx-auto">
          <header className="max-w-4xl mx-auto">
            <span className={`preheading blank left`}>
              {item.position}
            </span>
            <div className="flex items-center">
              <h1 className="mb-10">{item.fullName}</h1>
            </div>
          </header>
          <div className="relative mb-20">
            <Image
              src={urlForImage(item.profileImage)}
              width={widthForImage(item.profileImage)}
              height={heightForImage(item.profileImage)}
              layout="responsive"
              alt={item.fullName}
            />
          </div>
          <div
            className="max-w-2xl mx-auto"
            dangerouslySetInnerHTML={getHTML(item.bio)}
          ></div>
        </div>
      )}
    </article>
  );
}
