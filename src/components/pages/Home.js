import sytles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={sytles.home_container}>
      <h1>
        Welcome to the <span>Costs</span>
      </h1>
      <p>Start to gerency your projects</p>
      <LinkButton to="/newproject" text="Create Project" />
      <img src={savings} alt="img"></img>
    </section>
  );
}

export default Home;
