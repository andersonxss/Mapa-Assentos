import { useSelector } from "react-redux";
const UsersHooks = () => {
  const { listUsers, checkUser, statusModalDialog } = useSelector(
    (state) => state.users
  );

  return {
    checkUser,
    listUsers,
    statusModalDialog,
  };
};

export default UsersHooks;
