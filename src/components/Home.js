import React from 'react';
import { FaSistrix, FaMicrophone} from 'react-icons/fa';

const Home = (props) => {
 
     const [state,setState] = React.useState('');

   const searchGoogle = (e) =>{
        props.history.push({pathname: '/search',state});
   }

    return (
        <div className="home">
            <div className="home_container">
              <div className="home_logo">
                  <img src="/images/googlelogo.png" alt="logo" />
              </div>
              <form 
                className="home__form"
                onSubmit={searchGoogle}
                >
                  <input 
                    type="text" 
                    className="home__input"
                    onChange={(e) => setState(e.target.value) }
                    value = {state}
                    required
                   />
                  <div className="home__group">
                      <input 
                        type="submit" 
                        className="home_btn"  
                        value="Google Search" />
                  </div>
                  <FaSistrix className="search_icon" />
                   <FaMicrophone className="microphone" />
              </form>
            </div>
            
        </div>
    )
}

export default Home;
