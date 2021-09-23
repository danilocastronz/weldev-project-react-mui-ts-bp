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
    this.user = {
      id: "5e8d8hg8h8h8q8faf8g8f8f",
      name: "John Smith",
      email: "john.smith@welcomedeveloper.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      isAdmin: true,
      isActive: true,
      isVerified: true,
    };
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
