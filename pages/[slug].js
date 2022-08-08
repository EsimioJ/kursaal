import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";
import { getAllPagesWithSlugs, getPageBySlug } from "../lib/api";

function Page(page) {
  return (
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <div className="flex flex-col p-10">
          <div className="mb-5 text-4xl font-bold">{page.title}</div>
          <div
            className="text-base text-grey-darker"
            dangerouslySetInnerHTML={{ __html: page.content }}
          ></div>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const pagesWithSlugs = await getAllPagesWithSlugs();
  return {
    paths: pagesWithSlugs.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params.slug);
  return { props: page };
}

export default Page;
