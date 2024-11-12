import { create } from 'zustand';

export const useStore = create((set) => ({
  hoverTruth: 0,
  clickedTruth: 0,
  clickedNode: {
    text: null,
    additionalRefs: null,
  },
  clickedElaboration: null,
  visibleElaboration: null,
  showElaborationDrawer: false,
  showAboutDrawer: false,
  themeType: 'dark',

  setHoverTruth: (hoverTruth) => set(() => ({ hoverTruth })),
  setClickedTruth: (clickedTruth) => set(() => ({ clickedTruth })), // TODO: Deprecate this, it's in the URL now
  setClickedNode: (id, text, additionalRefs) => {
    if (!id) return;
    set(() => ({
      clickedNode: {
        for: id,
        text,
        additionalRefs,
      },
    }));
  }, // TODO: Deprecate this?? It's in the URL now
  setClickedElaboration: (clickedElaboration) =>
    set(() => ({ clickedElaboration })), // TODO: Restructure data, then can remove this, i'll be in the URL
  setVisibleElaboration: (visibleElaboration) =>
    set(() => ({ visibleElaboration })), // TODO: Can delete this, if `hoverTruth !== clickedTruth` should do it
  toggleElaborationDrawer: () =>
    set((state) => ({ showElaborationDrawer: !state.showElaborationDrawer })),
  toggleAboutDrawer: () =>
    set((state) => ({ showAboutDrawer: !state.showAboutDrawer })),
  toggleThemeType: () =>
    set((state) => ({
      themeType: state.themeType === 'dark' ? 'light' : 'dark',
    })),
}));
