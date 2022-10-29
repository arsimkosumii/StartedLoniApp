import { configureStore } from "@reduxjs/toolkit";
import { pokemonsApi } from "./features/pokemons/pokemons";

export const store = configureStore({
  reducer: {
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;