import React, { useState } from "react";
import { db } from "../../firebase/config";
import { doc,getDoc,getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { collection, query, where } from "firebase/firestore";

import "./View.css";
function View(props) {
  //const filterUser = (x) => x =
  const prodId = props.value;

  const[productDetails,setProductDetails] = useState({})
  const [seller,setSeller] = useState({})

  
  useEffect(async () => {
    try {
      const docRef = doc(db, "products",prodId );
    const docSnap = await getDoc(docRef);
    const docms = docSnap.data();
    let userId = docms.userId

    //console.log(docms.userId)
    setProductDetails(docms)
    //console.log(productDetails.category)

    //fetch user details 
   
    console.log(userId);
    const userRef = collection(db,"users");
    const q = query(userRef, where("id", "==", userId));
    //console.log(typeof(q));
    const querySnapshot = await getDocs(q);
    //console.log(typeof(querySnapshot))
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log( doc.data());

      setSeller(doc.data())
    });
    
    } catch (error) {
      console.log(error)
    }
    
     
   
   
    //
    // const Snapshot = await getDocs(collection(db, "users"));
    // const user = Snapshot.docs.filter( (product)=> {
    //   if(product.id == docms.userId){
    //     return product;
    //   }
    //   return
    // } )
    //   console.log(user);
    
  }, [])
  

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={productDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {productDetails.price} </p>
          <span>{productDetails.name}</span>
          <p>{productDetails.category}</p>
          <span>{productDetails.createdOn}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{seller.username}</p>
          <p>{seller.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
