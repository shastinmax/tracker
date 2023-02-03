import React from 'react';
export type GlobalContent = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
};
export const Context = React.createContext<GlobalContent>({
  isActive: false, // set a default value
  setIsActive: () => {},
});
