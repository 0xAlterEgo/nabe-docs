import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

const HomepageHeader = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate>Nabe Finance</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>Let's eat Nabe on Binance Smart Chain</Translate>
        </p>
      </div>
    </header>
  );
};

const Home = () => {
  return (
    <Layout
      title={translate({
        message: "Home",
        description: "layout title",
      })}
      description={translate({
        message: "Let's eat Nabe on Binance Smart Chain",
        description: "layout description",
      })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
