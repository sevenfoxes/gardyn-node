// import useReactDimensions from 'use-react-dimensions';

import { useRef } from 'react';

// export const useDimensions = useReactDimensions;

interface useDimensionsType {
  height?: number;
}

export const useDimensions = ({ height }: useDimensionsType) => {
  const ref = useRef(null);
  const dimensions = {
    height,
    isDomAttached: false,
  };
  return { height, ref, dimensions };
};
