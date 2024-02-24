import {
  Preheading,
  Field,
  ContextualLink,
  Button,
} from "@/components/elements";
import SocialLink from "@/components/shared/social-link";

export default function Form1({ content }: any) {
  if (!content) return <></>;
  let { data = null, collections = null } = { ...content };
  let socialLinks = [];
  if (collections && collections["socialLink"]) {
    socialLinks = collections["socialLink"];
  }

  return (
    <section id="form-2" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-20 text-center">
          <Preheading data={data.preheading}></Preheading>
          <h1>{data.heading}</h1>
          <p className="max-w-xl mx-auto text-lg">{data.blurb}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="mb-16 grid grid-cols-1 gap-y-12">
              {data.contextualLinks.map(
                (contextualLink: any, i: number) => {
                  return (
                    <ContextualLink
                      key={i}
                      data={contextualLink}
                    ></ContextualLink>
                  );
                }
              )}
            </div>
            <div className="items-center ml-10 grid grid-flow-col auto-cols-max gap-x-6">
              {socialLinks.map((socialLink: any, i: number) => {
                return (
                  <SocialLink
                    key={i}
                    data={socialLink}
                  ></SocialLink>
                );
              })}
            </div>
          </div>
          <div>
            <form action="#" method="POST">
              {data.fields.map((field: any, i: number) => {
                return <Field key={i} data={field}></Field>;
              })}
              <Button data={data.button}></Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
