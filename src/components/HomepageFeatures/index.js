import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const features = [
  {
    icon: '🕵️‍♂️',
    title: '👤 Inspección visual',
    description: 'Aprende a navegar por el DOM y los estilos en tiempo real.'
  },
  {
    icon: '🖥',
    title: '💻 Consola JS',
    description: 'Ejecuta scripts, depura errores y controla el navegador desde dentro.'
  }, 
  {
    icon: '📊',
    title: '📈 Rendimiento',
    description: 'Detecta cuellos de botella y mejora el tiempo de carga.'
  }
]

function MessageContainer(){
  return (
    <div className={styles.messageContainer}>
      <h2>Conocer DevTools transformó la forma en que desarrollo.</h2>
      <p>- Un desarrollador feliz</p>
    </div>
  )
}

function RedirectContainer(){
  return (
    <div className={styles.redirectContainer}>
      <h2>¿Listo para explorar las DevTools?</h2>
      <div className={styles.buttonContainer}>
        <Link to="/docs/intro">Ir a la guía inicial</Link>
      </div>
    </div>
  )
}

function Feature({icon, title, description}) {
  return (
    <div className={styles.descriptionItem}>
      <span className={styles.titleIcon}>{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.description}>
        {features.map((feature, idx) => (
          <Feature key={idx} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
      <MessageContainer />
      <RedirectContainer /> 
    </section>
  );
}
