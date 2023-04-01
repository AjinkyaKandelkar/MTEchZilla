import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'

function Form() {

  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      let datedata = (response.data.created_at).substring(0,10);
      response.data.created_at =datedata;
      setUserData(response.data);
      
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="fs-2 mb-3"> Lets start here... </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control form-control-lg" value={username} onChange={handleChange}  placeholder="username" aria-label="username" aria-describedby="button-addon2"/>
                                <button className="btn btn-primary  text-uppercase" type="submit" id="button-addon2"> Submit </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


      {userData && (
        <div className="card p-4">
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 text-center'>
                    <div>
                        <img className='img-fluid' src={userData.avatar_url} alt={`${username}'s avatar`} />
                    </div>
                    <div className='username mt-2'>
                        {userData.login}
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                        <div className='col-md-6'>
                           <div className='card text-center'>
                                <div className='card-header'>
                                    Name
                                </div>
                                <div className='card-body'>
                                        {userData.name}
                                </div>
                           </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='card text-center'>
                                    <div className='card-header'>
                                        Public Repo
                                    </div>
                                    <div className='card-body'>
                                        {userData.public_repos}
                                    </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-6'>
                            <div className='card text-center'>
                                    <div className='card-header'>
                                        Public Gists
                                    </div>
                                    <div className='card-body'>
                                        {userData.public_gists}
                                    </div>
                            </div>
            
                        </div>
                        <div className='col-md-6'>
                            <div className='card text-center'>
                                    <div className='card-header'>
                                        Created Date
                                    </div>
                                    <div className='card-body'>
                                        {userData.created_at}
                                    </div>
                            </div>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
      )}
      {error && <p>Sorry, we could not find that user.</p>}
    </div>
  );
}
export default Form;