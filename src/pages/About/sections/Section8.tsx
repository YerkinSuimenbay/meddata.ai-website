import Award from "../../../components/cards/Award/Award";
import DigitalBridge from "../../../assets/images/DigitalBridge.svg";
import Sabi from "../../../assets/images/Sabi.svg";
import unitedNationsEmblem from "../../../assets/images/unitedNationsEmblem.svg";

const awards = [
  {
    image: DigitalBridge,
    name: "Innovation of the Year 2021",
  },
  {
    image: unitedNationsEmblem,
    name: "TOP-100 innovative digital solutions of the world",
  },
  {
    image: Sabi,
    name: 'Winner of the "Build Your Own Business" contest from the Sabi Foundation"',
  },
];

const Section8 = () => {
  return (
    <section className="section__eight">
      <h1 className="section__heading section__eight__heading">Awards</h1>
      <div className="section__eight__awards">
        {awards.map((award, index) => (
          <Award key={award.name} image={award.image} name={award.name} />
        ))}
      </div>
    </section>
  );
};

export default Section8;
