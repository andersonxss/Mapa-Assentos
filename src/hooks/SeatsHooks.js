import { useSelector } from "react-redux";
const SeatsHooks = () => {
  const {
    listSeats,
    letters,
    listSeatsUsersCheck,
    statusShowHide,
    startLoading,
    startLoadingDrawer,
  } = useSelector((state) => state.seats);

  return {
    startLoadingDrawer,
    startLoading,
    listSeats,
    letters,
    listSeatsUsersCheck,
    statusShowHide,
  };
};

export default SeatsHooks;
