import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import visa from '../assets/visa.png';
import amex from '../assets/shopping.png';
import mastercard from '../assets/card.png';

export default function Footer() {
  return (
    <footer>
      <h1 className='footer-title'>Create an account</h1>
      <p className='footer-paragraph'>
        Forget about constantly filling out forms and streamline your purchases
      </p>
      <Link to='account'>
        <button className='footer-button'>Register</button>
      </Link>
      <div>
        <h1 className='footer-terms'>Terms and conditions</h1>
        <ul className='footer-list'>
          <Link to='terms' className='link'>
            <li className='footer-item'>Terms of service</li>
          </Link>
          <Link to='policy' className='link'>
            <li className='footer-item'>Policy</li>
          </Link>
        </ul>
      </div>
      <ul className='social-media-icons'>
        <Link to=''>
          <img src={facebook} alt='facebook-icon' className='icon' />
        </Link>
        <Link to=''>
          <img src={instagram} alt='instagram-icon' className='icon' />
        </Link>
      </ul>
      <hr className='white-line' />
      <ul className='payment-options-list'>
        <img src={visa} className='visa icon' />
        <img src={amex} className='amex icon' />
        <img src={mastercard} className='mastercard icon' />
      </ul>
      Emidwate &copy;
    </footer>
  );
}
