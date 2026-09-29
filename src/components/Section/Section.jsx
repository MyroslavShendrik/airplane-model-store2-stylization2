import PropTypes from "prop-types";
// import './Section.css'
import css from "./Section.module.css"; //! CSS-модулі

function Section({ title, children }) {
  return (
    <section>
      {title && (
        <h2
          // style={{
          //   marginBottom: "24px",
          //   fontSize: 48,
          //   textAlign: "center",
          //   color: "darkred",
          // }}
          // className="title"
          className={css.title}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
