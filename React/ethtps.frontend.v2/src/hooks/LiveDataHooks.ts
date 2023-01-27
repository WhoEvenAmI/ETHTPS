import { DataType } from "../Types"
import { TimeInterval } from "../models/TimeIntervals"
import { api } from "../services/DependenciesIOC"
import { setLiveData, setLiveDataType } from "../slices/LiveDataSlice"
import { useAppSelector, useAppDispatch, store } from "../store"
import { useLoadValuesHook } from "./useLoadValuesHook"

export function useGetLiveDataModeFromAppStore() {
  return useAppSelector((state) => state.liveData.liveDataType)
}

export function useGetLiveDataSmoothingFromAppStore() {
  return useAppSelector((state) => state.liveData.liveDataSmoothing)
}

export function useGetLiveDataFromAppStore() {
  return useAppSelector((state) => state.liveData)
}

export function useSetDataModeMutation(mode: DataType) {
  store.dispatch(setLiveDataType(mode))
}

export function useUpdateLiveData() {
  const dataMode = useGetLiveDataModeFromAppStore()
  useLoadValuesHook(
    "liveData",
    () => api.getInstantData(TimeInterval.Instant),
    (value) => store.dispatch(setLiveData(value)),
    0,
    4000,
  )
}