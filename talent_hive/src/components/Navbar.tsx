'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';
  import Link from 'next/link';

  const Navbar = () => {
    return (
      <div className='bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between'>
        {/* <Link href='/'>
          <Image src={logo} alt='' width={40} />
        </Link> */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            {' '}
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>BT</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href='/profile'>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {' '}
              <Link href='/login'>Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  };

export default Navbar ; 