import { create } from 'zustand';

export const useStore = create((set) => ({
  showAboutDrawer: false,
  themeType: 'dark',

  toggleAboutDrawer: () =>
    set((state) => ({ showAboutDrawer: !state.showAboutDrawer })),
  toggleThemeType: () =>
    set((state) => ({
      themeType: state.themeType === 'dark' ? 'light' : 'dark',
    })),
}));
