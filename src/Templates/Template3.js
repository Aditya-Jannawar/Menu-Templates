import React, { useEffect, useState } from "react";
import "../Assets/Template3.css"

const Template3 = () => {
  let [menuData, setMenuData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.1.120:8080/RestoWeb/imcws?_a=menu&_s=menuLst&restaurantId=122&organizationId=2&facilityId=114&_appVersion=290%2F2.2.0&_reqSrc=I&commonUserId=57234");
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
    <div className="main">
    <div className="section" >
    <img src={('../Assets/dinner.jpg')} />
    <div className="combine">
    <h1><i className="name">Restaurant</i> <br/> </h1>
    <h3 className="desc">Happy Hours for Cocktail Lounge from <br/>2:30 PM to 5:30 PM<br/>20% OFF On Entire Check </h3>
    </div>
    <img src={require('../Assets/logo1.jpg')}/>
    </div>
    {menuData && menuData.menuList.slice(1).map((category, index) => (
        <div className="row">
        {
          (index === 0 || index === 7) && 
          <div className="bg-img">
            <img src={('../Assets/bg.jpg')}/>
          </div>
            }
      <div key={index} className="containZZ" >
          <div className="col-md-6">              
            <img src={require('../Assets/catenam.jpg')} alt="Category Image"/>
          </div>
          <div className="col-md-6 cateName">
            <div className=".mu-title border-menu">
              <div className="m-t-b-85 c-n-85">
                <h2 className="textCenterZZ">{category.CategoryName}</h2> 
              </div>
            </div>
          </div>
        </div>

        {/**********************/}
      
        <div className="menu-items-containZZ">
          {category.menuArray && category.menuArray.map((item) => (
            <div key={item.menuId} className="menu-itemZZ">
              <div className="column">
                <p className="shortTextZZ"> <strong>{item.shortDesc}</strong></p>
                <p className="priceZZ">
                  {item.currency}{item.price1}</p>
              </div>
              <div className="column">
                <p className="longTextZZ">{item.longDesc}</p>
              </div> 
             <span className="menu-item-divider"></span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
};

export default Template3;
