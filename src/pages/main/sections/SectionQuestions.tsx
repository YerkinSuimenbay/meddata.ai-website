import Questions from "./questions/Questions";

const SectionQuestions = () => {
  return (
    <section className="section__questions">
      <h2 className="section__questions__header">Still have questions?</h2>
      <div className="section__questions__list">
        <Questions />
      </div>
    </section>
  );
};

export default SectionQuestions;
