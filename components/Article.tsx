type Props = {
  title: string;
  content: React.ReactNode;
};

const Article: React.VFC<Props> = (props: Props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.content}
    </div>
  );
};

export default Article;
