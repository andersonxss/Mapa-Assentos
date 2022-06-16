import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SeatsHooks, UsersHooks } from "hooks";
import { SeatsActions } from "action";
import { AvatarUser } from "components";

const RightDrawerListUserItem = (props) => {
  const { listSeats } = SeatsHooks();
  const { listUsers, checkUser } = UsersHooks();
  const { deleteUserSeatsAction } = SeatsActions();
  const { userCheck, ...res } = props;
  const { name, url } = listUsers.find((user) => user.id === userCheck.idUser);
  const seat = listSeats.find((seat) => seat.id === userCheck.sector);
  const nameSeat = `${userCheck.letter}${userCheck.number + 1}`;

  return (
    <ListItem
      {...res}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          disabled={checkUser.id !== userCheck.idUser}
          onClick={() => deleteUserSeatsAction(userCheck.idUser)}
        >
          <DeleteIcon />
        </IconButton>
      }
      divider={true}
    >
      <ListItemAvatar>
        <AvatarUser data={{ name: name, url: url }} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={`${seat.name} - ${nameSeat}`} />
    </ListItem>
  );
};

export default RightDrawerListUserItem;
