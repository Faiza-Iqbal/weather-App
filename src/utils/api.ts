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
    const response = await axios.get(route, headers);

    return response.data;
  } catch (err) {
    console.error(`API error: ${err}`);
  }
};
