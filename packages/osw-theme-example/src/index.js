import Theme from "./components/theme";

const marsTheme = {
  name: "osw-theme-example",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [],
      featured: {
        showOnList: false,
        showOnPost: false
      }
    }
  }
};

export default marsTheme;
