import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Mint mPay API',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Mint mPay API offers comprehensive REST support for seamless integration. Utilize HTTP requests to access JSON-formatted responses.
      </>
    ),
    link: '/docs/mpay/intro'
  },
  {
    title: 'Mint EFT API',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        MintEFT API facilitates payment processing with REST endpoints. It supports posting, updating, and authorizing transactions, with robust error handling and status tracking for secure financial operations.
      </>
    ),
    link: '/docs/eft/intro'
  },
  {
    title: 'Kuggar API',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The Kuggar API provides a RESTful interface for managing virtual cards on kuggar.io. It allows users to create, update, retrieve, and cancel virtual cards either by fetching from a cache or requesting directly from a provider.
      </>
    ),
    link: '/docs/kuggar/intro'
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4 card')}>
      <Link to={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
}
