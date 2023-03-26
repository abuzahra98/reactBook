// import React, { useState } from "react";

const LoadingComp = () => {
    const loading = true;
console.log(loading);
     // Set this to true or false based on some condition
    // const [loading, setLoading] = useState(false);

    return (
      <div>
        {loading && <p>Loading...</p>}
        {/* The above line will only render the <p>Loading...</p> element if the `loading` variable is `true`. */}
      </div>
    );
  }
  
  export default LoadingComp;
  