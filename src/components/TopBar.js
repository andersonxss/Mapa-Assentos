import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { TopBarButtonUser } from "components";
const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Mapa de Assentos</Typography>
          <TopBarButtonUser />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
