import PropTypes from "prop-types";
import defaultImage from "./default.jpg"; //! Дефолтне зображення
// import './PlaneItem.css'
//! Бібліотека react-icons
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'; //! Приклад react-icons
import { AiOutlineFlag, AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { GiArmoredBoomerang, GiCeremonialMask, GiAirplaneDeparture, GiCommercialAirplane, GiCurlyMask } from "react-icons/gi";
import { CiBadgeDollar, CiGlobe, CiAirportSign1 } from "react-icons/ci";
import { TbClockHour4Filled } from "react-icons/tb";
import { FcTrademark } from "react-icons/fc";
import { ImAirplane } from "react-icons/im";
//? nameBrief
//? nameFull - <FcTrademark /> - Повна назва
//? type - <GiArmoredBoomerang /> - бумеранг, <GiCommercialAirplane /> - літак- Тип
//? nickname - <GiCeremonialMask /> маска1, <GiCurlyMask /> маска2  - Прізвисько
//? country - <AiOutlineFlag /> - прапор, <CiGlobe /> - глобус - Країна виробник
//? year - <AiOutlineClockCircle /> - годинник - Рік випуску
//? duration - <TbClockHour4Filled /> - годинник - Тривалість виробництва(в роках)
//? price - <CiBadgeDollar/> - $, <AiOutlineDollarCircle /> - $ - Ціна
//? description - <AiOutlineInfoCircle /> - info - Опис
//? <GiAirplaneDeparture /> - Рекламна модель
//? <CiAirportSign1 /> - Реальна модель


import css from "./PlaneItem.module.css";

//! Стилі для текстових полів
const textField = {
  fontSize: "18px",
  fontWeight: 700,
};

//! Стилі для значень текстових полів
const textFieldValue = {
  fontWeight: 400,
  fontStyle: "italic",
};

//! Стилі для заголовків зображень
const imageTitles = {
  textAlign: "center",
  color: "blue",
};

export default function PlaneItem({
  urlMain = defaultImage, //! Дефолтне зображення
  urlPromotional,
  urlActual,
  nameBrief,
  nameFull,
  nickname = "не відомо",
  year,
  country,
  type,
  price,
  description,
}) {
  return (
    <>
      <h3
        // style={{
        //   marginBottom: 12,
        //   padding: "12px 16px",
        //   fontSize: 32,
        //   textAlign: "center",
        //   borderRadius: 8,
        //   backgroundColor: "yellow",
        //   color: "blue",
        // }}
        // className="planeTitle"
        className={css.planeTitle}
      >
        {nameBrief}
      </h3>
      {/* <ImAirplane
       size={59}
       color="red"
       style={{ color: "blue" }} 
       className={css.ImAirplane}
      /> */}
      <img src={urlMain} alt={nameBrief} />
      <p
        // className="textField"
        className={css.textField}
      >
       <FcTrademark size={28} className={css.icon} /> Повна назва: <span className={css.textFieldValue}>{nameFull}</span>
      </p>
      <p
        // className="textField"
        className={css.textField}
      >
      <GiCommercialAirplane size={28} className={css.icon} />  Тип: <span className={css.textFieldValue}>{type}</span>{" "}
      </p>
      <p
        // className="textField"
        className={css.textField}
      >
       <GiCeremonialMask size={28} className={css.icon} /> Прізвисько: <span className={css.textFieldValue}>{nickname}</span>
      </p>
      <p
        // className="textField"
        className={css.textField}
      >
      <AiOutlineFlag size={28} className={css.icon} />  Країна виробник: <span className={css.textFieldValue}>{country}</span>
      </p>
      <p 
        // className="textField"
        className={css.textField}
      >
      <AiOutlineClockCircle size={28} className={css.icon} />  Рік випуску: <span className={css.textFieldValue}>{year}</span>
      </p>
      <p
        // className="textField"
        className={css.textField}
      >
       <CiBadgeDollar size={28} className={css.icon}/> Ціна: <span className={css.textFieldValue}>{price}</span>
      </p>
      <p
        // className="textField"
        className={css.textField}
      >
      <AiOutlineInfoCircle size={28} className={css.icon} />  Опис: <span className={css.textFieldValue}>{description}</span>
      </p>
      <p // className="imageTitles"
        className={css.imageTitles}
      >
      <GiAirplaneDeparture size={28} className={css.icon} />  Рекламна модель:
      </p>

      <img src={urlPromotional} alt={nameBrief} />
      <p // className="imageTitles"
        className={css.imageTitles}
      >
      <CiAirportSign1 size={28} className={css.icon} />  Реальна модель:
      </p>
      <div className={css.actualImageBox}>
        {urlActual.map((image, index) => (
          <img
            // style={{
            //   maxWidth: "calc((100% - 10px) / 2)",
            //   borderRadius: 4,
            // }}
            className={css.actualImage}
            key={index}
            src={image}
            alt={nameBrief}
            // width="200"
          />
        ))}
      </div>

      {/*//! Зображення рендеряться з масиву */}

      <br />
      <button
        // style={{
        //   width: "70%",
        //   margin: "20px auto",
        //   padding: "16px 32px",
        //   display: "inline-block",
        //   alignItems: "center",
        //   fontFmily: "Franklin Gothic Medium, Arial Narrow",
        //   fontWeight: 700,
        //   fontSize: "1.5rem",
        //   borderRadius: "12px",
        //   color: "#ffffff",
        //   cursor: "pointer",
        //   backgroundColor: "#008080",
        //   textShadow:
        //     "1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1)",
        //   boxShadow:
        //     "inset 0 0 16px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.9)",
        // }}
        className={css.planeButton}
        type="button"
      >
        Додати до кошику
      </button>
    </>
  );
}

//! Контроль типу змінних - propTypes
PlaneItem.propTypes = {
  urlMain: PropTypes.string.isRequired,
  urlPromotional: PropTypes.string.isRequired,
  urlActual: PropTypes.string.isRequired,
  nameBrief: PropTypes.string.isRequired,
  nameFull: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,  //! контроль propTypes
  description: PropTypes.string.isRequired,
};
