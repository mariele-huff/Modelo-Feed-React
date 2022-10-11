import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import { Publication } from './components/post'

import posts from "./components/posts.json";
import styles from './app.module.css';

import './global.css'
function App() {

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Sidebar />

        {posts.map((post) => {
          return (
            <Publication
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </div>

      <div>

      </div>
    </div>

  )
}

export default App
