import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styles from './MainTabs.module.css';

type TabElement = {
  title: string;
  content: React.ReactNode;
};

type Props = {
  children: TabElement[];
};

const MainTabs: React.VFC<Props> = (props: Props) => {
  return (
    <>
      <Tabs>
        <TabList>
          {props.children.map((tab, index) => (
            <Tab key={index}>{tab.title}</Tab>
          ))}
        </TabList>
        {props.children.map((child, index) => (
          <TabPanel key={index}>{child.content}</TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default MainTabs;
