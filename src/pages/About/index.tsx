import React, { useState } from 'react';
import { observer } from 'mobx-react';
import user from '../../store/user';

function About() {
  const [pageTitle] = useState('关于页面');

  return (
    <div>
      <h1>{pageTitle}</h1>
      <h2>{user.num}</h2>
      <button onClick={() => user.changeNum()}>点击使用mobx改变数字</button>
    </div>
  );
}

export default observer(About);
