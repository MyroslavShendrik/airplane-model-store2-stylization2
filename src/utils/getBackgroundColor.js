import clsx from "clsx";
// const color = function getBgColorBuiltInStyles(year) {
//     let bgColor = '#ffdb92';
//     if (year > 1945) bgColor = '#d2fdbd';
//     if (year > 1999) bgColor = '#d6f1ff';
//     return bgColor;
// };
// export {color}

export function getBgColorBuiltInStyles(year) {
  let bgColor = "#ffdb92";
  if (year > 1945) bgColor = "#d2fdbd";
  if (year > 1999) bgColor = "#d6f1ff";
  return bgColor;
}

//todo: var.1
// export function getBgColorVanillaCSS(year) {
//     const classNames = ["planesItem"];
//     if (year > 1945) classNames.push("last");
//     if (year > 1999) classNames.push("current");
//     console.log("classNames:", classNames); //!
//     return classNames;
// };
//todo: var.1.1 - використання бібліотеки clsx
export function getBgColorVanillaCSS(year) {
  const classNames = clsx(
    "planesItem",
    year > 1945 && "last",
    year > 1999 && "current",
  );
  console.log("classNames:", classNames); //!
  return classNames;
}
//todo: CSS-модулі
export function getBgColorCSSModule(year) {
  let classNames = "planesItem";
  if (year > 1945) classNames = "last";
  if (year > 1999) classNames = "current";
  return classNames;
}
