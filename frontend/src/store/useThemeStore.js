import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chatterly-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("chatterly-theme", theme);
    set({ theme });
  },
}));
