import {
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./Makeup.module.css";
import axios from  "axios"
import { useEffect, useState } from "react";

function getData(){
    return axios.get("https://intense-basin-23894.herokuapp.com/makeup")
}

function MakeUp() {
  const [data,setData]=useState([])
   
  useEffect(()=>{
      getData().then((res)=>{
        console.log(res.data)
        setData(res.data)
      })
  },[])


  return (
    <div style={{ height: "800px", display: "flex" }}>
      <div className={styles.slideshow}>
        <p>Makeup</p>
        <Heading as="h4" size="lg">
          Makeup
        </Heading>
        <p>Face(798)</p>
        <p>Vegan (613)</p>
        <p>Eye (889)</p>
        <p>Lip (494)</p>
        <p>Cheek (234)</p>
        <p>Value & Gift Sets (272)</p>
        <p>Makeup Palettes (183)</p>
        <p>Brushes & Applicators (256)</p>
        <p>Accessories (90)</p>
        <p>Nail (56)</p>
        <p className={styles.filter}>Filters</p>
      </div>
      <div className={styles.makeupcontent}>
        <div className={styles.filterdiv}>
          <div>
            <p>New</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/new.svg"
              alt=""
            />
          </div>
          <div>
            <p>Bestsellers</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/bestsellers.svg"
              alt=""
            />
          </div>
          <div>
            <p>Clean</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_beauty32.svg"
              alt=""
            />
          </div>
          <div>
            <p>Vegan</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/Icon_Vegan.svg"
              alt=""
            />
          </div>
          <div>
            <p>Mini Size</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/minis.svg"
              alt=""
            />
          </div>
          <div>
            <p>Lip Quiz</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/lip_quiz.svg"
              alt=""
            />
          </div>
          <div>
            <p>Foundation Quiz</p>
            <img
              src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_quiz.svg"
              alt=""
            />
          </div>
          <div>
            <p>Cruelty-Free</p>
            <img
              src="https://www.sephora.com/contentimages/meganav/icons/CrueltyFreeupdated.svg"
              alt=""
            />
          </div>
        </div>
        <p className={styles.sort}>
          sortby:Relevence
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="0px"
              marginLeft="-7px"
            >
              <ChevronDownIcon />
            </MenuButton>
            <MenuList boxShadow={"box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"}>
              <MenuItem>Price Low To High</MenuItem>
              <MenuItem>Price High To Low</MenuItem>
              <MenuItem>Best Selling</MenuItem>
              <MenuItem>Top Rated</MenuItem>
              <MenuItem>New</MenuItem>
            </MenuList>
          </Menu>
        </p>
        <div className={styles.product}>
             {data&&data.map((item)=>
                  <div className={styles.new}>
                     <img src={item.image} alt="" />
                     <h5 style={{fontWeight:"bold" ,fontSize:"14px"}}>{item.title}</h5>
                     <p>{item.description}</p>
                     <p style={{color:"gray",fontSize:"14px"}}>{item.color}</p>
                     <p style={{color:"gray",fontSize:"14px"}}>{item.rating}</p>
                     <h4 style={{fontWeight:"bold" ,fontSize:"16px"}}>{item.price}</h4>
                     <button class={styles.heart}></button>
                     <button className={styles.quick}>Quicklook</button>
                  </div>
             )}
        </div>
      </div>
    </div>
  );
}
export default MakeUp;
