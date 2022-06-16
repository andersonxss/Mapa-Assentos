import * as React from "react";
import { Drawer } from "@mui/material";
import { RightDrawerListUser } from "components";
import { SeatsHooks } from "hooks";

export default function RightDrawer() {
  const { startLoadingDrawer } = SeatsHooks();

  return (
    <React.Fragment>
      <Drawer anchor={"right"} open={startLoadingDrawer}>
        <RightDrawerListUser />
      </Drawer>
    </React.Fragment>
  );
}
