import axios from "axios";

type headersType = {
  method: string;
  headers: {
    [key: string]: any;
  };
};
export const callToApi = async (
  route: string,
  body?: string | null,
  headers?: headersType
) => {
  try {
    if (headers?.method === "POST") {
      const response = await axios.post(route, body, headers);
      return response.data;
    }
    if (headers?.method === "PUT") {
      const response = await axios.put(route, body, headers);
      return response.data;
    }
    if (headers?.method === "GET" || !headers?.method) {
      const response = await axios.get(route, headers);
      return response.data;
    }
    if (headers?.method === "DELETE") {
      const response = await axios.delete(route, headers);
      return response.data;
    }
  } catch (err) {
    console.error(`API error: ${err}`);
  }
};
