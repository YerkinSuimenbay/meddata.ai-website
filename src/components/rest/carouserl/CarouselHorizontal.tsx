import React, {
  useMemo,
  Children,
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import styles from "./carousel.module.css";

interface IProps {
  children: JSX.Element[];
  enableNavigation?: boolean;
}

enum DirectionEnum {
  prev,
  next,
}

const transitionDurationInMs = 400;

const CarouselHorizontal: React.FC<IProps> = ({
  children,
  enableNavigation = false,
}) => {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const actionHandler = useCallback(
    (mode: DirectionEnum) => {
      if (containerRef.current == null) return;

      containerRef.current.style.transitionDuration = `${transitionDurationInMs}ms`;
      if (mode === DirectionEnum.prev) {
        if (current <= 1) {
          setTranslateX(0);
          setCurrent(children.length);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current - 1));
          setCurrent((prev) => --prev);
        }
      } else if (mode === DirectionEnum.next) {
        if (current >= children.length) {
          setTranslateX(
            containerRef.current.clientWidth * (children.length + 1)
          );

          setCurrent(1);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current + 1));
          setCurrent((prev) => ++prev);
        }
      }
    },
    [current, children]
  );

  // This is for infinite scroll smooth effect
  useEffect(() => {
    const transitionEnd = () => {
      if (containerRef.current == null) return;

      if (current <= 1) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * current);
      }

      if (current >= children.length) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * children.length);
      }
    };

    document.addEventListener("transitionend", transitionEnd);

    return () => {
      document.removeEventListener("transitionend", transitionEnd);
    };
  }, [current, children]);

  //   for autoplay
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      actionHandler(DirectionEnum.next);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [actionHandler]);

  //   position first element correctly & this will render only ones
  useLayoutEffect(() => {
    if (containerRef.current == null) return;
    setTranslateX(containerRef.current.clientWidth * current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slides = useMemo(() => {
    if (children.length > 1) {
      let items = Children.map(children, (child, index) => (
        <li key={index} className={`${styles.Slide}`}>
          {child}
        </li>
      ));

      return [
        <li key={children.length + 1} className={styles.Slide}>
          {children[children.length - 1]}
        </li>,
        ...items,
        <li key={children.length + 2} className={styles.Slide}>
          {children[0]}
        </li>,
      ];
    }

    return <li className={styles.Slide}>{children[0]}</li>;
  }, [children]);

  return (
    <section className={styles.Root}>
      <ul
        ref={containerRef}
        className={styles.Container}
        style={{
          transform: `translate3d(${-translateX}px, 0, 0)`,
        }}
      >
        {slides}
      </ul>

      {enableNavigation && (
        <>
          <button
            onClick={() => actionHandler(DirectionEnum.prev)}
            className={`${styles.Btn} ${styles.BtnLeft}`}
          >
            {"<"}
          </button>
          <button
            onClick={() => actionHandler(DirectionEnum.next)}
            className={`${styles.Btn} ${styles.BtnRight}`}
          >
            {">"}
          </button>
        </>
      )}
    </section>
  );
};

export default CarouselHorizontal;
