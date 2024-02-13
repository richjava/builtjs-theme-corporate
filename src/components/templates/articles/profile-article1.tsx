import Image from "next/image";
import { urlForImage, widthForImage, heightForImage } from "@/lib/utils";
import BlockContent from '@sanity/block-content-to-react';

export default function ProfileArticle1({ content }:any) {
  if (!content) return <></>;
  let { entry: author = null } = { ...content };

  let profile = author ? author.profile : null;
  return (
    <article id="profile-article1" className="template">
      {author && (
        <div className="max-w-screen-xl mx-auto relative">
          <header className="max-w-4xl mx-auto">
            <span className={`preheading blank left`}>
              {profile?.position}
            </span>
            <div className="flex items-center">
              <h1 className="mb-10">{author.fullName}</h1>
            </div>
          </header>
          {profile.profileImage && <div className="relative mb-20">
            <div className="h-96">
            <Image
            className="object-cover"
              src={urlForImage(profile?.profileImage)}
              fill
              style={{ objectFit: "cover" }}
              alt={author.fullName}
            />
           
            </div>
          </div>}
          <BlockContent blocks={profile?.bio} />

        </div>
      )}
    </article>
  );
}
