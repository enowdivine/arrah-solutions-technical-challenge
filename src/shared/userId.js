import { isExpired, decodeToken } from "react-jwt";
import { useSelector } from "react-redux";

const userId = () => {
  const userToken = useSelector((state) => state.auth.userToken);
  if (userToken) {
    const decodedToken = decodeToken(userToken.token);
    const id = decodedToken.id;
    return id;
  }
  return userToken;
};

export default userId;
