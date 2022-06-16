import { useEffect } from "react";
import { SeatsHooks, UsersHooks } from "hooks";
import { useDispatch } from "react-redux";
import {
  deleteUserSeatsStore,
  startLoadingStore,
  startLoadingDrawerStore,
  setStatusShowHideStore,
  setCheckUsersSeatsStore,
  generateSeatsStore,
} from "../store/Seats.store";

const SeatsActions = () => {
  const dispatch = useDispatch();
  const { checkUser } = UsersHooks();
  const { listSeatsUsersCheck } = SeatsHooks();

  useEffect(() => {
    startLoadingAction(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startLoadingAction = (action) => {
    dispatch(startLoadingStore(action));
  };

  const startLoadingDrawerAction = (action) => {
    dispatch(startLoadingDrawerStore(action));
  };

  const generateSeatsAction = () => {
    dispatch(generateSeatsStore());
  };

  const setCheckUsersSeatsAction = async (action) => {
    startLoadingAction(true);
    action.idUser = checkUser.id;
    //Checar se o usuário já se encontra alocando em algum assento
    const checkUserIndex = listSeatsUsersCheck.findIndex(
      (elem) => elem.idUser === checkUser.id
    );
    //Se existir, remova o usuario do assento
    if (checkUserIndex !== -1) {
      await dispatch(deleteUserSeatsStore(action.idUser));
    }

    dispatch(setCheckUsersSeatsStore(action));
  };

  const deleteUserSeatsAction = async (idUser) => {
    await dispatch(deleteUserSeatsStore(idUser));
  };

  const setStatusShowHideAction = (action) => {
    dispatch(setStatusShowHideStore(action));
  };

  const removeUserCheckSeatsAction = async () => {};

  return {
    startLoadingDrawerAction,
    startLoadingAction,
    removeUserCheckSeatsAction,
    generateSeatsAction,
    setCheckUsersSeatsAction,
    setStatusShowHideAction,
    deleteUserSeatsAction,
  };
};

export default SeatsActions;
