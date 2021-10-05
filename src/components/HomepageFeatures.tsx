import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: <Translate description="feature exchange title">Nabe</Translate>,
    image: require("../../static/img/logo.png").default,
    description: (
      <Translate description="feature exchange description">
        The main course is Nabe. We are cooking hard and picking chefs to serve
        nabe to more delicious people.
      </Translate>
    ),
  },
  {
    title: <Translate description="feature farms title">Dessert</Translate>,
    image: require("../../static/img/pancake.png").default,
    description: (
      <Translate description="feature farms description">
        The dessert course is pancakes. To serve more delicious pancakes, we
        sprinkle sweet syrup and serve more delicious and delicious cakes.
      </Translate>
    ),
  },
  {
    title: (
      <Translate description="feature liquidity pool title">Lottery</Translate>
    ),
    image: require("../../static/img/gachagacha.png").default,
    description: (
      <Translate description="feature liquidity pool description">
        We are holding events such as a meal ticket lottery to make it fun in
        addition to delicious dishes.
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
