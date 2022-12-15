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
    let link = "";
    if (media === "Forbes") {
      poster = posterForbes;
      mediaLogo = logoForbes;
      link =
        "https://forbes.kz/process/technologies/kak_molodoy_kazahskiy_neyrohirurg_sozdal_startap_s_otsenkoy_v_32_mln/";
    } else if (media === "Tengrinews") {
      poster = posterTengrinews;
      mediaLogo = logoTengrinews;
      link =
        "https://tengrinews.kz/conference/iskusstvennyiy-intellekt-razvivaet-meditsinu-kazahstana-418/";
    }
    if (media === "Capital") {
      poster = posterCapital;
      mediaLogo = logoCapital;
      link =
        "https://kapital.kz/business/105154/kak-startapu-proyti-otbor-v-akseleratsionnuyu-programmu-fonda-ssha.html";
    }
    if (media === "AstanaHub") {
      poster = posterAstanaHub;
      mediaLogo = logoAstanaHub;
      link =
        "https://astanahub.com/article/kazakhstanskii-medtech-startap-masshtabiruetsia-v-ssha-italiiu-i-oae";
    }
    if (media === "DE") {
      poster = posterDE;
      mediaLogo = logoDE;
      link =
        "https://digitaleast.kz/news/na-forume-digital-bridge-2021-vruchili-premiyu-astana-hub-awards";
    }
    if (media === "DB") {
      poster = posterDB;
      mediaLogo = logoDB;
      link =
        "https://digitalbusiness.kz/2022-08-10/horosho-pospal-i-prinyal-lekarstvo-poluchi-token-kazahstanskij-startap-meddata-zamahnulsya-na-czifrovizacziyu-medicziny/";
    }
    if (media === "People") {
      poster = posterPeople;
      mediaLogo = logoPeople;
      link = "https://www.tpeople.online/post/180522";
    }
    if (media === "NewTimes") {
      poster = posterNewTimes;
      mediaLogo = logoNewTimes;
      link =
        "https://newtimes.kz/obshchestvo/141581-kazakhstanets-vyigral-grant-50-tys-dlia-zapuska-proekta-po-tsifrovizatsii-meditsiny-za-rubezhom";
    }
    return { poster, mediaLogo, link };
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
