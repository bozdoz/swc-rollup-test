var Another = function(text) {
    return "".concat(text, "Another");
};
export default Another;

var Provider = function(text) {
    return "".concat(text, "Provider");
};
export default Provider;

export { default as Provider } from "./Provider";
export { default as Another } from "./Another";

