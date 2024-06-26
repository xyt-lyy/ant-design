import React from 'react';
import { Alert } from 'antd';

const App: React.FC = () => (
  <>
    <Alert message="请先移除部门内所有人员再进行删除部门操作" banner />
    <br />
    <Alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <br />
    <Alert showIcon={false} message="Warning text without icon" banner />
    <br />
    <Alert type="error" message="Error text" banner />
  </>
);

export default App;
