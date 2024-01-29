import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';

const commonCardStyle = {
  borderRadius: 'var(--border-radius-lg)',
  border: '1px solid var(--light-2)',
  background: 'var(--light-4)',
};

const cardData = [
  {
    number: '01',
    title: 'Flexible Learning Schedule',
    description:
      'Fit your coursework around your existing commitments and obligations.',
  },
  {
    number: '02',
    title: 'Expert Instruction',
    description:
      'Learn from industry experts who have hands-on experience in design and development.',
  },
  {
    number: '03',
    title: 'Diverse Course Offerings',
    description:
      'Explore a wide range of design and development courses covering various topics.',
  },
  {
    number: '04',
    title: 'Updated Curriculum',
    description:
      'Access courses with up-to-date content reflecting the latest trends and industry practices.',
  },
  {
    number: '05',
    title: 'Practical Projects and Assignments',
    description:
      'Develop a portfolio showcasing your skills and abilities to potential employers.',
  },
  {
    number: '06',
    title: 'Interactive Learning Environment',
    description:
      'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.',
  },
];

const BenefitCard = ({ number, title, description }) => (
  <div
    className="flex flex-col items-end gap-8 p-6 mt10 flex-1 rounded-lg bg-white mt-5 w-full
  transition-transform transform hover:shadow-lg"
  >
    <h2 className="text-6xl font-semibold">{number}</h2>
    <div>
      <h4 className="app-text-md py-2">{title}</h4>
      <h5 className="app-text-sm py-2">{description}</h5>
    </div>
    <div className="flex items-center p-4" style={commonCardStyle}>
      <Icon name="cross-arrow" />
    </div>
  </div>
);

const CardSection = () => (
  <div className="grid grid-cols-3 gap-4 mt-8">
    {cardData.map((data, index) => (
      <BenefitCard key={index} {...data} />
    ))}
  </div>
);

const BenefitTitle = () => (
  <div className="flex justify-between items-end">
    <div className="w-5/6">
      <h2 className="app-text-md pt-10 pb-8">Benefits</h2>
      <h6 className="app-text-sm py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        aliquam, culpa eos optio voluptatem nihil officia, vitae minima totam
        dolor eum quasi. Nobis perferendis non animi recusandae expedita
        suscipit pariatur?
      </h6>
    </div>
    <div>
      <Button label="View All" bgColor="--light-4" />
    </div>
  </div>
);

export default function Benefits() {
  return (
    <>
      <BenefitTitle />
      <CardSection />
    </>
  );
}
