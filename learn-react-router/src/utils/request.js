const API_DOMAIN = "http://localhost:3302/";
export const get = async (path) => {
  try {
    const response = await fetch(API_DOMAIN + path);
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
};

export const post = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(options),
  });

  const result = await response.json();
  return result;
};

export const del = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
  });

  const result = await response.json();
  return result;
};
