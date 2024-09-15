import { redirect } from "react-router-dom";
import { fetchProjects } from "../../api/api";

export const projectsLoader = async () => {
  const token = localStorage.getItem("finalcad.token");
  if (!token) throw redirect("/login");
  const projects = await fetchProjects(token);
  return { projects };
};
