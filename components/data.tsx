import React from 'react';
import Article from './Article';

type Data = {
  id: number;
  name: string;
  content: React.ReactNode;
};

const data: Data[] = [
  {
    id: 1,
    name: 'ei2030',
    content: (
      <>
        <Article
          //
          title="あいさつ"
          key={'ei2030'}
          content={
            <p>
              どうも、今年の努力の跡は思い切ってグループで参加してみましたei2030こと深田大貴です。
            </p>
          }
        />
      </>
    ),
  },
  {
    id: 2,
    name: 'name',
    content: (
      <div>
        <p>Hello!</p>
      </div>
    ),
  },
];

export default data;
