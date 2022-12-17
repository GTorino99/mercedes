import { createClient } from "contentful"
import ModelView from "../components/ModelsView"

export async function getStaticProps() {
  const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN 
  })

  const res = await client.getEntries({content_type: 'vehicleModel'})
  const ress = await client.getEntries({content_type: 'car'})

  return {
      props: {
        models: res.items,
        cars: ress.items
      }
  }
}



export default function Model({models}) {

  console.log({models});
  return (
    <div className="models-root">

      <h2 className="models-titles pt-15">List of Models from Mercedes</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-8" >
        {
          models && models.map(model => {
            return (
              <ModelView key={model.sys.id} model={model}/>
            )
          })
        }
      </div>
    </div>
  )
}