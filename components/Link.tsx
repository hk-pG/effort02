// aタグに渡せるpropsの型を定義する
type aProps = JSX.IntrinsicElements['a'];

type Props = aProps & {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
};

const Link: React.VFC<Props> = (props: Props) => {
  const { children, fontSize = '1em', color = '#3a8ba9', ...rest } = props;
  return (
    <a
      {...rest}
      style={{
        color: color,
        textDecoration: 'underline',
        fontSize: fontSize,
      }}
    >
      {props.children}
    </a>
  );
};

export default Link;
