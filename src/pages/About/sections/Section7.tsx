import Person from "../../../components/cards/Person/Person";

// PEOPLE
import CEO from "../../../assets/images/people/CEO.svg";
import CFO from "../../../assets/images/people/CFO.svg";
import CMO from "../../../assets/images/people/CMO.svg";
import CPO from "../../../assets/images/people/CPO.svg";
import TechnicalDirector from "../../../assets/images/people/TechnicalDirector.svg";
import HeadOfDesign from "../../../assets/images/people/HeadOfDesign.svg";
import LegalOfficer from "../../../assets/images/people/LegalOfficer.svg";
import Neurosurgeon from "../../../assets/images/people/Neurosurgeon.svg";
import ProductDirector from "../../../assets/images/people/ProductDirector.svg";
import RegionalOfficer from "../../../assets/images/people/RegionalOfficer.svg";

const people = [
  {
    profile: CEO,
    name: "Sheikhislam Sahi",
    position: "Founder, CEO",
    details: ["Neurosurgeon, neurobiologist.", "30 Under 30 Forbes Member"],
  },
  {
    profile: RegionalOfficer,
    name: "Islam Mamadzhanov",
    position: "Regional officer",
    details: [
      "Entrepreneurship for 11 years",
      "Founder of IMB Croup (IT company)",
      "Founder, Erasmus SKSU (EdTech)",
      "Education: University of Montana, Austria; Polytechnic of Valencia, Spain",
    ],
  },
  {
    profile: ProductDirector,
    name: "Alzhan Sainov",
    position: "Product Director",
    details: [
      "Crypto expert with 5 years of Experience",
      'Creator of the concept of "Get treated-Earn" in MedData',
    ],
  },
  {
    profile: LegalOfficer,
    name: "Khalel Tuganbayev",
    position: "Legal officer",
    details: [
      "More than 10 years of experience in law and more than 8 years in the Big Four company.",
      "Advised on issues of the World Bank, the European Bank for Reconstruction and Development, Eurasian Resources Group. Participated in the development of laws of the Republic of Kazakhstan.",
    ],
  },
  {
    profile: TechnicalDirector,
    name: "Rachit Tomar",
    position: "Technical Director",
    details: [
      "More than 10 years of experience in the field of medical technology",
      "Worked on the development of well-known medical products in India",
      "Participated in the creation of blockchain technology in the fintech sector",
    ],
  },
  {
    profile: CMO,
    name: "Yana Ten",
    position: "CMO",
    details: [
      "An expert with 7 years of marketing experience",
      "Built strategies for startups in such regions as the UAE, the UK, Indonesia and the CIS",
    ],
  },
  {
    profile: Neurosurgeon,
    name: "Aziz Akkaev",
    position: "Neurosurgeon",
    details: [
      "Worked in 40 countries",
      'Founded 2 clinics of a new format - "Center for Pain Treatment and Regenerative Medicine"',
    ],
  },
  {
    profile: HeadOfDesign,
    name: "Khalilova Maryam",
    position: "Head of design",
    details: [
      "More than 19,000 hours in design, work in projects in 18 countries of the world",
    ],
  },
  {
    profile: CPO,
    name: "Dilmurat Islamov",
    position: "CPO",
    details: ["Participated in the development of Zood Superapp and Alfabank"],
  },
  {
    profile: CFO,
    name: "Sadvakas Sanjar",
    position: "CFO",
    details: [
      'He has more than 7 years of audit experience in the "big Four"',
      "At various times, he headed the reporting and control department, as well as financial departments in various industries",
    ],
  },
];

const Section7 = () => {
  return (
    <section className="section__seven">
      <h1 className="section__heading section__seven__heading">Who are we?</h1>
      <div className="section__seven__people">
        {people.map((person) => (
          <Person
            key={person.position}
            profile={person.profile}
            name={person.name}
            position={person.position}
            details={person.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Section7;
