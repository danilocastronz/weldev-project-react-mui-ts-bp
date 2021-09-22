import { IAppContext } from "../contexts/AppContext";

import { User } from "../types/User";

class AppClient implements IAppContext {
  user: User;
  setUser: (user: User) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  /**
   * Creates an instance of AppClient.
   * @memberof AppClient
   */
  constructor() {
    this.user = {} as User;
    this.isLoading = false;
    this.setUser = (user: User) => {
      this.user = user;
    };
    this.setIsLoading = (isLoading: boolean) => {
      this.isLoading = isLoading;
    };
  }
}

export default AppClient;
