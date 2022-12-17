import { createClient } from "contentful"

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})


export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'car'
    })

    const paths = res.items.map(item => {
        return {
            params: {code: item.fields.code}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const {items} = await client.getEntries({
        content_type: 'car',
        'fields.code': params.code
    })

    return {
        props: {car: items[0]}
    }
} 


export default function VehicleDetails({car}) {
    const {code, engine, fuel, gearBox, image, tittle, gallery} = car.fields

    console.log({gallery})
    
    return (
        <div className="code-wrapper">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg model-image" src={'https:' + image.fields.file.url} alt=""/>
                </a>
                <div className="p-5 model-card">
                    <a href={`blog/${tittle}`}>
                        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tittle}</h4>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Code: {code}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Cubic capacity: {engine} cm<sup>3</sup></p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fuel Type: {fuel}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Transmition: {gearBox}</p>
                    <a href={`vehicle/${code}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        See more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            <section class="overflow-hidden text-gray-700 ">
                            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                                <div class="flex flex-wrap -m-1 md:-m-2">
                                {
                                    gallery && gallery.map(item => (
                                        <div class="flex flex-wrap w-1/3">
                                        <div class="w-full p-1 md:p-2">
                                            <img key={`img-${item.sys.id}`} srcSet={'https:' + item.fields.file.url}/>
                                        </div>
                                    </div>
                                    ))
                                }
                                    
                                </div>
                            </div>
            </section>
        </div>
    )
}

// {
//     gallery && gallery.map(item => ())
// }




