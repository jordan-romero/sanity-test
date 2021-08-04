const URL = 'https://njsyuo1t.api.sanity.io/v2021-06-07/data/query/production?query=*[0]'

export const fetchData = async () => {
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
    
    // return responseJson.result
    console.log(responseJson.result, 'json response? in useEffect')
  }

