import NewsArticle from "../../../components/cards/NewsArticle/NewsArticle";
import posterForbes from "../../../assets/images/posterForbes.svg";
import logoForbes from "../../../assets/images/logoForbes.svg";
import posterTengrinews from "../../../assets/images/posterTengrinews.svg";
import logoTengrinews from "../../../assets/images/logoTengrinews.svg";
import posterCapital from "../../../assets/images/posterCapital.svg";
import logoCapital from "../../../assets/images/logoCapital.svg";
import posterAstanaHub from "../../../assets/images/posterAstanaHub.svg";
import logoAstanaHub from "../../../assets/images/logoAstanaHub.svg";
import posterDE from "../../../assets/images/posterDE.svg";
import logoDE from "../../../assets/images/logoDE.svg";
import posterDB from "../../../assets/images/posterDB.svg";
import logoDB from "../../../assets/images/logoDB.svg";
import posterPeople from "../../../assets/images/posterPeople.svg";
import logoPeople from "../../../assets/images/logoPeople.svg";
import posterNewTimes from "../../../assets/images/posterNewTimes.svg";
import logoNewTimes from "../../../assets/images/logoNewTimes.svg";

const SectionAbout = () => {
  return (
    <section className="section__about container">
      <h2 className="section__heading section__about__heading">
        Mass Media about us
      </h2>
      <div className="section__about__news">
        <NewsArticle
          poster={posterForbes}
          mediaLogo={logoForbes}
          title="How a young Kazakh neurosurgeon created a $32 million startup"
        />
        <NewsArticle
          poster={posterTengrinews}
          mediaLogo={logoTengrinews}
          title="Artificial intelligence develops medicine in Kazakhstan"
        />
        <NewsArticle
          poster={posterCapital}
          mediaLogo={logoCapital}
          title="How can a startup be selected for the accelerator program of a US venture fund?"
        />
        <NewsArticle
          poster={posterAstanaHub}
          mediaLogo={logoAstanaHub}
          title="Kazakh MedTech startup is scaling to the US, Italy and the UAE"
        />
        <NewsArticle
          poster={posterDE}
          mediaLogo={logoDE}
          title="Astana Hub Awards were presented at the DIGITAL BRIDGE 2021"
        />
        <NewsArticle
          poster={posterDB}
          mediaLogo={logoDB}
          title="Sleep well and take your medicine — get a token: Kazakh startup MedData claims to digitalize medicine"
        />
        <NewsArticle
          poster={posterPeople}
          mediaLogo={logoPeople}
          title="Sheikhislam Sahi. A breakthrough in modern medicine"
        />
        <NewsArticle
          poster={posterNewTimes}
          mediaLogo={logoNewTimes}
          title="A Kazakh startup won a $50,000 grant to launch a digitalization project for medicine abroad"
        />
      </div>
    </section>
  );
};

export default SectionAbout;
