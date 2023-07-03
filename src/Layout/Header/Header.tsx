import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'

function Header() {
  return (
    <header className=" transition-all duration-900 ease-in-out">
      <div className="w-full h-[36px] bg-[#350a4e] absolute z-[3]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between mx-[15px] uppercase text-[10px] font-[600] text-white leading-[36px]">
            <div className="w-[50%] gap-x-[20px] flex items-center">
              <span className="pr-[45px]">+84 945 000 917</span>
              <LinkedInIcon
                sx={{ fontSize: 15, cursor: 'pointer' }}
              ></LinkedInIcon>
              <FacebookIcon
                sx={{ fontSize: 15, cursor: 'pointer' }}
              ></FacebookIcon>
              <InstagramIcon
                sx={{ fontSize: 15, cursor: 'pointer' }}
              ></InstagramIcon>
              <YouTubeIcon
                sx={{ fontSize: 15, cursor: 'pointer' }}
              ></YouTubeIcon>
              <TwitterIcon
                sx={{ fontSize: 15, cursor: 'pointer' }}
              ></TwitterIcon>
            </div>
            <div className="w-[50%] text-end">
              <span>Login </span> <span>|</span>
              <span>Register </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="absolute z-[2] w-full bg-[#36135499] ">
        <div className="uppercase py-[40px] pt-[60px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="items-center flex justify-between mx-[15px]">
              <div className="w-[25%]">
                <div className="text-[30px] text-[#f4f4f8] font-[800]">
                  Travelix
                </div>
              </div>
              <div className="w-[50%] text-right font-[600]">
                <ul>
                  <li className="inline-block mr-[35px]">
                    <Link className="text-white hover:border-b-2" to={'./'}>
                      Home
                    </Link>
                  </li>
                  <li className="inline-block mr-[35px]">
                    <Link className="text-white hover:border-b-2" to={'./'}>
                      ABOUT
                    </Link>
                  </li>
                  <li className="inline-block mr-[35px]">
                    <Link className="text-white hover:border-b-2" to={'./'}>
                      OFFERS
                    </Link>
                  </li>
                  <li className="inline-block mr-[35px]">
                    <Link className="text-white hover:border-b-2" to={'./'}>
                      NEWS
                    </Link>
                  </li>
                  <li className="inline-block mr-[35px]">
                    <Link className="text-white hover:border-b-2" to={'./'}>
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-[25%] text-right">
                <SearchIcon sx={{ color: 'white' }}></SearchIcon>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
