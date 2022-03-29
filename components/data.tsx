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
    name: 'ei2009',
    content: (
      <Article
        //
        title="タイトル1"
        key={'ei2032'}
        content={
          <div>
            <p>内容1</p>
          </div>
        }
      />
    ),
  },
  {
    id: 2,
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
    id: 3,
    name: 'ei2032',
    content: (
      <Article
        //
        title="タイトル2"
        key={'ei2032'}
        content={
          <div>
            <p>内容2</p>
          </div>
        }
      />
    ),
  },
  {
    id: 4,
    name: 'ei2036',
    content: (
      <Article
        //
        title="帰りたい"
        key={'ei2036'}
        content={
          <div>
            <p>
              どうも、今回の主役ことei2036の森田幸磨です。
              <br />
              私はすごいがんばりました。 あっ、今本人が帰りました。
            </p>
          </div>
        }
      />
    ),
  },
  {
    id: 5,
    name: 'ei2037',
    content: (
      <Article
        //
        title="タイトル4"
        key={'ei2032'}
        content={
          <div>
            <p>内容4</p>
          </div>
        }
      />
    ),
  },
];

export default data;
