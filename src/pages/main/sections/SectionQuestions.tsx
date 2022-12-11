import Questions from "./questions/Questions";

const SectionQuestions = () => {
  return (
    <section className="section__questions container">
      <h2 className="section__heading section__questions__heading">
        Still have questions?
      </h2>
      <div className="section__questions__list">
        <Questions />
      </div>
    </section>
  );
};

export default SectionQuestions;
