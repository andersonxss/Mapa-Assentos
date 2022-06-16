import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { UsersHooks } from "hooks";
import { UsersActions } from "action";
import { AvatarUser } from "components";

const TopBarButtonUser = () => {
  const { checkUser } = UsersHooks();
  const { setStatusModalDialogUsersAction } = UsersActions();

  useEffect(() => {
    checkUser === null && setStatusModalDialogUsersAction(true); // eslint-disable-next-line
  }, []);

  return (
    checkUser !== null && (
      <Button
        variant="text"
        size="small"
        color="primary"
        onClick={() => setStatusModalDialogUsersAction(true)}
      >
        <Box mr={1}>
          <AvatarUser data={checkUser} />
        </Box>
        <Typography>{checkUser.name}</Typography>
      </Button>
    )
  );
};

export default TopBarButtonUser;
