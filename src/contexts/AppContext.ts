import { createContext } from 'react';

import { User } from '../types/User';

export interface IAppContext {
  user: User;
  setUser: (user: User) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);
