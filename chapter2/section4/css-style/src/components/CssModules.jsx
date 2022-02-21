import classes from "./CssModules.module.scss";
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>cssmodules</p>
      <button className={classes.button}>テスト</button>
    </div>
  );
};