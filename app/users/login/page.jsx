"use client"

import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import styles from './../../../styles/Form.module.css';
import Image from "next/image";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { useState } from "react";

const Login = () => {

  const [showPwd, setShowPwd] = useState(false);
  
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            Explore
          </h1>
          <p className="w-3/4 mx-auto text-gray-400">Welcome</p>
        </div>

        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input type="email" 
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
            
            <span className="icon flex items-center px-4 ">
              <AlternateEmailOutlinedIcon />

            </span>
          </div>

          <div className={styles.input_group}>
            <input type={`${showPwd ? 'text' : 'password'}`}
              name="password"
              placeholder="password"
              className={styles.input_text}
              // onWaiting={() => setShowPwd(false)}
              onInput={() => setShowPwd(false)}
            />
            <span className="icon flex items-center px-4"
              onClick={() => setShowPwd(!showPwd)}
            >
              <FingerprintOutlinedIcon />
            </span>


          </div>

          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>

          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              <Image src={'/assets/icons/google_logo.svg'} width={20} height={20}></Image>
              Sign in with Google 
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              <Image src={'/assets/icons/twitter_logo.svg'} width={20} height={20}></Image>
              Sign in with twitter
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500">
          Don't have an account?{' '}
          <Link href="/users/register">Register</Link>
        </p>
      </section>


    </Layout>
  )
}
export default Login;