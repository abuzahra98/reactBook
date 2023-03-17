function LoadingComp() {
    const loading = true; // Set this to true or false based on some condition
  
    return (
      <div>
        {loading && <p>Loading...</p>}
        {/* The above line will only render the <p>Loading...</p> element if the `loading` variable is `true`. */}
      </div>
    );
  }
  
  export default LoadingComp;
  