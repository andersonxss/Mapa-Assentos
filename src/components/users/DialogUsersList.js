import {
  Grid,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { UsersActions } from "action";
import { UsersHooks } from "hooks";

const CheckboxListSecondary = () => {
  const { setCheckUserAction } = UsersActions();
  const { listUsers } = UsersHooks();

  return (
    <Grid container spacing={2}>
      {listUsers.length > 0 &&
        listUsers.map((value, indexUsers) => {
          return (
            <Grid item xs={12} md={4} key={indexUsers}>
              <ListItemButton onClick={() => setCheckUserAction(value)}>
                <ListItemAvatar>
                  <Avatar
                    style={{ width: 40 }}
                    alt={`Avatar n°${value.id + 1}`}
                    src={value.url}
                  />
                </ListItemAvatar>
                <ListItemText primary={value.name} />
              </ListItemButton>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default CheckboxListSecondary;
