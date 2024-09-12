import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd'
import zh_CN from "antd/locale/zh_CN"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zh_CN}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
