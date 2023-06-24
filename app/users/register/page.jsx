"use client"

import Head from "next/head";
import Image from 'next/image'
import Layout from '@/components/Layout';
import { useState } from "react";

import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import styles from './../../../styles/Form.module.css';
import Link from "next/link";

export default function Register( ) {

  const [showPassowrd, setShowPassword] = useState(false);

  return (
    <Layout>

      <Head>
        <title>Register</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            Create your account
          </h1>
          <p className="w-3/4 mx-auto text-gray-400">If you dare</p>
        </div>

        <form className="flex flex-col gap-5">

          <div className={styles.input_group}>
            <input type="text"
              name="username"
              placeholder="Name"
              className={styles.input_text}
            />

            <span className="icon flex items-center px-4">
              <PersonIcon/>
            </span>

          </div>

          <div className={styles.input_group}>
            <input type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
              />
              <span className="icon flex items-center px-4">
                <AlternateEmailOutlinedIcon />
              </span>
          </div>

          <div className={styles.input_group}>
            <input type={`${showPassowrd? 'text': 'password'}`}
              name="password"
              placeholder="password"
              className={styles.input_text}
              onInput={() => setShowPassword(false)}
            />
            <span className="icon flex items-center px-4"
              onClick={() => setShowPassword(!showPassowrd)}
            >
              <FingerprintOutlinedIcon/>
            </span>
          </div>

          <div className="input-button">
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </div>

          <div className="input-button">
            <button type='button' className={styles.button_custom}>
              <Image src={'/assets/icons/google_logo.svg'} width={20} height={20}/>
              Sign Up with Google
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              <Image src={'/assets/icons/twitter_logo.svg'} width={20} height={20}/>
              Sign Up with Twitter
            </button>
          </div>

        </form>

        <p className="text-center text-gray-500">
          Already have an account? {' '}
          <Link href={'/users/login'}>Sign in</Link>
        </p>

      </section>

      
    </Layout>
  )
}