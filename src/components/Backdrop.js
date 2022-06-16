import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { SeatsHooks } from "hooks";

export default function SimpleBackdrop() {
  const { startLoading } = SeatsHooks();

  return (
    <Backdrop open={startLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
