
import styles from './page.module.css'

import ExampleClient from '@/components/ExampleClient';

import ExampleServer from '@/components/ExampleServer';

export default function Home() {

  console.log("Where do i render?"); //server side rendering
  return (
      // <main className="flex min-h-screen flex-col text-2xl items-center justify-center font-bold p-20">
      //   Hello World
      // </main>
      <main className= {styles.main}>
        Hello World

        <ExampleClient />   {/* client side rendering */}
        <ExampleServer />   { /* server side rendering */}

      </main>
      
  );
}
