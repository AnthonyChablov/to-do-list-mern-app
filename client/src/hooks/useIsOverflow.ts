import React from 'react';

export const useIsOverflow = (ref:any) => {

  
  const [isOverflow, setIsOverflow] = React.useState(false);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

    };

    if (current) {
      trigger();
    }
  }, [ ref]);

  return isOverflow;
};