import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  const data = "hello";
  const postDataFromBackend = async () => {
    const response = await axios.post("http://localhost:8080/post", data);
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //Get Request --form

  const [formData, setFormData] = useState("");

  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>

      <button onClick={postDataFromBackend}>Post Data</button>
      <p id="para"></p>

      <form onSubmit={postFormFromFrontend}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        ></input>
        <input type="submit" value="TestForm"></input>
      </form>
    </div>
  );
};

export default App;
