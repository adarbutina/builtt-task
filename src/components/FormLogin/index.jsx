import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormLogin = () =>
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Hardcoded user validation
    if (email === 'test@test.com' && password === 'test1234') {
      navigate('/collection');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <>
      <div className="component" data-name="FormLogin">
        <div className="container" data-size="medium">
          <h2>Prijavi se na svoj nalog</h2>
          <form className="form" onSubmit={handleLogin}>
            <span className="input">
              <span className="input__label">E-mail adresa</span>
              <input
                className="input__field"
                type="text"
                placeholder="Upišite e-mail adresu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <span className="input">
              <span className="input__label">Šifra</span>
              <input
                className="input__field"
                type="password"
                placeholder="Upišite šifru"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
            <button type="submit" className="button button--primary button--emphasized button__submit">Prijavi se na nalog</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormLogin;