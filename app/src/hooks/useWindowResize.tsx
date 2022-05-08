import { useEffect, useState } from 'react';

export default function useWindowResize() {
  const [w_width, set_w_width] = useState(0);
  const [w_height, set_w_height] = useState(0);

  function onResize() {
    set_w_width(window.innerWidth);
    set_w_height(window.innerHeight)
  }

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return { w_width, w_height }
}