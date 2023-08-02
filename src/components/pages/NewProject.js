import { useNavigate } from "react-router-dom";
import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        });
      });
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criate Project</h1>
      <p>Create your project to add extra services</p>
      <ProjectForm handleSubmit={createPost} btnText="Create Project" />
    </div>
  );
}

export default NewProject;
