import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/nettobruno.png',
      name: 'Bruno Netto',
      role: 'Front End Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-12-25 08:57:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/guilhermecezario.png',
      name: 'Guilherme Cezário',
      role: 'Full Stack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Falae turminha 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-10 22:42:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/adilier.png',
      name: 'Adler Rodrigues',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Salve salve meus bacanos 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-25 17:00:00')
  },
]

export function App() {
  return (
    <>
     <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}