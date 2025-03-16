
import styles from './page.module.css'
export default function Home() {

  console.log("Where do i render?"); //server side rendering
  return (
      // <main className="flex min-h-screen flex-col text-2xl items-center justify-center font-bold p-20">
      //   Hello World
      // </main>
      <main className= {styles.main}>
        Hello World
      </main>
      
  );
}
