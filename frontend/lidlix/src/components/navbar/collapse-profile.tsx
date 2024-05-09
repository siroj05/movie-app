import ExitIcon from '../../assets/svg/exit-icon.svg'
import { Link } from 'react-router-dom'

const CollapseProfile = () => {

  return(
    <>
      <div className="flex justify-between m-2">
        <div className="w-full border-r-2">
          <div className='mr-2'>
            <li><a>Profile</a></li>
            <li><a>Keranjang</a></li>
            <li><a>Wishlist</a></li>
            <li><a> Keluar <img src={ExitIcon} alt="React Logo" /> </a></li>
          </div>
        </div>
        <div className="w-full ml-2">
          <li><Link to={'/seller'}>Pedagang</Link></li>
        </div>
      </div>
    </>
  )
}

export default CollapseProfile