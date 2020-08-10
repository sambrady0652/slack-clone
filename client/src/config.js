export const imageUrl =
  process.env.REACT_APP_IMAGE_URL ||
    process.env.NODE_ENV === 'production'
    ? 'https://stackgroup.herokuapp.com'
    : 'http://localhost:8081';
export const baseUrl = process.env.REACT_APP_BASEURL || `${imageUrl}`;
