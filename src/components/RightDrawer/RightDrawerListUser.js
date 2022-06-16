import { Box, IconButton, List, ListSubheader } from "@mui/material";
import { SeatsHooks } from "hooks";
import { RightDrawerListUserItem } from "components";
import CloseIcon from "@mui/icons-material/Close";
import { SeatsActions } from "action";

const RightDrawerListUser = () => {
  const { listSeatsUsersCheck } = SeatsHooks();
  const { startLoadingDrawerAction } = SeatsActions();

  return (
    listSeatsUsersCheck.length > 0 && (
      <List
        subheader={
          <ListSubheader>
            <Box display="flex" justifyContent="space-between">
              Lista de Passageiros
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={() => startLoadingDrawerAction(false)}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </ListSubheader>
        }
        dense={true}
        style={{ width: 300 }}
      >
        {listSeatsUsersCheck.map((userCheck, indexUserCher) => {
          return (
            <RightDrawerListUserItem
              userCheck={userCheck}
              key={indexUserCher}
            />
          );
        })}
      </List>
    )
  );
};

export default RightDrawerListUser;
