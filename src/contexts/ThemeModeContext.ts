import { createContext } from 'react';

export interface IThemeModeContext {
  themeMode: 'light' | 'dark';
  toggleThemeMode: () => void;
}

export const ThemeModeContext = createContext<IThemeModeContext>({} as IThemeModeContext);
