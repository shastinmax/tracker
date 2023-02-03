import { RootState } from '../store';

export const selectShowHeader = (state: RootState): boolean => state.showHeader.isShow;
