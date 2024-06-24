import React, { useRef, useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface Prop {
  delegate?: string, options?: any, children?: React.ReactNode
}

const Fancybox: React.FC<Prop> = ({ delegate, options, children } ) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegateOpt = delegate || "[data-fancybox]";

    NativeFancybox.bind(container, delegateOpt, options || {});

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div  ref={containerRef}>{children}</div>;
}

export default Fancybox;
