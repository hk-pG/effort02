type Props = {
  children: React.ReactNode;
  isDouble?: boolean;
};

const Strike = (props: Props) => {
  return (
    <span
      style={{
        textDecoration: 'line-through',
        textDecorationStyle: props.isDouble ? 'double' : 'solid',
      }}
    >
      {props.children}
    </span>
  );
};

export default Strike;
