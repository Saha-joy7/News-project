import moment from 'moment/moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex text-center justify-center space-y-3'>
            <div>
            <img className='w-72' src={logo} />
            <p>Journalism Without Fear or Favour</p>
            <small>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</small>
            </div>
        </div>
    );
};

export default Header;