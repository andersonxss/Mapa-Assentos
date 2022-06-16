import { createSlice } from "@reduxjs/toolkit";

export const Users = createSlice({
  name: "Users",
  initialState: {
    listUsers: [
      {
        id: 1,
        name: "Max Verstappen",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
      },
      {
        id: 2,
        name: "Charles Leclerc",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png",
      },
      {
        id: 3,
        name: "Sergio Perez",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png",
      },
      {
        id: 4,
        name: "George Russell",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png",
      },
      {
        id: 5,
        name: "Carlos Sainz",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png",
      },
      {
        id: 6,
        name: "Lewis Hamilton",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png",
      },
      {
        id: 7,
        name: "Lando Norris",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png",
      },
      {
        id: 8,
        name: "Valtteri Bottas",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col/image.png",
      },
      {
        id: 9,
        name: "Esteban Ocon",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col/image.png",
      },
      {
        id: 10,
        name: "Kevin Magnussen",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/2col/image.png",
      },
      {
        id: 11,
        name: "Daniel Ricciardo",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col/image.png",
      },
      {
        id: 12,
        name: "Yuki Tsunoda",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col/image.png",
      },
      {
        id: 13,
        name: "Fernando Alonso",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png",
      },
      {
        id: 14,
        name: "Pierre Gasly",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col/image.png",
      },
      {
        id: 15,
        name: "Sebastian Vettel",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col/image.png",
      },
      {
        id: 16,
        name: "Alexander Albon",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col/image.png",
      },
      {
        id: 17,
        name: "Lance Stroll",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png",
      },
      {
        id: 18,
        name: "Guanyu Zhou",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/2col/image.png",
      },
      {
        id: 19,
        name: "Mick Schumacher",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/M/MICSCH02_Mick_Schumacher/micsch02.png.transform/2col/image.png",
      },
      {
        id: 20,
        name: "Nico Hulkenberg",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col/image.png",
      },
      {
        id: 21,
        name: "Nicholas Latifi",
        url: "https://www.formula1.com/content/dam/fom-website/drivers/N/NICLAF01_Nicholas_Latifi/niclaf01.png.transform/2col/image.png",
      },
    ],

    checkUser: null,
    statusModalDialog: false,
  },
  reducers: {
    setStatusModalDialogUsersStore: (state, action) => {
      state.statusModalDialog = action.payload;
    },
    getListUsersStore: (state, action) => {
      state.listUsers = action.payload.data;
    },
    setCheckUserStore: (state, action) => {
      state.checkUser = action.payload;
      state.statusModalDialog = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setStatusModalDialogUsersStore,
  setCheckUserStore,
  getListUsersStore,
} = Users.actions;

export default Users.reducer;
