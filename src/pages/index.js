import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.header}>
        <h1>🔧 Herramientas del Navegador para Desarrolladores</h1>
        <p>Aprende a inspeccionar, depurar y optimizar tus sitios con DevTools</p>
        <div className={styles.buttonContainer}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Empezar ahora
          </Link>
        </div>
    </header>
  );
}

/*export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}*/

export default function Home(){
  const {siteConfig} = useDocusaurusContext();

  return(
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}