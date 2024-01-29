import FrontDev from 'assets/images/front-end.png';
import Graphic from 'assets/images/graphic-design.png';
import JSDev from 'assets/images/javascript.png';
import MobApp from 'assets/images/mobile-app.png';
import UiUx from 'assets/images/ui-ux.png';
import WebDev from 'assets/images/web.png';
import Button from 'components/Button/Button';

const commonCardStyle = {
  borderRadius: 'var(--border-radius)',
  border: '1px solid var(--light-2)',
  background: 'var(--light-4)',
};

const cardData = [
  {
    img: WebDev,
    title: 'Flexible Learning Schedule',
    description:
      'Fit your coursework around your existing commitments and obligations.',
  },
  {
    img: UiUx,
    title: 'Expert Instruction',
    description:
      'Learn from industry experts who have hands-on experience in design and development.',
  },
  {
    img: MobApp,
    title: 'Diverse Course Offerings',
    description:
      'Explore a wide range of design and development courses covering various topics.',
  },
  {
    img: Graphic,
    title: 'Updated Curriculum',
    description:
      'Access courses with up-to-date content reflecting the latest trends and industry practices.',
  },
  {
    img: FrontDev,
    title: 'Practical Projects and Assignments',
    description:
      'Develop a portfolio showcasing your skills and abilities to potential employers.',
  },
  {
    img: JSDev,
    title: 'Interactive Learning Environment',
    description:
      'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.',
  },
];

const CourseTitle = () => (
  <div className="flex justify-between items-end">
    <div className="w-5/6">
      <h2 className="app-text-md pt-10 pb-8">Our Courses</h2>
      <h6 className="app-text-sm py-2">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </h6>
    </div>
    <div>
      <Button label="View All" bgColor="--light-4" />
    </div>
  </div>
);

const CardSection = () => (
  <div className="grid grid-cols-2 gap-4 mt-8">
    {cardData.map((data, index) => (
      <CourseCard key={index} {...data} />
    ))}
  </div>
);

const CourseCard = ({ img, title, description }) => (
  <div
    className="flex flex-col gap-8 p-6 mt10 flex-1 rounded-lg bg-white mt-5 w-full
    transition-transform transform hover:shadow-lg"
  >
    <img src={img} alt={img} />

    <div className="flex justify-between items-center">
      <div className="gap-2 flex">
        <span className="p-2 text-xs font-bold" style={commonCardStyle}>
          4 Weeks
        </span>
        <span className="p-2 text-xs font-bold" style={commonCardStyle}>
          Beginner
        </span>
      </div>
      <p className="text-xs font-bold">By John Smith</p>
    </div>

    <div>
      <h2 className="text-base font-bold pb-3">{title}</h2>
      <p className="text-xs">{description}</p>
    </div>

    <Button label="Get it Now" bgColor="--light-3" />
  </div>
);

export default function Courses() {
  return (
    <>
      <CourseTitle />
      <CardSection />
    </>
  );
}
