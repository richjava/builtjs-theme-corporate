import {
  Preheading,
  SocialLink,
  Field,
  ContextualLink,
  Button,
} from "@/components/elements";

export default function Form1({ content }: any) {
  if (!content) return <></>;
  let { data = null, collections = null } = { ...content };
  if (!collections) {
    throw new Error(
      `No collections attribute provided in sections.json for template`
    );
  }
  let socialLinks = [];
  if (collections && collections["social-links"]) {
    socialLinks = collections["social-links"];
  }
  return (
    <section id="form-1" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="items-center grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          <div>
            <Preheading data={data.preheading}></Preheading>
            <h1>{data.heading}</h1>
            <p className="max-w-xl mb-12 text-lg">{data.blurb}</p>
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
              {/* TODO: Form button needs wiring up */}
              <Button data={data.button}></Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
