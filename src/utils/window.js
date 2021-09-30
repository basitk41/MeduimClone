export const tooltipPosition = () => {
  return {
    x: window.getSelection().getRangeAt(0).getBoundingClientRect().x,
    y: window.getSelection().getRangeAt(0).getBoundingClientRect().y,
  };
};

export const getSelection = window.getSelection();

export const getSelectionHtml = () => {
  let html = "";
  if (typeof window.getSelection != "undefined") {
    let sel = window.getSelection();
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
