import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;

/* YOu don't need to recreate these hooks for each of your store slices, You only create them once - hence you might also want to call them useAppDispatch and useAppSelector */
