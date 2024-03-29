
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';


function TopNav() {
  return (
    <Navbar fluid rounded className='w-full'>
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Savor Restaurant</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="/menu">Menu</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/reservation">Reservation</Navbar.Link>
        <Navbar.Link href="/gallery">Gallery</Navbar.Link>
        <Navbar.Link href="/contacts">Contacts</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;