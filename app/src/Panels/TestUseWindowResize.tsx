import useWindowResize from '../hooks/useWindowResize'

export default function TestUseWindowResize() {
  const [w_width, w_height] = useWindowResize();
  return (
    <div>
      <div className='title'>useWindowResize</div>
      窗口宽度：{w_width}<br />
      窗口高度：{w_height}
    </div>
  )
}