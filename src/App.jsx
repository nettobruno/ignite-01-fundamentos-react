import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './Post'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
     <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Bruno Netto" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fugit tenetur obcaecati temporibus doloremque laudantium dignissimos ipsam, velit inventore officia natus veniam eveniet voluptatibus blanditiis aperiam voluptate cum sed quia!" 
          />

          <Post 
            author="Diego Fernandes" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fugit tenetur obcaecati temporibus doloremque laudantium dignissimos ipsam, velit inventore officia natus veniam eveniet voluptatibus blanditiis aperiam voluptate cum sed quia!" 
          />
        </main>
      </div>
    </>
  )
}