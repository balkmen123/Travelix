import BtnGradient from '../../components/Button/BtnGradient/BtnGradient'
import Search from '../../components/Search/Search'

function Home() {
  return (
    <div>
      <div className="sileder">
        <div
          className="w-full h-[963px] bg-no-repeat bg-centerbg-gradient-to-br from-purple-900 to-purple-500"
          style={{
            backgroundImage:
              'linear-gradient(rgba(64, 6, 97, 0.4), rgba(64, 6, 97, 0.4)), url(https://tranhoangkhang1212.github.io/travelix/assets/images/bg_header.webp)',
          }}
        ></div>
        <div className="absolute m-auto top-[26%] left-[34%]">
          <div className="text-white ">
            <h1 className="text-[112px] uppercase font-[900]">Discover</h1>
            <h1 className="font-[Beyond] text-[100px] text-center font-[900]">
              the world
            </h1>
            <BtnGradient></BtnGradient>
          </div>
        </div>
      </div>
      <div className="search">
        <Search></Search>
      </div>
    </div>
  )
}

export default Home
