"use client";

import { Button } from "@mui/material";
import { getProviders, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { useEffect, useState } = require("react");

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [provider, setProviders] = useState(null);

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    
    setupProviders();
  },[]);

  if (session?.user) { router.push('/'); }

  return (
    <div>
      {provider && 
        Object.values(provider).map((provider) => (
          <Button key={provider.name} 
            sx={{textTransform: 'none'}}
            onClick={() => sigIn(provider.id)}
          >
            
            <Image 
              
              src={`/assets/icons/${provider.id}_logo.svg`}
              alt={`${provider.id} logo`}
              width={20}
              height={20}
            />
            Sign in with {provider.name}
          </Button>
        ))
      }
    </div>
  );
};

export default Login;