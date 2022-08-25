import classes from "src/components/Links/Links.module.css";

export const Links = (props) => {
  return (
    <div className={classes.grid}>
      {props.items.map((ITEMS) => (
        <a key={ITEMS.href} href={ITEMS.href} className={classes.card}>
          <h2 className={classes.title}>{ITEMS.title}</h2>
          <p className={classes.description}>{ITEMS.description}</p>
        </a>
      ))}
    </div>
  );
};
