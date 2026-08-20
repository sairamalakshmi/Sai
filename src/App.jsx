import Header from './components/Header';
import ProfileHero from './components/ProfileHero';
import Company from './components/Company';
import About from './components/About';
import Expertise from './components/Expertise';
import Technologies from './components/Technologies';
import Connect from './components/Connect';

export default function App() {
  return (
    <div className="app">
      <Header />
      <ProfileHero />
      <main>
        <Company />
        <About />
        <Expertise />
        <Technologies />
        <Connect />
      </main>

    </div>
  );
}
