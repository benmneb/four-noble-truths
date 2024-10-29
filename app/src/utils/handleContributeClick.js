export function handleContributeClick(clickedNode) {
  if (!clickedNode) throw new Error('No clicked node to contribute to');

  window.open(
    `https://github.com/benmneb/four-noble-truths/issues/new?title=New+elaboration+for+${clickedNode?.text?.replaceAll(
      ' ',
      '+'
    )}+${
      clickedNode?.for
    }&body=Please+add+sutta+reference+and+the+quote+here&labels=enhancement`
  );
}
