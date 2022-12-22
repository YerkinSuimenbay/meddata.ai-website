import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../../assets/images/logo-meddata.svg";
import { ReactComponent as PlayButtonIcon } from "../../../assets/images/playButton.svg";
import CarouselVertical from "../../../components/rest/carousel/CarouselVertical";
import adForMedDataAiVideoSrc from "../../../assets/videos/AdForMedDataAi.mp4";
import { ReactComponent as Plus } from "../../../assets/images/plus.svg";
import useScreen from "../../../hooks/useScreen";
import { Screen } from "../../../types";

const Section1 = () => {
  const { t } = useTranslation(["main"]);
  const [showVideo, setShowVideo] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const fullScreenVideoRef = useRef<HTMLVideoElement | null>(null);
  const screen = useScreen();

  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  function enableScrolling() {
    window.onscroll = function () {};
  }

  const handleShowVideo = () => {
    if (fullScreenVideoRef.current == null) return;
    setShowFullScreen(true);
    fullScreenVideoRef.current.currentTime = 0;
    fullScreenVideoRef.current.muted = false;
    disableScrolling();
  };

  const handleHideVideo = () => {
    if (fullScreenVideoRef.current == null) return;

    setShowVideo(false);
    setShowFullScreen(false);

    fullScreenVideoRef.current.currentTime = 0;
    fullScreenVideoRef.current.muted = true;

    enableScrolling();
  };

  const texts: string[] = t("section1", { returnObjects: true });

  return (
    <div className="section__one__wrapper">
      <div className={`section__one__background ${showVideo ? "swipeUp" : ""}`}>
        <section className="section__one container">
          <div className="section__one__left">
            <Logo className="section__one__left__logo" />
            <h2 className="section__one__left__logoText">MedData.AI</h2>
          </div>
          <div className="section__one__middle" />
          <div className="section__one__right">
            {/* <VerticalScrollingText /> */}
            <CarouselVertical>
              {texts.map((text) => (
                <p key={text} className="section__one__right__text">
                  {text}
                </p>
              ))}
            </CarouselVertical>
          </div>
          <button className="playButton" onClick={handleShowVideo}>
            <PlayButtonIcon />
          </button>
        </section>

        <video
          autoPlay
          muted
          loop
          id="background-video"
          onClick={handleHideVideo}
        >
          <source src={adForMedDataAiVideoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      <div
        className={`full-screen-video-container ${
          showFullScreen ? "show" : ""
        }`}
      >
        <div>
          {screen <= Screen.desktop && (
            <button className="close-video-button" onClick={handleHideVideo}>
              <Plus />
            </button>
          )}
          <video
            autoPlay
            muted
            loop
            onClick={() => {
              if (screen <= Screen.desktop) return;
              handleHideVideo();
            }}
            className="full-screen-video"
            ref={fullScreenVideoRef}
          >
            <source src={adForMedDataAiVideoSrc} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </div>
  );
};

// const VerticalScrollingText = () => {
//   return (
//     <div className="verticalScrollingText__container">
//       <div className="verticalScrollingText">
//         <p className="text">Платформа для эффективного управления клиникой</p>
//         <p className="text">Приложение для здоровья</p>
//         <p className="text">Крипто-приложение для здоровых привычек</p>
//       </div>
//     </div>
//   );
// };

export default Section1;
