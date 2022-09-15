import { Helmet } from "react-helmet";

export function HtmlHead({ title, description }) {
  return (
    <Helmet>
      <title>{`${title} · Porsenigama UGM 2022`}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
