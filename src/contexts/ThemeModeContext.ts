import { createContext } from 'react';

export interface IThemeModeContext {
  toggleThemeMode: () => void;
}

export const ThemeModeContext = createContext<IThemeModeContext>({} as IThemeModeContext);
