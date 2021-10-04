import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: <Translate description="feature exchange title">Maximum</Translate>,
    image: require("../../static/img/pancake.png").default,
    description: (
      <Translate description="feature exchange description">
        When you deposit your cake in our Nabe pot, our chef makes delicious
        cakes and Nabe.
      </Translate>
    ),
  },
  {
    title: <Translate description="feature farms title">Gacha</Translate>,
    image: require("../../static/img/gachagacha.png").default,
    description: (
      <Translate description="feature farms description">
        We don't just receive nabe for a more fun meal, but we help you eat more
        fun and full with a lottery system.
      </Translate>
    ),
  },
  {
    title: (
      <Translate description="feature liquidity pool title">NFT</Translate>
    ),
    image: require("../../static/img/painter.png").default,
    description: (
      <Translate description="feature liquidity pool description">
        hmm...
      </Translate>
    ),
  },
];

const Feature = ({ image, title, description }) => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomepageFeatures = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
