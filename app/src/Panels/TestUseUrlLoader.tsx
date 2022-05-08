import { useState } from 'react';
import useUrlLoader from '../hooks/useUrlLoader';

export default function TestUseUrlLoader() {
  const [show_img, set_show_img] = useState(false)
  const [url, is_success] = useUrlLoader('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic01.1sucai.com%2F180115%2F330814-1P11516240997.jpg&refer=http%3A%2F%2Fpic01.1sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654590812&t=73f192c514ee29912e094e2af0de5220', show_img);

  return (
    <div>
      <div className='title'>useUrlLoader</div>
      <button onClick={() => set_show_img(true)}>加载图片</button>
      {show_img && (is_success ? <img src={url} style={{ width: '100%' }} /> : <p>图片正在加载中...</p>)}
    </div>
  )
}