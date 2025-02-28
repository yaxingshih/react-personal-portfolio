import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
    return (
      <section className="home section grid">
        <img src={ Profile } alt="Profile" className="home__img" />
        <div className="home__content">
          <div className="home__data">
            <h1 className='home__title'>
              <div>I'm Ya-Xin.</div>Software Engineer
            </h1>
            <p className="home__description">
              hello~~
            </p>
            <Link to='/about' className='button'>
              More about me {' '}
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="color__block"></div>
      </section>
    );
  };
  
  export default Home;  
  