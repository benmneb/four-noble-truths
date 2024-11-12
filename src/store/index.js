import { create } from 'zustand';

export const useStore = create((set) => ({
  hoverTruth: 0,
  clickedTruth: 0,
  clickedNode: {},
  showElaborationDrawer: false,
  showAboutDrawer: false,
  themeType: 'dark',

  setHoverTruth: (hoverTruth) => set(() => ({ hoverTruth })),
  setClickedTruth: (clickedTruth) => set(() => ({ clickedTruth })), // TODO: Deprecate this. It's in the URL now
  setClickedNode: (clickedNode) => {
    if (clickedNode === null) return set(() => ({ clickedNode }));
    if (!clickedNode.id) return;
    set(() => ({ clickedNode }));
  }, // TODO: Deprecate this. It's in the URL now
  toggleElaborationDrawer: () =>
    set((state) => ({ showElaborationDrawer: !state.showElaborationDrawer })),
  toggleAboutDrawer: () =>
    set((state) => ({ showAboutDrawer: !state.showAboutDrawer })),
  toggleThemeType: () =>
    set((state) => ({
      themeType: state.themeType === 'dark' ? 'light' : 'dark',
    })),
}));
