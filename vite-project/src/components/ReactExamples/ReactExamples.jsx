import { EXAMPLES } from "../../data.js";
import TabButton from "../TabButton/TabButton.jsx";
import { useState } from "react";
import TabsMenu from "../TabsMenu/TabsMenu.jsx";
import Section from "../Section/Section.jsx";
import "./ReactExamples.css"

export default function ReactExamples() {
  const [selectedTopic, setSelected] = useState();

  function handleClickMenu(SelectedButton) {
    setSelected(SelectedButton);
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


  const botones = Object.values(EXAMPLES).map((boton, index) => (
    <TabButton
      isSelected={selectedTopic === boton.key}
      onClick={() => handleClickMenu(boton.key)}
      key={index}
    >
      {boton.title}
    </TabButton>
  ));


  return (
    <Section title="Ejemplos React" id="reactExamples" className="miClase">
      <TabsMenu ButtonContainer="menu" buttons={<> {botones}</> }>
      {tabContent}
      </TabsMenu>
      <TabsMenu></TabsMenu>
    </Section>
  );
}