import { useEffect, useState } from 'react';

export default function useUrlLoader(url: string, show_img: boolean): [string, boolean] {
  const [_url, set_url] = useState('');
  const [is_success, set_is_success] = useState(false);

  useEffect(() => {
    if (!show_img) return;
    let image_: any = new Image();
    setTimeout(() => { image_.src = url; }, 800)
    image_.onload = () => {
      set_url(url);
      set_is_success(true);
      image_ = null;
    }
  }, [show_img]);

  return [_url, is_success];
}