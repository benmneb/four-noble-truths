import { create } from 'zustand';

export const useStore = create((set) => ({
  hoverTruth: 0,
  showElaborationDrawer: false,
  showAboutDrawer: false,
  themeType: 'dark',

  setHoverTruth: (hoverTruth) => set(() => ({ hoverTruth })),
  toggleElaborationDrawer: () =>
    set((state) => ({ showElaborationDrawer: !state.showElaborationDrawer })),
  toggleAboutDrawer: () =>
    set((state) => ({ showAboutDrawer: !state.showAboutDrawer })),
  toggleThemeType: () =>
    set((state) => ({
      themeType: state.themeType === 'dark' ? 'light' : 'dark',
    })),
}));
