import CoreConcepts from "../CoreConcepts/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConceptsSelector () {

    return(
        <section id="coreConcepts">
        <h2>Principales Características</h2>
        <div>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcepts key = {conceptItem.title} {...conceptItem} />
          ))}
        </div>
      </section>
    );
}