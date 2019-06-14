import Theme from "./components/theme";

const marsTheme = {
  name: "osw-theme-example",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      featured: {
        showOnList: false,
        showOnPost: false
      }
    }
  }
};

export default marsTheme;
