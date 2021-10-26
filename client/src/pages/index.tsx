import { NextPage } from 'next';

interface Props {
  hostname: string;
}

const IndexPage: NextPage<Props> = (props: Props) => {
  return <div>hello {props.hostname}</div>;
};

export async function getStaticProps() {
  const hostname = 'HOSTNAME';
  return {
    props: {
      hostname,
    },
  };
}

export default IndexPage;
