import Hero from '../components/Hero';
import Hello from '../components/Hello';
import FadeIn from "../components/FadeIn";
// import Grid from "../components/Grid";
const Home = () => {
  return (
    <div className="bg-white text-black rounded-t-[40px] p-10 shadow-lg font-sans">  
      <Hero />
      <Hello />
      <FadeIn />
      {/* <Grid /> */}
    </div>
  );
}

export default Home;