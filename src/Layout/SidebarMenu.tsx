import { Menu } from 'antd';
import { GrDashboard } from 'react-icons/gr';
import { GiHotMeal, GiChickenOven } from 'react-icons/gi';

import { useNavigate } from 'react-router';
import { MenuItem } from '../Types';



const SidebarMenu = () => {
  const navigate = useNavigate();

  const getItem = (
    key: string,
    label: string,
    children: MenuItem[] | undefined,
    icon: JSX.Element | undefined
  ): MenuItem => ({
    key,
    label,
    children,
    icon,
  });

  const items: MenuItem[] = [
    getItem(
      '',
      'Dashboard',
      undefined,
      <GrDashboard className="navbar-icon" />
    ),
    getItem(
      'vegetarians',
      'Vegetarian',
      undefined,
      <GrDashboard className="navbar-icon" />
    ),
    getItem(
      'meal ',
      'Meal ',
      undefined,
      <GiHotMeal className="navbar-icon" />
    ),
    getItem(
      'chicken ',
      'Chicken ',
      undefined,
      <GiChickenOven className="navbar-icon" />
    ),
    getItem(
      'dubble ',
      'dubble ',
      undefined,
      <GrDashboard className="navbar-icon" />
    ),
  ];

  return (
    <>
      <div className="sidebar">
        <h1 className="logo">
          Food Admin
        </h1>
        <Menu
          mode="inline"
          items={items}
          defaultSelectedKeys={[
            window.location.pathname === '/'
              ? ''
              : window.location.pathname.split('/')[1],
          ]}
          defaultOpenKeys={['sub2']}
          onClick={({ key }) => {
            console.log('Clicked key:', key);
            navigate('/' + key);
          }}
        />
      </div>
    </>
  );
};

export default SidebarMenu;
