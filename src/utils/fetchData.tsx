import axiosInstance from "./axiosInstance";

export const fetchData = async () => {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("Token is required");

  const { data } = await axiosInstance.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
