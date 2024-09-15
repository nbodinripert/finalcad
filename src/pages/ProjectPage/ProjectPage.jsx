import { useLoaderData, useNavigate } from "react-router-dom";
import previousImg from "../../assets/previous.png";
import Badge from "../../components/Badge/Badge";
import "./ProjectPage.css";

const ProjectPage = () => {
  //#region [router]
  const { project } = useLoaderData();
  const navigate = useNavigate();
  //#endregion

  //#region [render]
  return (
    <div className="project-page">
      <div className="project-page-previous" onClick={() => navigate("/")}>
        <img src={previousImg} alt="previous" />
        Gare de Lyon Part-Dieu
      </div>
      <div className="project-page-data">
        <h1>{project.name}</h1>
        <p className="project-page-data-details">
          <span>
            created by {project.created_by.first_name}{" "}
            {project.created_by.last_name}
          </span>
          <Badge color={project.status.color}>{project.status.name}</Badge>
        </p>
        <div className="project-page-data-card">
          <p>Template name: {project.template_name}</p>
          <p>Phase: {project.phase}</p>
          <p
            style={{
              color:
                project.status.id === "c5b09445-e39e-4c0a-89dc-5aee81be046c"
                  ? "rgb(193 204 218)"
                  : "#E94F3C",
            }}
          >
            Due date: {new Date(project.due_date).toLocaleDateString("en-US")}
          </p>
        </div>
      </div>
    </div>
  );
  //#endregion
};

export default ProjectPage;
