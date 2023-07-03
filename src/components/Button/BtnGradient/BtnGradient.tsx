import { Link } from 'react-router-dom'
function BtnGradient() {
  return (
    <div className="inline-block h-[53px] rounded-[27px] overflow-hidden relative mt-[10px] left-[32%] group">
      <div className="group-hover:left-[-100%] absolute top-0 left-0 w-[200%] h-full transition-all duration-400 ease-in-out cursor-pointer bg-gradient-to-r from-yellow-400 via-purple-600 to-yellow-400"></div>
      <Link
        to={'./'}
        className="text-[13px] font-[700] text-white uppercase leading-[53px] px-[46px] whitespace-nowrap relative flex items-center"
      >
        explore now
        <span className="inline-block w-[5.75px] h-[5.63px] bg-white rounded-[50%] mr-[2px] ml-[5px]"></span>
        <span className="inline-block w-[5.75px] h-[5.63px] bg-white rounded-[50%] mr-[2px] opacity-[0.6]"></span>
        <span className="inline-block w-[5.75px] h-[5.63px] bg-white rounded-[50%]  opacity-[0.4]"></span>
        <span></span>
      </Link>
    </div>
  )
}

export default BtnGradient
