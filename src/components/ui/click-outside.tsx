import React, { ReactNode, useEffect, useRef } from 'react';

type ClickOutsideProps = {
  handleClickOutside: (e: MouseEvent) => void;
  children: ReactNode;
  className?: string;
  disable?: boolean;
};

const ClickOutside = (props: ClickOutsideProps) => {
  const domNodeRef = useRef<HTMLDivElement | null>(null);

  const { className = '', disable = false, handleClickOutside, children } = props;

  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent) => {
      if (
        !disable &&
        domNodeRef.current &&
        e.target &&
        !domNodeRef.current.contains(e.target as Node)
      ) {
        handleClickOutside(e);
      }
    };
    document.addEventListener('click', clickOutsideHandler, true);
    return () => {
      document.removeEventListener('click', clickOutsideHandler, true);
    };
  }, []);

  return (
    <div
      className={`clickoutside ${className}`}
      onClick={(e) => e.stopPropagation()}
      ref={domNodeRef}
    >
      {children}
    </div>
  );
};

ClickOutside.displayName = 'ClickOutside';

export { ClickOutside };
