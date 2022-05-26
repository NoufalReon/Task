import {React,useEffect,useState} from 'react'

function Display() {
    const [details,setDetails] = useState("");


    useEffect(() => {
      
        const fetchdata = async () => {
            await fetch("https://mobiledev.refogen.com/api/v1/cars/getAllCars")
              .then((res) => res.json())
              .then((data) => setDetails(data.data));
        }
        fetchdata();
    
    }, [])
    



  return (
    <>
      {details ? (
        <div>
          {details.map((item) => (
            <div>
              <p>{item.category_id}</p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Display