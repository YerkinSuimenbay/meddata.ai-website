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
import { useTranslation } from "react-i18next";

const SectionAbout = () => {
  const { t } = useTranslation(["main"], { keyPrefix: "sectionAbout" });

  const news: { media: string; title: string }[] = t("news", {
    returnObjects: true,
  });

  const getPosterAndLogo = (media: string) => {
    let poster = "";
    let mediaLogo = "";
    if (media === "Forbes") {
      poster = posterForbes;
      mediaLogo = logoForbes;
    } else if (media === "Tengrinews") {
      poster = posterTengrinews;
      mediaLogo = logoTengrinews;
    }
    if (media === "Capital") {
      poster = posterCapital;
      mediaLogo = logoCapital;
    }
    if (media === "AstanaHub") {
      poster = posterAstanaHub;
      mediaLogo = logoAstanaHub;
    }
    if (media === "DE") {
      poster = posterDE;
      mediaLogo = logoDE;
    }
    if (media === "DB") {
      poster = posterDB;
      mediaLogo = logoDB;
    }
    if (media === "People") {
      poster = posterPeople;
      mediaLogo = logoPeople;
    }
    if (media === "NewTimes") {
      poster = posterNewTimes;
      mediaLogo = logoNewTimes;
    }
    return { poster, mediaLogo };
  };

  return (
    <section className="section__about container">
      <h2 className="section__heading section__about__heading">
        {t("heading")}
      </h2>
      <div className="section__about__news">
        {news.map(({ media, title }) => (
          <NewsArticle key={title} {...getPosterAndLogo(media)} title={title} />
        ))}
      </div>
    </section>
  );
};

export default SectionAbout;
