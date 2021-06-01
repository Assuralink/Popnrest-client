/* eslint-disable import/no-anonymous-default-export */
// export const url = "http://localhost:8080";
export const securedHeaders = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};
export const headers = {
  "Content-Type": "application/json",
};

export const url = "https://popnrest-api.live";
