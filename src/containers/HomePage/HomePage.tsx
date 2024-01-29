import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Video from 'components/Video/Video';
import Benefits from 'containers/Benefits/Benefits';
import Courses from 'containers/Courses/Courses';
import Header from 'layouts/Header/Header';

const logos = [
  { name: 'zapier', src: 'zapier' },
  { name: 'spotify', src: 'spotify' },
  { name: 'zoom', src: 'zoom' },
  { name: 'amazon', src: 'amazon' },
  { name: 'adobe', src: 'adobe' },
  { name: 'notion', src: 'notion' },
  { name: 'netflix', src: 'netflix' },
];

const containerStyle = {
  borderRadius: 'var(--border-radius)',
  border: '1px solid var(--light-3)',
  background: 'var(--light-4)',
};

const imgStyle = {
  borderRadius: 'var(--border-radius)',
  background: 'var( --primary-light-4)',
};

const HeroSection = () => (
  <div className="flex justify-center w-full my-12">
    <Card>
      <SubContainer />
      <h2 className="app-text-md pt-6 pb-2 text-center">
        with Online Design and Development Courses.
      </h2>
      <h6 className="app-text-sm py-2 text-center">
        Learn from Industry Experts and Enhance Your Skills.
      </h6>
      <ButtonSection />
    </Card>
  </div>
);

const Card = ({ children }) => <div>{children}</div>;

const SubContainer = () => (
  <div
    className="relative flex items-center justify-center gap-6 py-3 px-5"
    style={containerStyle}
  >
    <Icon name="line" className="absolute left-[-30px] top-[-30px]" />
    <Icon
      name="lightning"
      className="flex items-center justify-center gap-6 p-3.5"
      style={imgStyle}
    />
    <h1 className="app-text-lg">
      <span style={{ color: 'var(--primary-color)' }}>Unlock</span> Your
      Creative Potential
    </h1>
  </div>
);

const LogoSection = () => (
  <div className="flex items-start my-4 bg-white border border-gray-300 rounded">
    {logos.map((logo, index) => (
      <div key={index} className="flex items-center gap-4">
        <LogoItem logo={logo} />
        {index !== logos.length - 1 && <Divider />}
      </div>
    ))}
  </div>
);

const LogoItem = ({ logo }) => (
  <div className="px-8 py-6">
    <Icon name={logo.name} />
  </div>
);

const Divider = () => (
  <div className="divider h-12 border-l border-gray-100"></div>
);

const ButtonSection = () => (
  <div className="flex justify-center mt-10 gap-2">
    <Button label="Explore Courses" bgColor='--light-4'/>
    <Button label="View Pricing" />
  </div>
);

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="md:container md:mx-auto">
        <HeroSection />
        <LogoSection />
        <Video />
        <Benefits />
        <Courses />
      </div>
    </>
  );
}
