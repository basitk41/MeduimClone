export const getSelection = window.getSelection();
export const tooltipPosition = () => {
  return {
    x: getSelection.getRangeAt(0).getBoundingClientRect().x,
    y: getSelection.getRangeAt(0).getBoundingClientRect().y,
  };
};

export const getSelectionHtml = () => {
  let html = "";
  if (typeof getSelection != "undefined") {
    let sel = getSelection;
    if (sel.rangeCount) {
      let container = document.createElement("div");
      for (let i = 0, len = sel.rangeCount; i < len; ++i) {
        container.appendChild(sel.getRangeAt(i).cloneContents());
      }
      html = container.innerHTML;
    }
  } else if (typeof document.selection != "undefined") {
    if (document.selection.type === "Text") {
      html = document.selection.createRange().htmlText;
    }
  }
  return html;
};
