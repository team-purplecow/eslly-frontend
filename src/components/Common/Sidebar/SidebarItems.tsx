import { useState } from 'react';
import { ItemsList, ItemContainer, ItemWrapper, ItemName } from './Sidebar.styled';

const dummyData = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <i className='bx bx-home' />,
  },
  {
    id: 2,
    name: 'Users',
    icon: <i className='bx bx-user' />,
  },
  {
    id: 3,
    name: 'Products',
    icon: <i className='bx bx-box' />,
  },
  {
    id: 4,
    name: 'Orders',
    icon: <i className='bx bx-cart' />,
  },
  {
    id: 5,
    name: 'Invoices',
    icon: <i className='bx bx-receipt' />,
  },
  {
    id: 6,
    name: 'Settings',
    icon: <i className='bx bx-cog' />,
  },
];

const SidebarItems = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <ItemsList>
      {dummyData.map((itemData, index) => (
        <ItemContainer
          key={index}
          onClick={() => setActiveItem(itemData.id)}
          className={itemData.id === activeItem ? 'active' : ''}
        >
          <ItemWrapper>
            {itemData.icon}
            <ItemName>{itemData.name}</ItemName>
          </ItemWrapper>
        </ItemContainer>
      ))}
    </ItemsList>
  );
};

export default SidebarItems;
