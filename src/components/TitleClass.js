import React from "react";
import { Typography } from "@mui/material";

const TitleClass = (props) => {
  const { title } = props;
  return (
    <Typography align="center" color="primary">
      {title}
    </Typography>
  );
};

export default TitleClass;
