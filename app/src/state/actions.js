export function setHoverTruth(number) {
  return {
    type: 'SET_HOVER_TRUTH',
    number,
  };
}

export function setClickedTruth(number) {
  return {
    type: 'SET_CLICKED_TRUTH',
    number,
  };
}

export function setClickedNode(id, text, additionalRefs) {
  return {
    type: 'SET_CLICKED_NODE',
    id,
    text,
    additionalRefs,
  };
}

export function setClickedElaboration(elaboration) {
  return {
    type: 'SET_CLICKED_ELABORATION',
    elaboration,
  };
}

export function setVisibleElaboration(elaboration) {
  return {
    type: 'SET_VISIBLE_ELABORATION',
    elaboration,
  };
}

export function setTranslation(pali, english) {
  return {
    type: 'SET_TRANSLATION',
    pali,
    english,
  };
}

export function toggleElaborationDrawer() {
  return {
    type: 'TOGGLE_ELABORATION_DRAWER',
  };
}

export function toggleAboutDrawer() {
  return {
    type: 'TOGGLE_ABOUT_DRAWER',
  };
}

export function toggleAddElaboration() {
  return {
    type: 'TOGGLE_ADD_ELABORATION',
  };
}

export function setLoading(state) {
  return {
    type: 'SET_LOADING',
    state,
  };
}