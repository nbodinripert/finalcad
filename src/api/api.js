import axios from "axios";

export const login = async (email, password) => {
  const url = `http://demo.wizzcad.com:8081/logins?login=${email}&password=${password}`;
  const response = await axios.get(url);
  if (response.data.length === 0) throw new Error("Invalid login credentials");
  return response.data;
};

export const fetchProjects = async (token) => {
  const response = await axios.get(`http://demo.wizzcad.com:8081/${token}`);
  return response.data;
};

export const fetchProject = async (token, projectId) => {
  const response = await axios.get(
    `http://demo.wizzcad.com:8081/${token}/${projectId}`
  );
  return response.data;
};

export const fetchPhase = async (phaseId) => {
  const response = await axios.get(
    `http://demo.wizzcad.com:8081/phases/${phaseId}`
  );
  return response.data;
};

export const fetchMember = async (userId) => {
  const response = await axios.get(
    `http://demo.wizzcad.com:8081/members?user_id=${userId}`
  );
  return response.data[0];
};
