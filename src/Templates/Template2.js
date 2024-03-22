import React, { useEffect, useState } from "react";
import "../App.css";
import "../Assets/Template2.css"

const Template2 = () => {
    let [menuData, setMenuData] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.1.102:8080/RestoWeb/imcws?_a=menu&_s=menuLst&restaurantId=122&organizationId=2&facilityId=114&_appVersion=290%2F2.2.0&_reqSrc=I&commonUserId=57234");
        // const response = await fetch(`https://exmcuae.com/testmain/imcws?_a=menu&_s=menuLst&restaurantId=122&organizationId=2&facilityId=114&_appVersion=290%2F2.2.0&_reqSrc=I&commonUserId=57234`);
        const data = await response.json();
        setMenuData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
    
  return (
    <>
    <div className="BaseXX">
    <div className="containerXX">
        {menuData &&
          menuData.menuList.slice(1).map((category, index) => (
            <div key={index} className=" " >
              <h2 className="category-titleXX"> {category.CategoryName} </h2><br/>
                {category.menuArray &&
                  category.menuArray.map((item) => (
                           
                            <div className="textBlockXX" >
                                <div className="NamePriceAlignXX">
                                    <h3 className="shortDesctextXX">{item.shortDesc}<br /></h3>
                                    <div className="dividerXX"></div>
                                    <p className="PriceXX"><span> {item.currency}{item.price1}</span></p>
                                </div>
                                <p className="longDesctextXX">{item.longDesc}</p>
                            </div>
                  ))}               
            </div>
      
          ))}
    </div>
    </div>
    
    </>
  );
};

export default Template2;