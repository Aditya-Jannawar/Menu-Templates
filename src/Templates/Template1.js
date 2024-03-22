import React, { useEffect, useState } from "react";
import "../App.css";
import "../Assets/Template1.css"
import imgSrc from "../Assets/imgT.png"

const Template1 = () => {

  let [menuData, setMenuData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const fetchData = async () => {
    try {
      const apiUrl = "http://192.168.1.119:8080/RestoWeb/imcws?_a=menu&_s=menuLst&restaurantId=122&organizationId=2&facilityId=114&_appVersion=290%2F2.2.0&_reqSrc=I&commonUserId=57234";
      // const response = await fetch("http://192.168.1.102:8080/RestoWeb/imcws?_a=menu&_s=menuLst&restaurantId=122&organizationId=2&facilityId=114&_appVersion=290%2F2.2.0&_reqSrc=I&commonUserId=57234");
      // const response = await fetch(`https://exmcuae.com/testmain/imcws?_a=menu&_s=menuLst&restaurantId=122&organizationId=2&facilityId=114&_appVersion=290%2F2.2.0&_reqSrc=I&commonUserId=57234`);

      const response = await fetch(apiUrl);
      const data = await response.json();
      setMenuData(data);
      console.log(data);
      const urlParams = new URLSearchParams(apiUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
    {/* <h1>{currentUrl}</h1> */}
    <div className="contain" >
    <div className="row1">
        {menuData &&
          menuData.menuList.slice(1).map((category, index) => (
            <div key={index} className=" menu-section" >
              <h2 className=" menu-section-title-category "><img className="categoryImg" src={imgSrc}/>  &nbsp; {category.CategoryName}   &nbsp; <img className="categoryImg" src={imgSrc}/></h2><br/>
                {category.menuArray &&
                  category.menuArray.map((item) => (
                            <div className="menu-wrap">
                            <div className="imageStyle">
                                <img src={item.baseUrl + item.fileName} width="100%" />
                            </div>
                            <div className="text textBlock" >
                                <div className="NamePriceAlign">
                                    <h3 className="shortDesctext">{item.shortDesc}<br /></h3>
                                    <div className="divider"></div>
                                    <p className="price"><span> {item.currency}{item.price1}</span></p>
                                </div>
                                <p className="longDesctext">{item.longDesc}</p>
                            </div>
                            </div>
                  ))}               
            </div>
          ))}
    </div>
    </div>
    </>
  );
};

export default Template1;