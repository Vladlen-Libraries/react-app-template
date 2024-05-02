import cn from 'classnames';
import { Icons, IconsId } from '../../../icons/output/icons';
import styles from './ud-icon.module.scss';

type Props = {
  icon?: IconsId;
  size: number;
  danger?: boolean;
  onClick?: Function;
} & React.HTMLAttributes<HTMLSpanElement>;
const UDIcon = (props: Props) => {
  const { icon, danger, className, size, ...other } = props;
  const iconClassNames = cn(styles.icon, 'icon', `icon-${icon}`, className, {
    [styles.iconPointer]: !!other.onClick,
    [styles.danger]: danger
  });
  const iconSize = `${size / 10}rem`;
  return (
    <i
      className={iconClassNames}
      style={{ width: iconSize, fontSize: iconSize, height: iconSize }}
      {...other}
    />
  );
};

UDIcon.defaultProps = {
  size: 24
};

export type UDIconType = IconsId;
export { Icons as UDIconTypeEnum };

export default UDIcon;
