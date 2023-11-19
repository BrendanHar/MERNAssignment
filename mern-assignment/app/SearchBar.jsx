import { useState, useEffect } from "react";
// import "./SearchBar.css"
export default function SearchBar(){
    const [filterProducts, setFilteredProducts] = useState([]);
    const [searchString, setSearchString] = useState("");
    useEffect(fetchAPIData, [searchString]);

    function fetchAPIData(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products =>{
            const filtered = products.filter((el)=>{return el.title.toLowerCase().includes(searchString.toLowerCase())});
            const currentFilter = filtered.map((product, index) => {
                return ( <div className="prodStyle" key={index} style={{color:"black",width:"20%", borderRadius:"10px", border:"solid 2px white", margin:"1rem", padding:"1rem", textAlign:"center", backgroundColor:"white"}}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <img style={{width:"100px", marginRight:"auto", marginLeft:"auto"}}src={product.image} alt={product.title} />
                </div>)
            })
            setFilteredProducts(currentFilter);
        });
    }

    function handleChange(event){
        setSearchString(event.target.value);
    }

    return <div>
        <p style={{ marginLeft:"40%", marginRight:"40%", paddingLeft:"3%", paddingTop:"1em"}}>The Search Bar!</p>
        <input type="text" placeholder="Search Items" value={searchString} onChange={handleChange} style={{color:"black", margin:"1em 40%", border:"5px white solid"}}/>
        <div style={{display: "flex", flexFlow: "row wrap", margin:"auto", boxSizing:"border-box", width:"100%", paddingLeft:"8%"}}>{filterProducts}</div>
    </div>
}