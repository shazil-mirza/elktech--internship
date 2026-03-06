import React, { useEffect ,useState} from 'react'

function Github() {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://api.github.com/users/shazil-mirza')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Name: {data.name}
      </div>
      <img className='rounded-full w-32 h-32 mx-auto mt-4' src={data.avatar_url} alt="avatar" />
    </div>
  )
}

export default Github
