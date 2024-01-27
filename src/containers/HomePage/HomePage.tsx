import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import Header from '../../layouts/Header/Header';
import './HomePage.scss';

const logos = [
  { name: 'zapier', src: 'zapier' },
  { name: 'spotify', src: 'spotify' },
  { name: 'zoom', src: 'zoom' },
  { name: 'amazon', src: 'amazon' },
  { name: 'adobe', src: 'adobe' },
  { name: 'notion', src: 'notion' },
  { name: 'netflix', src: 'netflix' },
];

const LogoSection = () => (
  <div className="flex items-start mx-4 md:mx-24 my-3 bg-white border border-gray-300 rounded">
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

const HeroSection = () => (
  <div className="flex justify-center w-full my-12">
    <Card>
      <SubContainer />
      <h2>with Online Design and Development Courses.</h2>
      <h6>Learn from Industry Experts and Enhance Your Skills.</h6>
      <ButtonSection />
    </Card>
  </div>
);

const Card = ({ children }) => <div className="card">{children}</div>;

const SubContainer = () => (
  <div className="sub-container">
    <Icon name="line" className="arrow-image" />
    <Icon name="lightning" className="img-wrapper" />
    <span>Unlock Your Creative Potential</span>
  </div>
);

const ButtonSection = () => (
  <div className="flex justify-center mt-10 gap-2">
    <Button label="Explore Courses" variant="primary" />
    <Button label="View Pricing" />
  </div>
);

export default function HomePage() {
  return (
    <div>
      <div className="p-30 w-full">
        <Header />
        <HeroSection />
        <LogoSection />
      </div>
    </div>
  );
}
