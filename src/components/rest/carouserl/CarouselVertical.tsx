import React, {
  useMemo,
  Children,
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { useTranslation } from "react-i18next";
// import styles from "./carousel.module.css";
import "./carousel.scss";

interface IProps {
  children: JSX.Element[];
  enableNavigation?: boolean;
}

enum DirectionEnum {
  prev,
  next,
}

const transitionDurationInMs = 1000;
const transitionPauseInMs = 2000;

const CarouselVertical: React.FC<IProps> = ({
  children,
  enableNavigation = false,
}) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLUListElement | null>(null);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const [current, setCurrent] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);

  const actionHandler = useCallback(
    (mode: DirectionEnum) => {
      if (containerRef.current == null) return;

      containerRef.current.style.transitionDuration = `${transitionDurationInMs}ms`;
      if (mode === DirectionEnum.prev) {
        if (current <= 1) {
          setTranslateY(0);
          setCurrent(children.length);
        } else {
          setTranslateY(containerRef.current.clientHeight * (current - 1));
          setCurrent((prev) => --prev);
        }
      } else if (mode === DirectionEnum.next) {
        if (current >= children.length) {
          setTranslateY(
            containerRef.current.clientHeight * (children.length + 1)
          );
          setCurrent(1);
        } else {
          setTranslateY(containerRef.current.clientHeight * (current + 1));
          setCurrent((prev) => ++prev);
        }
      }
    },
    [current, children]
  );

  // This is for infinite scroll smooth effect
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (containerRef.current == null) return;

      if (current <= 1) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateY(containerRef.current.clientHeight * current);
      }

      if (current >= children.length) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateY(containerRef.current.clientHeight * children.length);
      }
    };

    document.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      document.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [current, children]);

  const play = useCallback(() => {
    intervalRef.current = setInterval(() => {
      actionHandler(DirectionEnum.next);
    }, transitionPauseInMs + transitionDurationInMs);
  }, [actionHandler]);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  // for autoplay
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    play();

    return stop;
  }, [play, stop]);

  const setRootHeight = () => {
    if (containerRef.current == null) return;

    let maxHeight = 0;
    for (let i = 0; i < containerRef.current.children.length; i++) {
      const child = containerRef.current.children[i];
      maxHeight = Math.max(maxHeight, child.children.item(0)!.clientHeight);
    }
    setMaxHeight(maxHeight);

    containerRef.current.parentElement!.style.height = `${maxHeight}px`;
  };

  // position first element correctly & this will render only ones
  useLayoutEffect(() => {
    if (containerRef.current == null) return;

    window.addEventListener("resize", setRootHeight);
    setRootHeight();

    setTranslateY(containerRef.current.clientHeight * current);

    return () => window.removeEventListener("resize", setRootHeight);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  const slides = useMemo(() => {
    if (children.length > 1) {
      let items = Children.map(children, (child, index) => (
        <li
          style={{ height: maxHeight }}
          key={index}
          className={`Slide ${
            index + 1 === current
              ? "IsActive"
              : index + 2 === current
              ? "IsPrev"
              : ""
          }`}
        >
          {child}
        </li>
      ));

      return [
        <li
          key={children.length + 1}
          className="Slide"
          style={{ height: maxHeight }}
        >
          {children[children.length - 1]}
        </li>,
        ...items,
        <li
          key={children.length + 2}
          className="Slide"
          style={{ height: maxHeight }}
        >
          {children[0]}
        </li>,
      ];
    }

    return <li className="Slide">{children[0]}</li>;
  }, [children, current, maxHeight]);

  return (
    <section className="Root" style={{ height: maxHeight }}>
      <ul
        ref={containerRef}
        className="Container"
        style={{
          transform: `translateY(${-translateY}px)`,
        }}
      >
        {slides}
      </ul>

      {enableNavigation && (
        <>
          <button
            onClick={() => actionHandler(DirectionEnum.prev)}
            className={`'Btn BtnLeft`}
          >
            {"<"}
          </button>
          <button
            onClick={() => actionHandler(DirectionEnum.next)}
            className={`Btn BtnRight`}
          >
            {">"}
          </button>
        </>
      )}
    </section>
  );
};

export default CarouselVertical;
