import './App.css'; //! Ванільний CSS (Vanilla CSS)

// import Section from './components/SectionWOStyle';  //! без стилізації
// import Section from './components/SectionBuiltInStyles'; //! вбудовані стилі
import Section from '../Section/Section.jsx' //! ванільний CSS

// import PlanesList from './components/PlanesListWOStyle';  //! без стилізації
// import PlanesList from './components/PlanesListBuiltInStyles.jsx';  //! вбудовані стилі
import PlanesList from '../PlanesList/PlanesList.jsx'; //! ванільний CSS

import planes from '../../json/planes.json';


export default function App() {
  return (
    <>
      <Section title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </>
  );
};
