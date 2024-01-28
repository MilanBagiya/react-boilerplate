import Icon from 'components/Icon/Icon';

interface IBanner {
  bannerMessage?: string;
  textColor?: string;
  bgColor?: string;
}

const Banner: React.FC<IBanner> = ({ bannerMessage, textColor, bgColor }) => {
  const bannerStyle = {
    color: textColor || 'var(--white)',
    borderRadius: 'var(--border-radius)',
    background: bgColor || 'var(--primary-color)',
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--sm-font-size)',
  };

  const bannerText = bannerMessage
    ? bannerMessage
    : 'Free Courses 🌟 Sale Ends Soon, Get It Now';

  return (
    <>
      <div
        style={bannerStyle}
        className="text-center p-3 mt-2 flex items-center justify-center"
      >
        <h6 className="flex items-center gap-6">
          {bannerText} <Icon name="right" />
        </h6>
      </div>
    </>
  );
};

export default Banner;
