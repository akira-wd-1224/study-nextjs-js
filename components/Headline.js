import styles from "../styles/Home.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.title} page</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{props.title}.js</code>
      </p>
    </div>
  );
}
