import * as React from "react";
import { useHistory } from "react-router-dom";
import pikachu from "../../../assets/pikachu.gif";

const Logo = () => {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push({
          pathname: "/",
        });
      }}
      style={{
        cursor: "pointer",
      }}
    >
      <img height="75px" width="75px" src={pikachu} alt="logo" />
    </div>
  );
};
export default Logo;
