import { redirect } from "react-router-dom";
import { fetchMember, fetchPhase, fetchProject } from "../../api/api";

export const projectLoader = async ({ params }) => {
  const token = localStorage.getItem("finalcad.token");
  if (!token) throw redirect("/login");
  const project = await fetchProject(token, params.projectId);
  const phase = await fetchPhase(project.phase_id);
  const created_by = await fetchMember(project.created_by);
  return {
    project: {
      ...project,
      phase: phase.name,
      created_by: {
        first_name: created_by.first_name,
        last_name: created_by.last_name,
      },
    },
  };
};
