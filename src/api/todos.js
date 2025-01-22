import { URL } from "./configuration";

export const index = async () => {
  const f = await fetch(`${URL}/todos`, {
    headers: {
      Accept: "application/json",
    },
  });

  return await f.json();
};

export const destroy = async (id) => {
  const f = await fetch(`${URL}/todos/${id}?_method=DELETE`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });

  return await f.json();
};

export const store = async (body) => {
  const f = await fetch(`${URL}/todos`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await f.json();
};
