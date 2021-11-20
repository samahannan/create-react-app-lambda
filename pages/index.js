/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {TextField} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Categories } from '../src/components/Categories';
import { Products } from '../src/components/Products';
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#5EC401",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <div className={styles.container}>
      <Head>
        <title>FreshMlk</title>
        <meta name="description" content="FreshMlk" />å
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
    <div className={styles.row}>
      <TextField id="filled-basic" fullWidth label="Search" variant="filled" />
      <div className={styles.homeBanner}>
        <img src="banner.jpg"  alt="freshmlk" />
      </div>
      </div>
      <div className={styles.homepageBox}>
      <div className={styles.row}>
        <h2>Top Categories</h2>
        </div>
        <Categories />
      </div>
      <div className={styles.homepageBox}>
      <div className={styles.row}>
        <h2>Top Deals</h2>
        </div>
        <Products />
      </div>


      </main>
    </div>
    </ThemeProvider>
  )
}
