import axios from "axios";

// calling the api
 async function getUserDetails(){
  //This is to add delay so we can see the loading state
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

//async component (first it was not but i made it async)
// there in no consept of async component in react , 
//also there was not in next.js it now in next.js 12 
// we can use it as async function
// we cant do same thing the react 
// it also work only and only the component is a server component not in client component

//We cant use recoil in this method of calling backend as this is small project it will not affect much 
//but when it will bw a big project it will throw problems  

export default async function Home() {

  // calling the api data 
  const userData = await getUserDetails();


  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}
 