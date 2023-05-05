import HomeHeader from './components/HomeHeader/HomeHeader';
import Plans from './components/Plans';
import Service from './components/Service/Service';
import Reviews from './components/Reviews/Reviews';
import Animation from './components/Animation/Animation';


const Home = () =>
{
  return (
    <div className="home-page">
      <div>
        <Animation />
      </div>
      <HomeHeader />
      <Service />
      <Plans />
      <Reviews />
    </div>
  )
}

export default Home
