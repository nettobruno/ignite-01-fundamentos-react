import { Post } from './Post'

export function App() {
  return (
    <>
      <Post 
        author="Bruno Netto" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fugit tenetur obcaecati temporibus doloremque laudantium dignissimos ipsam, velit inventore officia natus veniam eveniet voluptatibus blanditiis aperiam voluptate cum sed quia!" 
      />

      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fugit tenetur obcaecati temporibus doloremque laudantium dignissimos ipsam, velit inventore officia natus veniam eveniet voluptatibus blanditiis aperiam voluptate cum sed quia!" 
      />
    </>
  )
}