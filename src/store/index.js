import { create } from 'zustand';

export const useStore = create((set) => ({
  showAboutDrawer: false,
  themeType: 'dark',
  snackPack: [],

  toggleAboutDrawer: () =>
    set((state) => ({ showAboutDrawer: !state.showAboutDrawer })),
  toggleThemeType: () =>
    set((state) => ({
      themeType: state.themeType === 'dark' ? 'light' : 'dark',
    })),
  showSnack: (data) =>
    set((state) => ({
      snackPack: [...state.snackPack, { ...data, key: new Date().getTime() }],
    })),
  sliceSnackPack: () =>
    set((state) => ({
      snackPack: [...state.snackPack.slice(1)],
    })),
}));
