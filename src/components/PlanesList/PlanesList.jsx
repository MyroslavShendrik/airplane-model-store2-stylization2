import PropTypes from "prop-types";
// import PlaneItem from "./PlaneItemBuiltInStyles.jsx"; //! вбудовані стилі
import PlaneItem from "../PlaneItem/PlaneItem.jsx"; //! ванільний CSS
// import {color} from "../utils/getBackgroundColor.js"
import { getBgColorBuiltInStyles, getBgColorVanillaCSS } from "../../utils/getBackgroundColor.js";
import clsx from "clsx";
import './PlanesList.css'


const className = clsx(
  "first",
  10,
  undefined && "second",
  true && "third",
  false ? "fourth" : "fifth"
);
console.log("className:",className); // "first 10 third fifth" 
//! Для визначення кольору фону картки в залежності від значення "year"
// function getBgColorBuiltInStyles(year) {
//   if (year < 1946) {
//     return "#ffdb92";
//   }
//   if (year >= 1946 && year <= 1999) {
//     return "#d2fdbd";
//   }
//   return "#d6f1ff";
// }
// function getBgColorBuiltInStyles(year) {
//     let bgColor = '#ffdb92';
//     if (year > 1945) bgColor = '#d2fdbd';
//     if (year > 1999) bgColor = '#d6f1ff';
//     return bgColor;
// };
// function getBgColorVanillaCSS(year) {
//   if (year < 1946) {
//     return ["planesItem"];
//   }
//   if (year >= 1946 && year <= 1999) {
//     return ["planesItem", "last"];
//   }
//   return ["planesItem", "last", "current"];
// }
// function getBgColorVanillaCSS(year) {
//     const classNames = ["planesItem"];
//     if (year > 1945) classNames.push("last");
//     if (year > 1999) classNames.push("current");
//     console.log("classNames:", classNames); //!
//     return classNames;
// };

// console.log("getBgColorVanillaCSS:",getBgColorVanillaCSS(item.info.year))
function PlanesList({ items }) {
  return (
    <ul
      //   style={{
      //     marginLeft: 10,
      //     marginRight: 10,
      //     padding: 10,
      //     display: "grid",
      //     gridTemplateColumns: "repeat(auto-fit, minmax(445px, 1fr))",
      //     gap: 32,
      //     outline: "1px solid red",
      //   }}
      className="planesList"
    >
      {items.map((item) => (
        <li
          //   style={{
          //     display: "grid",
          //     gap: 12,
          //     padding: 10,
          //     // backgroundColor: '#ffdb92', // "year" до 1946
          //     // backgroundColor: '#d2fdbd', // "year"  1946 - 1999
          //     // backgroundColor: '#d6f1ff', // "year" від 2000
          //     // backgroundColor: color(item.info.year),
          //     backgroundColor: getBgColorBuiltInStyles(item.info.year),

          //     outline: "1px solid grey",
          //   }}
          // className="planesItem last current"
          className={getBgColorVanillaCSS(item.info.year)}
          key={item.id}
        >
          <PlaneItem
            urlMain={item.url.main}
            urlPromotional={item.url.promotional}
            urlActual={item.url.actual}
            nameBrief={item.name.brief}
            nameFull={item.name.full}
            nickname={item.name.nickname}
            year={item.info.year}
            country={item.info.country}
            type={item.info.type}
            price={item.info.price}
            description={item.info.description}
          />
        </li>
      ))}
    </ul>
  );
}

PlanesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PlanesList;
