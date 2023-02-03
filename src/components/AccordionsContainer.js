import { accordions } from "../data";
import Accordion from "./Accordion";

export default function AccordionsContainer() {
  return (
    <div className="section">
      <p className="text-center sm:text-3xl text-2xl font-bold my-8">
        Frequently <span className="text-teal">Asked Questions</span>
      </p>
      <div>
        {accordions.map((accordion) => (
          <Accordion key={accordion.id} {...accordion} />
        ))}
      </div>
    </div>
  );
}
