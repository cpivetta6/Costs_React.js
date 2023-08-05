import styles from "./Loading.module.css";
import loading from "../../img/loading.svg";
function Loading() {
  return (
    <div className={styles.loading_container}>
      <img className={styles.loader} src={loading} alt="Loading"></img>
    </div>
  );
}

export default Loading;
