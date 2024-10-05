import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelected] = useState();

  function handleClickMenu(SelectedButton) {
    setSelected(SelectedButton);
    console.log(`Ey! Estas pulsando el bóton con el valor: ${SelectedButton}`);
  }

  let tabContent = (
    <p>
      Aquí se va a mostrar información sobre una característica de REACT, elige
      una opción del menu!
    </p>
  );

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section id="coreConcepts">
        <h2>Principales Características</h2>
        <div>
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts
            imagePath={CORE_CONCEPTS[3].imagePath}
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
          />
        </div>
      </section>
      <section id="reactExamples">
        <h2>Ejemplos React</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onClick={() => handleClickMenu("components")}
          >
            Componentes
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onClick={() => handleClickMenu("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onClick={() => handleClickMenu("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onClick={() => handleClickMenu("state")}
          >
            Estados
          </TabButton>
        </menu>
        {tabContent}
      </section>
      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </div>
  );
}

export default App;
