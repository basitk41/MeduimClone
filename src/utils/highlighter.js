const style = `style="background-color: rgba(26, 137, 23, 0.2); padding: 0px; cursor: pointer;"`;
const markStart = `<mark style="background-color: rgba(26, 137, 23, 0.2); padding: 0px; cursor: pointer;">`;
const markEnd = `</mark>`;
export const highlighter = (text) => {
  let convertedText = text.replaceAll(markStart, "").replaceAll(markEnd, "");
  return `<mark ${style}>${convertedText}</mark>`;
};
