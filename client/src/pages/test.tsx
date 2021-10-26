import { NextPage } from 'next';

interface Props {
  hostname: string;
}

const TestPage: NextPage<Props> = (props: Props) => {
  return <div>TESTPAGE {props.hostname}</div>;
};

export default TestPage;
