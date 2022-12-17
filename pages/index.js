import { createClient } from "contentful"
import { Carousel } from "flowbite-react"
import VehicleView from "../components/VehicleView"

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res = await client.getEntries({content_type: 'car'})
  const ress = await client.getEntries({content_type: 'blog'})
  const resss = await client.getEntries({content_type: 'vehicleModel'})

  return{
    props: {
      vehicles: res.items,
      blogs: ress.items,
      models: resss.items,
    }
  }
}

// creates years
function createYears(startYear) {
  const currentYear = new Date().getFullYear(), years = [];
  startYear = startYear || 1980;
  while ( startYear <= currentYear ) {
      years.push(startYear++);
  }
  return years;
}

export default function Home({vehicles, models, blogs}) {
  console.log({vehicles});
  return (
    <div className="root">

      <div className="slider">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel indicators={false} className="carousel">
          {
                blogs && blogs.map(pics => (<img key={pics.sys.id}
                    src={pics.fields.blogImage.fields.file.url}
                    alt="..."
                />))
            }
          </Carousel>
        </div>
      </div>

      <div className="filters pt-4">
        <h2 className="text-2xl">Find the car you are looking for</h2>
        <form className="flex items-center pt-5" action="/search">
          <label htmlFor="underline_select" className="sr-only">Underline select</label>
          <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option>Pick the model</option>
              {
                models && models.map(model => (<option key={`model-${model.fields.modelName}`}>{model.fields.modelName}</option> ))
              }
          </select>

          <label htmlFor="underline_select" className="sr-only">Underline select</label>
          <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option id="year"
                          onChange={(e) => setYear(e.target.value)}
                          name="year">Pick the year</option>
              {
                createYears(1920).map(year => (<option key={`year-${year}`}>{year}</option> ))
              }
          </select>

          <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </form>
      </div>

      <div className="top-10 pt-4">
        <h2 className="text-2xl">Top 10 Models</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20" >
            {vehicles.map(car => (
            <VehicleView key={car.sys.id} car={car}/>
          ))}
        </div>
      </div>

    </div>
  )
}