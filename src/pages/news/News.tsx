import "./news.scss";
import NewsHeader from "./sections/header/NewsHeader";

const News = () => {
  return (
    <div className="news__page">
      <NewsHeader />

      <div className="container">
        <section className="section__massMedia">
          <h2 className="section__massMedia__heading">СМИ о нас:</h2>
          {/* <div className="section__massMedia__content"></div> */}
        </section>
      </div>
    </div>
  );
};

export default News;
