import React from 'react';
import axios from 'axios';

const Login = (props) => {
  const {logInAs} = props;

  const [username, changeUsername] = React.useState('');
  const [password, changePassword] = React.useState('');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      changeUsername(e.target.value);
    } else {
      changePassword(e.target.value);
    }
  }

  const login = () => {
    axios.get('/api/users')
      .then((res) => {
        let users = res.data;
        let compare = users.filter(u => u.username === username && u.password === password);
        if (!compare.length) {
          alert('Invalid Credentials')
        } else {
          logInAs(username)
        }
      })
  }

  return (
    <div>
      <input onChange={handleChange} name='username' placeholder='username' />
      <input onChange={handleChange} name='password' placeholder='password' />
      <button onClick={() => login()}>LOGIN</button>
    </div>
  )
}

export default Login