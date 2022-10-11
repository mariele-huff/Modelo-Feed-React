import styles from './index.module.css';

interface AvatarProps{
   hasBorder:Boolean;
   src: string;
}

export function Avatar ({hasBorder = true, src}: AvatarProps){
 return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    src={src}
    />
 )
}


