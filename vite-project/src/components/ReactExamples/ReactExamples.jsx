import { EXAMPLES } from "../../data.js";
import TabButton from "../TabButton/TabButton.jsx";
import { useState } from "react";



export default function ReactExamples(){

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
    return(
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
    );
}