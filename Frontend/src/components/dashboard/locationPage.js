import React from "react";
import "./BasicInfo.css"
import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom"

const LocationInfo = (props) => {
    const navigate = useNavigate()
    let status = ['Sold','Unsold','Unsold','Sold']
    let blueColorUrl = window.location.href
    useEffect(() => {
       
      },[blueColorUrl]);
    let PPID = 'PPD' + Math.floor(Math.random()*999 + 999)
    let Views = Math.floor(Math.random()*100);
    let Daysleft = parseInt(Math.random() * 90 + 10)
    let sold = status[Math.floor(Math.random()*status.length)];
    const uploadPost = (e) => {

        const formData = new FormData();
        formData.append("property", props.property);
        formData.append("contact", props.contact);
        formData.append("area", props.area);
        formData.append("views", Views);
        formData.append("daysleft",Daysleft)
        formData.append("status",sold)
        formData.append('PPID',PPID)

        for (const [key, value] of formData.entries()) {
            console.log(key, value);
          }
            console.log(props.property);
        fetch("https://realestateserver-e5wx.onrender.com/pagelist",
            {
                method: 'POST',
                body: formData
            
            }).then(res=>res.json()).then(data=>{
                navigate('/home')
            }).catch(err=>{
                console.log("error",err);
            });


    }

    return (

        <>
            <form className="formContainer" id="formContainerForLocationInfo">

                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Email">Email</label>
                        <input className="WideInput" type="text" id="Email" name="Email"
                            placeholder="Email" /></section>

                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="City">City</label>
                        <select className="WideInput" type="text" id="City" name="PropertyType"
                            placeholder="Select City" >
                            <option value="option1" className="WideInput" >Select City</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="Area">Area</label>
                        <input className="WideInput" type="text" id="Area" name="Area"
                            placeholder="Select Area" /></section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="PinCode">PinCode</label>
                        <input className="WideInput" type="text" id="PinCode" name="PinCode" placeholder="PinCode" />
                    </section>
                </section>

                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Address">Address</label>
                        <select className="WideInput" type="text" id="Address" name="Address"
                            placeholder="Select Negotable" >
                            <option value="option1" className="SelectNegotable" >Address</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    <section className="inputSection"><label className="WideLabel" htmlFor="Landmark">Landmark</label>
                        <select className="WideInput" type="text" id="Landmark" name="Landmark"
                            placeholder="Landmark" >
                            <option value="option1" className="Ownership" >Select Landmark</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="Latitude">Latitude</label>
                        <input className="WideInput" type="text" id="Latitude" name="Latitude" placeholder="Latitude" />
                    </section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="Longitude"> Longitude</label>
                        <input className="WideInput" type="text" id="Longitude" name="Longitude" placeholder="Longitude" />
                    </section>


                </section>
            </form>

            <section className="buttons" id="buttonsForLocationInfo">
                <Link to='/display3'
                    style={{ textDecoration: "none" }}
                >    <button className="button1">Previous</button></Link>
            
                
                <button onClick={uploadPost } className="button2">Add Property</button>


            </section>
        </>
    )
}
export default LocationInfo;
