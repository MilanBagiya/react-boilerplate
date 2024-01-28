import React, { CSSProperties } from 'react';
import {
  AppIcon,
  AppIconNameSubset,
  mioIconSet,
} from 'assets/svg/app-icon.model';
import './Icon.scss';

interface IconProps {
  name?: AppIconNameSubset<typeof mioIconSet>;
  className?: string;
  alt?: string;
  style?: CSSProperties;
}
const Icon: React.FC<IconProps> = ({ name, className, alt, style }) => {
  const iconData: AppIcon | undefined = mioIconSet.find(
    (icon) => icon.name === name
  );

  if (!iconData) {
    console.error(`Icon with name ${name} not found.`);
    return null;
  }

  const url = `data:image/svg+xml;utf8,${encodeURIComponent(iconData.data)}`;
  const altText = alt || name;

  return <img src={url} alt={altText} className={className} style={style} />;
};

export default Icon;
