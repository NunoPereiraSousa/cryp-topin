import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import Head from "next/head";
import { components } from "../slices";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

// PASS NAVIGATION INSIDE LAYOUT COMPONENT navigation={navigation} menus={menus}

export default function Page({
  navigation,
  menus,
  page,
  footer,
  metaTitle,
  metaDescription,
}) {
  return (
    <Layout>
      <Head>
        <title>Title</title>
        <meta name="title" content="Title" />
        <meta name="description" content="Title" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={menus}
      />
      <Footer footer={footer.data} />
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage", {
    fetchLinks:
      "blog_post.headline, blog_post.description, blog_post.image, blog_post.date",
  });
  const footer = await client.getSingle("footer");
  //   const navigation = await client.getSingle("navigation");
  //   const menus = await client.getSingle("menus");

  return {
    props: {
      //   navigation,
      //   menus,
      page,
      footer,
      //   metaTitle: page.data.meta_title,
      //   metaDescription: page.data.meta_description,
    },
  };
}
