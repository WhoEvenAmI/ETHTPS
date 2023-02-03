import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IColorDictionaries } from "../models/interfaces/IColorDictionaries"
import { StringDictionary } from "../Types.dictionaries"
import { storage } from "../services/DependenciesIOC"

const initialState: IColorDictionaries =
  storage.retrieveItem("IColorDictionaries") ?? {}

const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setProviderColorDictionary(
      state: IColorDictionaries,
      action: PayloadAction<StringDictionary | undefined>,
    ) {
      if (action.payload === undefined) return state

      state.providerColorDictionary = { ...action.payload }
      return state
    },
    setProviderTypeColorDictionary(
      state: IColorDictionaries,
      action: PayloadAction<StringDictionary | undefined>,
    ) {
      if (action.payload === undefined) return state
      storage.cacheItem(action.payload, "IColorDictionaries")
      state.providerTypesColorDictionary = { ...action.payload }
      return state
    },
  },
})

export const { setProviderColorDictionary, setProviderTypeColorDictionary } =
  colorSlice.actions
export const colorReducer = colorSlice.reducer