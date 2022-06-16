import { useEffect } from "react";
import { SeatsActions } from "action";
import { SeatsHooks } from "hooks";
import { Box, IconButton } from "@mui/material";
import { TopBar, Seats, DialogUsers, RightDrawer, Backdrop } from "components";
import styles from "./css/airPlane.module.css";
import SettingsIcon from "@mui/icons-material/Settings";

const App = () => {
  const { generateSeatsAction, startLoadingDrawerAction } = SeatsActions();
  const { listSeatsUsersCheck } = SeatsHooks();
  useEffect(() => {
    if (listSeatsUsersCheck.length === 0) {
      generateSeatsAction(); // eslint-disable-next-line
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ backgroundColor: "primary.dark" }}>
      <TopBar />
      <Box pt={10} mr={5} position="absolute" right="0">
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => startLoadingDrawerAction(true)}
        >
          <SettingsIcon />
        </IconButton>
      </Box>
      <Box className={styles.airPlaneRoot}>
        <Box className={styles.airPlane}>
          <Box className={styles.topPlane}></Box>
          <Box className={styles.containerPlane}>
            <Seats />
          </Box>
        </Box>
      </Box>
      <RightDrawer />
      <DialogUsers />
      <Backdrop />
    </Box>
  );
};

export default App;
