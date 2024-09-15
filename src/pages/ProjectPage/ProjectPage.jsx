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
      <p className="project-page-created-by">
        created by {project.created_by.first_name}{" "}
        {project.created_by.last_name}
      </p>
      <hr />
      <h2>Details</h2>
      <div className="project-page-details">
        <div className="label">Template name</div>
        <div>{project.template_name}</div>
        <div className="label">Status</div>
        <Badge color={project.status.color}>{project.status.name}</Badge>
        <div className="label">Phase</div>
        <div>{project.phase}</div>
        <div className="label">Due date</div>
        <div
          className={
            project.status.id !== "c5b09445-e39e-4c0a-89dc-5aee81be046c"
              ? "urgent"
              : ""
          }
        >
          {new Date(project.due_date).toLocaleDateString("en-US")}
        </div>
      </div>
    </div>
  );
  //#endregion
};

export default ProjectPage;
