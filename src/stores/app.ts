// stores/theme.ts
import { defineStore } from "pinia";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export function resolveSystemTheme(): Theme {
  if (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
  ) {
    return Theme.Dark;
  }
  return Theme.Light;
}

interface ThemeState {
  appTheme: Theme;
  sidebarOpen: boolean;
}

export const useAppStore = defineStore("app", {
  state: () =>
    ({
      appTheme: resolveSystemTheme(),
      sidebarOpen: true,
    } as ThemeState),
  actions: {
    toggleTheme() {
      this.appTheme = this.appTheme === Theme.Light ? Theme.Dark : Theme.Light;
    },
    setTheme(theme: Theme) {
      this.appTheme = theme;
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    setSidebar(open: boolean) {
      this.sidebarOpen = open;
    },
  },
  persist: {
    storage: localStorage,
    pick: ["appTheme", "sidebarOpen"],
  },
});
