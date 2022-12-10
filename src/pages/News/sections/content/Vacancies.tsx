import React from "react";
import Vacancy from "./Vacancy";

interface IVacancy {
  title: string;
  location: string;
  salary: string;
  workExprience: string;
  duties: string[];
  links?: {
    hh?: string;
    linkedin?: string;
  };
}

interface ICareer {
  title: string;
  vacancies: IVacancy[];
}

const careers: ICareer[] = [
  {
    title: "Medicine",
    vacancies: [
      {
        title: "Нейрохирург высшей категории",
        location: "г. Алматы, Казахстан",
        salary: "500 KZT",
        workExprience: "1 - 3 years",
        duties: ["task1", "task2", "task3"],
        links: {
          hh: "link",
          linkedin: "link",
        },
      },
      {
        title: "Нейрохирург высшей категории",
        location: "г. Алматы, Казахстан",
        salary: "500 KZT",
        workExprience: "1 - 3 years",
        duties: ["task1", "task2", "task3"],
        links: {
          hh: "link",
          linkedin: "link",
        },
      },
    ],
  },
];

const Vacancies = () => {
  return (
    <div className="section__careersList">
      <div className="section__careersList__search">SEARCH</div>
      <div className="section__careersList__list">
        {careers.map((career) => {
          const { title, vacancies } = career;
          return (
            <div>
              <h2>{title}</h2>
              {vacancies.map((vacancy) => (
                <Vacancy />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vacancies;
