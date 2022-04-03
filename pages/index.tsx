import { Button, Switch } from 'antd';
import { useCallback } from 'react';

import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <h3>Hello</h3>
      <Switch defaultChecked />
      <Button type="primary">KKKKK</Button>
    </>
  );
};

export default Home;
