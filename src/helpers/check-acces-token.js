import jwtDecode from "jwt-decode";

export default function isAccessTokenValid (access_token) {
  if (jwtDecode(access_token).exp < Date.now() / 1000) {
    return true;
  }
  return false;
};