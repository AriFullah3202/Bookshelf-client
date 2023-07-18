import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// এই হুক আমরা ইউজ করব , আমরা সরাসরি useDispatch and useSelector মাধ্যমে useAppDispatch , useAppSelector ইউজ করব । 
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector