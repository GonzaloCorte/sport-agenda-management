"use client";

import { useEffect, useState } from "react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import SurfingOutlinedIcon from '@mui/icons-material/SurfingOutlined';
import { Box, Button, Typography } from "@mui/material";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders ] = useState(null);
  
  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setupProviders();
  }, []);

  return <nav>
    <Link href="/">
      <SurfingOutlinedIcon width={30} height={30}/>
    </Link>

    {session?.user ? (
      <Box>
        <Box>
          <Typography>Welcome {session?.user.name}</Typography>

        </Box>

        <Button
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </Button>
      </Box>
    ) : (
      <>
      {/* {providers &&
        Object.values(providers).map((provider) => {
          console.log({provider})
          return (
          <Button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            
          >
            Sign In
          </Button>
        )})
      } */}
      <Link href={"/users/login"}>
        Sign In
      </Link>
      </>
    )
    }
  </nav>
}

export default Nav;