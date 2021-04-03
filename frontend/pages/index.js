import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Articles from "../components/articles";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <div>
      <Layout categories={categories} />
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
