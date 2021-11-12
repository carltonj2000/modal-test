const KEY_CODES = {
  ESCAPE: "Escape",
};
export const isEscapeKey = (event = {}) => {
  event = event || {};
  return KEY_CODES["ESCAPE"] === event.key;
};
export default KEY_CODES;
