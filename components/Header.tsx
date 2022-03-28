import styles from './Header.module.css';

type Props = {
  title: string;
};

const Header: React.VFC<Props> = (props: Props) => {
  const { title } = props;
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Header;
