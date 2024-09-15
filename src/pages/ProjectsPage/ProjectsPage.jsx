import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import logout from "../../assets/logout.png";
import lyonImg from "../../assets/lyon.jpg";
import Badge from "../../components/Badge/Badge";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  //#region [router]
  const navigate = useNavigate();
  const { projects } = useLoaderData();
  //#endregion

  //#region [states]
  const [currentPage, setCurrentPage] = useState(0);
  //#endregion

  //#region [methods]
  const handleLogout = () => {
    localStorage.removeItem("finalcad.token");
    navigate("/login");
  };
  //#endregion

  //#region [render]
  const projectsPerPage = parseInt((window.innerHeight - 320) / 70);
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );
  return (
    <div className="projects-page">
      <div className="projects-page-header">
        <div className="projects-page-header-left">
          <img src={lyonImg} alt="enterprise_img" />
          <div>
            <p>Gare de Lyon Part-Dieu</p>
            <p>gare-de-lyon-part-dieu | 1000 members</p>
          </div>
        </div>
        <div className="projects-page-header-right">
          <img src={logout} alt="logout" onClick={handleLogout} />
          <span>L</span>
        </div>
      </div>
      <div className="projects-page-body">
        <div className="projects-page-title">
          <h1>Page title</h1>
          <p>Page description goes here. It can be either long or short.</p>
        </div>
        <div className="projects-page-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Template name</th>
                <th>Status</th>
                <th>Due date</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.map((project, index) => (
                <tr
                  key={project.name + "_" + index}
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <td>{project.name}</td>
                  <td>{project.template_name}</td>
                  <td>
                    <Badge color={project.status.color}>
                      {project.status.name}
                    </Badge>
                  </td>
                  <td>
                    {new Date(project.due_date).toLocaleDateString("en-US")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="projects-table-pagination">
          <button
            onClick={() => setCurrentPage(0)}
            disabled={currentPage === 0}
          >
            {"<<"}
          </button>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
          >
            {"<"}
          </button>
          <span>
            {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage >= totalPages - 1}
          >
            {">"}
          </button>
          <button
            onClick={() => setCurrentPage(totalPages - 1)}
            disabled={currentPage >= totalPages - 1}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
  //#endregion
};

export default ProjectsPage;
