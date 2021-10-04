export const getSelection = window.getSelection();
export const tooltipPosition = () => {
  return {
    x: getSelection.getRangeAt(0).getBoundingClientRect().x,
    y: getSelection.getRangeAt(0).getBoundingClientRect().y,
  };
};
export const getSelectionHtml = () => {
  let container = document.createElement("div");
  container.appendChild(getSelection.getRangeAt(0).cloneContents());
  return container.innerHTML;
};
