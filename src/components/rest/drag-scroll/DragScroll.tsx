import { FC, useRef, useState } from "react";
import "./drag-scroll.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const DragScroll: FC<IProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isScrolling: true, clientX: e.clientX }));
  };
  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setState((prev) => ({ ...prev, isScrolling: false }));
  };
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (ref.current == null) return;

    const { scrollX, clientX, isScrolling } = state;

    if (!isScrolling) return;

    const sX = scrollX + e.clientX - clientX;
    ref.current.scrollLeft = sX;
    setState((prev) => ({ ...prev, scrollX: sX, clientX: e.clientX }));
  };

  return (
    <div
      className="drag-scroll"
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
};

export default DragScroll;
