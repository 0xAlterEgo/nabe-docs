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
        Sweet CAKE never goes wrong! But, if you just put your cake into the
        NABE pot, you can enjoy the main dish, NABE, and the sweet dessert!
        Don't forget, patient investors will get the extra CAKE as an interest!
      </Translate>
    ),
  },
  {
    title: (
      <Translate description="feature liquidity pool title">Lottery</Translate>
    ),
    image: require("../../static/img/fukubiki.png").default,
    description: (
      <Translate description="feature liquidity pool description">
        Click-click! You just draw a 3% possibility of SSR! You will get an
        entry ticket by crypto asset deposit. Just put the entry ticket and get
        the chance for the higher rewards! You can be the winner of the Gacha
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
