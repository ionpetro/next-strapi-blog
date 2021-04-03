import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

const Seo = ({ seo }) => {
  const { defaultSeo, siteName } = useContext(GlobalContext);
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  };
};
