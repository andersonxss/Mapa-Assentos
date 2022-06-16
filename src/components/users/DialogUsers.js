import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { UsersHooks } from "hooks";
import { DialogUsersList } from "components";

const DialogUsers = () => {
  const { statusModalDialog } = UsersHooks();

  return (
    <Dialog
      open={statusModalDialog}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Seleção de Passageiros"}</DialogTitle>
      <DialogContent>
        <DialogUsersList />
      </DialogContent>
    </Dialog>
  );
};

export default DialogUsers;
