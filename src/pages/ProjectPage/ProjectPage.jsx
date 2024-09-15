import { useLoaderData } from "react-router-dom";
import Badge from "../../components/Badge/Badge";
import "./ProjectPage.css";

const ProjectPage = () => {
  //#region [router]
  const { project } = useLoaderData();
  //#endregion

  //#region [render]
  return (
    <div className="project-page">
      <h1>{project.name}</h1>
      <div className="project-page-details">
        <span>
          created by {project.created_by.first_name}{" "}
          {project.created_by.last_name}
        </span>
        <Badge color={project.status.color}>{project.status.name}</Badge>
      </div>
      <div className="project-page-card">
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
  );
  //#endregion
};

export default ProjectPage;
