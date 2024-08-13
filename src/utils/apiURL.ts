import md5 from "md5";

const apiBaseURL = "https://gateway.marvel.com/v1/public";
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_PRIVATE_KEY;

// Creates a URL for searching Marvel API for comics with titles starting with a given search term
function getCharacters({ limit, offset }: { limit?: number; offset?: number }) {
  // Get the current timestamp
  const ts = Date.now();

  const queryParams: {
    ts: string;
    apikey: string;
    hash: string;
    limit?: string;
    offset?: string;
  } = {
    ts: ts.toString(),
    apikey: publicKey,
    hash: md5(ts + privateKey + publicKey), // Generate hash for authentication
    limit: limit as unknown as string,
    offset: offset as unknown as string,
  };

  // Create a new URLSearchParams object and set the necessary query parameters
  const params = new URLSearchParams(queryParams);
  // Construct the endpoint URL for searching comics with the query parameters
  const endpoint = `${apiBaseURL}/characters?`; // Notice the question mark to start the query parameters.

  // Combine the endpoint URL with the query parameters to form the complete API request URL
  const url = endpoint + params;
  // Return the complete API request URL
  return url;
}

function getCharacter({ id }: { id?: string }) {
  // Get the current timestamp
  const ts = Date.now();

  const queryParams: {
    ts: string;
    apikey: string;
    hash: string;
  } = {
    ts: ts.toString(),
    apikey: publicKey,
    hash: md5(ts + privateKey + publicKey), // Generate hash for authentication
  };

  // Create a new URLSearchParams object and set the necessary query parameters
  const params = new URLSearchParams(queryParams);
  // Construct the endpoint URL for searching comics with the query parameters
  const endpoint = `${apiBaseURL}/characters/${id}?`; // Notice the question mark to start the query parameters.

  // Combine the endpoint URL with the query parameters to form the complete API request URL
  const url = endpoint + params;

  // Return the complete API request URL
  return url;
}

function getCharacterSubUrls({ id, path }: { id?: string; path: string }) {
  // Get the current timestamp
  const ts = Date.now();

  const queryParams: {
    ts: string;
    apikey: string;
    hash: string;
  } = {
    ts: ts.toString(),
    apikey: publicKey,
    hash: md5(ts + privateKey + publicKey), // Generate hash for authentication
  };

  // Create a new URLSearchParams object and set the necessary query parameters
  const params = new URLSearchParams(queryParams);
  // Construct the endpoint URL for searching comics with the query parameters
  const endpoint = `${apiBaseURL}/characters/${id}/${path}?`; // Notice the question mark to start the query parameters.

  // Combine the endpoint URL with the query parameters to form the complete API request URL
  const url = endpoint + params;

  // Return the complete API request URL
  return url;
}

export { getCharacters, getCharacter, getCharacterSubUrls };
