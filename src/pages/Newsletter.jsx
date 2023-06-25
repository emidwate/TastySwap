import { Link } from 'react-router-dom';

export default function Newsletter() {
  return (
    <div className='newsletter'>
      <Link to='..' className='link-back'>
        Go back
      </Link>
      <p>Thank you for signing up for our newsletter!</p>
      <p>We will send updates to you!</p>
    </div>
  );
}
