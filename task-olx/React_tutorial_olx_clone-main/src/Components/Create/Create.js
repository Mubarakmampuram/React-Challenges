import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { AuthContext, FirebaseContext } from "../../store/FirebaseContext";
import { storage } from "../../firebase/config";
import { ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";

const Create = () => {
  // const { firebase } = useContext(FirebaseContext);
  // const { user } = useContext(AuthContext);
  // const [percent,setPercent] = useState('')
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const handleUpload =  ()=> {
    console.log("hi");
    // const storageRef = ref(storage, `${image.name}`);
    // const storageImgRef = ref(storage, `/images/${image.name}`);


    // const uploadTask = uploadBytesResumable(storageRef, image);
    
      
    //     getDownloadURL(storageRef).then((url) => {
    //       console.log(url);
    //     })
      
    
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              onChange={(e) => {
                console.log(e.target.value)
                setName(e.target.value)
              }}
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              id="fname"
              name="Price"
            />
            <br />
          </form>
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>
          <form>
            <br />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <br />
            <button className="uploadBtn" onClick={handleUpload}>
              upload and Submit
            </button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
