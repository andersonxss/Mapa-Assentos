import { useDispatch } from "react-redux";
import {
  setStatusModalDialogUsersStore,
  setCheckUserStore,
} from "../store/Users.store";

const UsersActions = () => {
  const dispatch = useDispatch();

  const setStatusModalDialogUsersAction = (action) => {
    dispatch(setStatusModalDialogUsersStore(action));
  };

  const setCheckUserAction = async (dados) => {
    await dispatch(setCheckUserStore(dados));
  };

  return {
    setStatusModalDialogUsersAction,
    setCheckUserAction,
  };
};

export default UsersActions;
