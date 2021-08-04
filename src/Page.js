import React, {useState, useEffect} from 'react'
// import { fetchData } from './utils'


// const sanityClient = require('@sanity/client')
// const client = sanityClient({
//   projectId: 'njsyuo1t',
//   dataset: 'production',
//   apiVersion: '2021-08-04', // use current UTC date - see "specifying API version"!
//   token: '', // or leave blank for unauthenticated usage
//   useCdn: true, // `false` if you want to ensure fresh data
// })

// const query = '*'

// const data = client.fetch(query).then(page => console.log(page, 'am hitting here'))

const Page = () => {

    const [results, setResults] = useState()

    useEffect(() => {
        const URL = 'https://njsyuo1t.api.sanity.io/v2021-06-07/data/query/production?query=*[0]'

        const fetchData = async () => {
            const response = await fetch(
            URL,
            {
                method: 'GET',
                headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip',
                }
            }
            )
            const responseJson = await response.json()
            if (responseJson) {
                setResults(responseJson.result)
            }
            // console.log(responseJson.result, 'json response? in useEffect')
        }
        // console.log(results, 'is async killing me')
        fetchData()
    }, [])
    
    return (
        <div>
            <h1>{results?.content[0]?.heading}</h1>
            <h2>{results?.content[0]?.subheading}</h2>
        </div>
    )
}

export default Page
