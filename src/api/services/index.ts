import { http } from "../http";


// export const getRecentProjects = () => {
//   return http.get("/projects");
// }

// export const authLogin = (data: any) => {
//   return http.post("/auth/login", data);
// };

// Email form API
export const calendarForm = (data: any) => {
  return http.post("rw/calendar", data);
};
