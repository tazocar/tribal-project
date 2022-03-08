import { IoCardSharp, IoBusinessSharp, IoNotifications, IoPeopleSharp } from 'react-icons/io5';
import { MdPayments } from 'react-icons/md';

const NavData = [
  {
    label: 'businesses',
    icon: <IoBusinessSharp />,
    to: '/business',
  },
  {
    label: 'payments',
    icon: <MdPayments />,
    to: '/payments',
  },
  {
    label: 'credits',
    icon: <IoCardSharp />,
    to: '/credits',
  },
  {
    label: 'notifications',
    icon: <IoNotifications />,
    to: '/notifications',
  },
  {
    label: 'users',
    icon: <IoPeopleSharp />,
    to: '/users',
  },
];

export default NavData;
