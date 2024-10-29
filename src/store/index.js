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
  loading: false,
  themeType: 'dark',

  setHoverTruth: (hoverTruth) => set(() => ({ hoverTruth })),
  setClickedTruth: (clickedTruth) => set(() => ({ clickedTruth })),
  setClickedNode: (id, text, additionalRefs) => {
    if (!id) return;
    set(() => ({
      clickedNode: {
        for: id,
        text,
        additionalRefs,
      },
    }));
  },
  setClickedElaboration: (clickedElaboration) =>
    set(() => ({ clickedElaboration })),
  setVisibleElaboration: (visibleElaboration) =>
    set(() => ({ visibleElaboration })),
  toggleElaborationDrawer: () =>
    set((state) => ({ showElaborationDrawer: !state.showElaborationDrawer })),
  toggleAboutDrawer: () =>
    set((state) => ({ showAboutDrawer: !state.showAboutDrawer })),
  setLoading: (loading) => set(() => ({ loading })),
  toggleThemeType: () =>
    set((state) => ({
      themeType: state.themeType === 'dark' ? 'light' : 'dark',
    })),
}));
