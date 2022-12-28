import NewsArticle from "../../../components/cards/NewsArticle/NewsArticle";
import posterForbes from "../../../assets/images/news/posterForbes.svg";
import posterForbesPlaceholder from "../../../assets/images/news/placeholder-posterForbes.jpg";
import logoForbes from "../../../assets/images/news/logoForbes.svg";
import posterTengrinews from "../../../assets/images/news/posterTengrinews.svg";
import posterTengrinewsPlaceholder from "../../../assets/images/news/placeholder-posterTengrinews.jpg";
import logoTengrinews from "../../../assets/images/news/logoTengrinews.svg";
import posterCapital from "../../../assets/images/news/posterCapital.svg";
import posterCapitalPlaceholder from "../../../assets/images/news/placeholder-posterCapital.jpg";
import logoCapital from "../../../assets/images/news/logoCapital.svg";
import posterAstanaHub from "../../../assets/images/news/posterAstanaHub.svg";
import posterAstanaHubPlaceholder from "../../../assets/images/news/placeholder-posterAstanaHub.jpg";
import logoAstanaHub from "../../../assets/images/news/logoAstanaHub.svg";
import posterDE from "../../../assets/images/news/posterDE.svg";
import posterDEPlaceholder from "../../../assets/images/news/placeholder-posterDE.jpg";
import logoDE from "../../../assets/images/news/logoDE.svg";
import posterDB from "../../../assets/images/news/posterDB.svg";
import posterDBPlaceholder from "../../../assets/images/news/placeholder-posterDB.jpg";
import logoDB from "../../../assets/images/news/logoDB.svg";
import posterPeople from "../../../assets/images/news/posterPeople.svg";
import posterPeoplePlaceholder from "../../../assets/images/news/placeholder-posterPeople.jpg";
import logoPeople from "../../../assets/images/news/logoPeople.svg";
import posterNewTimes from "../../../assets/images/news/posterNewTimes.svg";
import posterNewTimesPlaceholder from "../../../assets/images/news/placeholder-posterNewTimes.jpg";
import logoNewTimes from "../../../assets/images/news/logoNewTimes.svg";
import { useTranslation } from "react-i18next";

const SectionAbout = () => {
  const { t } = useTranslation(["main"], { keyPrefix: "sectionAbout" });

  const news: { media: string; title: string }[] = t("news", {
    returnObjects: true,
  });

  const getPosterAndLogo = (
    media: string
  ): {
    poster: string;
    posterPlaceholder: string;
    mediaLogo: string;
    link: string;
  } => {
    let poster = "";
    let posterPlaceholder = "";
    let mediaLogo = "";
    let link = "";
    if (media === "Forbes") {
      poster = posterForbes;
      posterPlaceholder = posterForbesPlaceholder;
      mediaLogo = logoForbes;
      link =
        "https://forbes.kz/process/technologies/kak_molodoy_kazahskiy_neyrohirurg_sozdal_startap_s_otsenkoy_v_32_mln/";
    } else if (media === "Tengrinews") {
      poster = posterTengrinews;
      posterPlaceholder = posterTengrinewsPlaceholder;
      mediaLogo = logoTengrinews;
      link =
        "https://tengrinews.kz/conference/iskusstvennyiy-intellekt-razvivaet-meditsinu-kazahstana-418/";
    }
    if (media === "Capital") {
      poster = posterCapital;
      posterPlaceholder = posterCapitalPlaceholder;
      mediaLogo = logoCapital;
      link =
        "https://kapital.kz/business/105154/kak-startapu-proyti-otbor-v-akseleratsionnuyu-programmu-fonda-ssha.html";
    }
    if (media === "AstanaHub") {
      poster = posterAstanaHub;
      posterPlaceholder = posterAstanaHubPlaceholder;
      mediaLogo = logoAstanaHub;
      link =
        "https://astanahub.com/article/kazakhstanskii-medtech-startap-masshtabiruetsia-v-ssha-italiiu-i-oae";
    }
    if (media === "DE") {
      poster = posterDE;
      posterPlaceholder = posterDEPlaceholder;
      mediaLogo = logoDE;
      link =
        "https://digitaleast.kz/news/na-forume-digital-bridge-2021-vruchili-premiyu-astana-hub-awards";
    }
    if (media === "DB") {
      poster = posterDB;
      posterPlaceholder = posterDBPlaceholder;
      mediaLogo = logoDB;
      link =
        "https://digitalbusiness.kz/2022-08-10/horosho-pospal-i-prinyal-lekarstvo-poluchi-token-kazahstanskij-startap-meddata-zamahnulsya-na-czifrovizacziyu-medicziny/";
    }
    if (media === "People") {
      poster = posterPeople;
      posterPlaceholder = posterPeoplePlaceholder;
      mediaLogo = logoPeople;
      link = "https://www.tpeople.online/post/180522";
    }
    if (media === "NewTimes") {
      poster = posterNewTimes;
      posterPlaceholder = posterNewTimesPlaceholder;
      mediaLogo = logoNewTimes;
      link =
        "https://newtimes.kz/obshchestvo/141581-kazakhstanets-vyigral-grant-50-tys-dlia-zapuska-proekta-po-tsifrovizatsii-meditsiny-za-rubezhom";
    }

    return { poster, mediaLogo, link, posterPlaceholder };
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
