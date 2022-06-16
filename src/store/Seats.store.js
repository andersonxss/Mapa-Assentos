import { createSlice, current } from "@reduxjs/toolkit";
import { convertIntArray } from "utils";

export const Seats = createSlice({
  name: "Seats",
  initialState: {
    statusShowHide: false,
    startLoading: false,
    startLoadingDrawer: false,
    listSeats: [],
    listSeatsUsersCheck: [],
    letters: ["A", "B", "C", "D", "E", "F"],
  },
  reducers: {
    setStatusShowHideStore: (state, action) => {
      state.statusShowHide = action.payload;
    },
    startLoadingStore: (state, action) => {
      state.startLoading = action.payload;
    },
    startLoadingDrawerStore: (state, action) => {
      state.startLoadingDrawer = action.payload;
    },
    getListSeatsStore: (state, action) => {
      state.listSeats = action.payload.data;
    },
    setCheckUsersSeatsStore: (state, action) => {
      const { sector, seat, number } = action.payload;
      let dadosListSeats = current(state.listSeats);
      let dadosListCheckUsers = current(state.listSeatsUsersCheck);
      //Checar o assento
      dadosListSeats[sector].seats[seat][number].state = true;
      state.listSeatsUsersCheck = [...dadosListCheckUsers, action.payload];
      state.listSeats = dadosListSeats;
      state.startLoading = false;
      state.startLoadingDrawer = true;
    },
    generateSeatsStore: (state) => {
      var dadasListSeats = [
        {
          type: "Classe Executiva",
          count: 5,
        },
        {
          type: "Classe Econômica",
          count: 10,
        },
      ];

      let responseStructListSeats = dadasListSeats.map(
        (elemSector, indexSector) => {
          return {
            id: indexSector,
            name: elemSector.type,
            seats: convertIntArray(elemSector.count).map(() => {
              return state.letters.map((letter, indexIletter) => {
                return {
                  number: indexIletter,
                  letter: letter,
                  state: false,
                };
              });
            }),
          };
        }
      );

      state.listSeats = responseStructListSeats;
    },
    deleteUserSeatsStore: (state, action) => {
      const idUser = action.payload;

      let dadosListSeats = current(state.listSeats);

      let dadosListCheckUsers = current(state.listSeatsUsersCheck);
      const newDataListCheckUsers = dadosListCheckUsers.filter(
        (elem) => elem.idUser !== idUser
      );

      const checkUserBefore = dadosListCheckUsers.find(
        (elem) => elem.idUser === idUser
      );

      dadosListSeats[checkUserBefore.sector].seats[checkUserBefore.seat][
        checkUserBefore.number
      ].state = false;

      state.listSeats = dadosListSeats;
      state.listSeatsUsersCheck = newDataListCheckUsers;
      state.startLoadingDrawer = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingStore,
  startLoadingDrawerStore,
  setStatusShowHideStore,
  setCheckUsersSeatsStore,
  generateSeatsStore,
  getListSeatsStore,
  deleteUserSeatsStore,
} = Seats.actions;

export default Seats.reducer;
