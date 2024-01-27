import React from "react";
import {
  AppIcon,
  AppIconNameSubset,
  mioIconSet,
} from "../../assets/svg/app-icon.model";

interface IconProps {
  name?: AppIconNameSubset<typeof mioIconSet>;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const iconData: AppIcon | undefined = mioIconSet.find(
    (icon) => icon.name === name
  );

  if (!iconData) {
    console.error(`Icon with name ${name} not found.`);
    return null;
  }

  const url = `data:image/svg+xml;utf8,${encodeURIComponent(iconData.data)}`;

  return <img src={url} alt={name} className={className} />;
};

export default Icon;
