import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blog'
  })

  const paths = res.items.map(item => {
    return {
      params: {
        blog: item.fields.tittle
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const {items} = await client.getEntries({
    content_type: 'blog',
    'fields.blog': params.tittle
  })

  return {
    props: {
      blog: items[0]
    }
  }
}



export default function BlogDetails({blog}) {

  const { tittle, blogImage, blogContent} = blog.fields

  return ( 
    <div className = "blogpost-wrapper pt-8">
      <div className = "info">
        <h2 className="text-3xl pt-3"> {tittle} </h2> 
      </div>
      <div className = "banner mt-7">
        <img src = {`https:${blogImage.fields.file.url}`} width = {blogImage.fields.file.details.image.width} height = {blogImage.fields.file.details.image.height} alt = 'image' className = "foto" />
      </div>
    
      <div className = "method blog-content pt-5">
        <div> {documentToReactComponents(blogContent)} </div> 
      </div> 
    </div>
  )
}