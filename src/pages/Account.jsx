import { Link } from 'react-router-dom';
export default function Account() {
  return (
    <section>
      <form action='form-page' className='account-container'>
        <h3>Login</h3>
        <div className='account-wrapper'>
          <input
            type='email'
            name='account-email'
            id='account-email'
            placeholder='Email address'
          />
          <input
            type='password'
            name='account-password'
            id='account-password'
            placeholder='Password'
          />
          <Link className='account-link'>Forgot your password ?</Link>
        </div>
        <button type='button' className='account-wrapper-btn'>
          Login
        </button>
        <Link className='account-link'>Create an account</Link>
      </form>
    </section>
  );
}
