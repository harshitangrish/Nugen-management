import 'whatwg-fetch';

const Helper = (url,method,body)=>{
  return(
    fetch(url,{
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(response =>{
      return response.json();
    })
    .catch(err=>{
      return "Error while login " + err;
    })
  );
};

export default Helper;
