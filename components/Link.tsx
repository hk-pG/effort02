type aProps = JSX.IntrinsicElements['a'];

type Props = aProps & {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
};

const Link: React.VFC<Props> = (props: Props) => {
  const { children, fontSize = '1em', color = '#3f5ff0', ...rest } = props;
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
