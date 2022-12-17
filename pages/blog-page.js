import { createClient } from "contentful"
import BlogsView from "../components/BlogsView"


export async function getStaticProps() {
  const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN 
  })

  const res = await client.getEntries({content_type: 'blog'})

  return {
      props: {
        blogs: res.items
      }
  }
}

export default function blog_page({blogs}) {

  console.log({blogs})

  return (
    <div className="blog_page-wrapper">
      <h2 className="models-titles pt-15">Read the latest </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-8" >
        {
          blogs && blogs.map(blog => {
            return (
              <BlogsView key={blog.sys.id} blog={blog} />
            )
          })
        }
      </div>
    </div>
  )
}