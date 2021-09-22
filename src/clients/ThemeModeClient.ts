import { IThemeModeContext } from "../contexts/ThemeModeContext";

class ThemeModeClient implements IThemeModeContext {
  themeMode: "light" | "dark";
  toggleThemeMode: () => void;

  /**
   * Creates an instance of ThemeModeClient.
   * @memberof ThemeModeClient
   */
  constructor() {
    this.themeMode = "light";
    this.toggleThemeMode = () => {
      this.themeMode = this.themeMode === "light" ? "dark" : "light";
    };
  }
}

export default ThemeModeClient;
