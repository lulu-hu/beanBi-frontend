import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = 'lulu出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'bean Bi',
          title: 'bean Bi',
          href: '',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com',
          blankTarget: true,
        },
        {
          key: 'bean Bi',
          title: 'bean Bi',
          href: 'event',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
