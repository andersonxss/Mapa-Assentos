import React from "react";
import { Avatar } from "@mui/material";
const AvatarUser = (props) => {
  const { name, url } = props.data;
  return (
    <Avatar
      alt={name}
      sx={{ width: 40, height: 40, bgcolor: "#23204f" }}
      src={url}
    />
  );
};

export default AvatarUser;
