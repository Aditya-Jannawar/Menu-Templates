
import React, { useEffect, useState } from 'react';
import '../Assets/Template4.css';

const Template4 = () => {
  let [menuData, setMenuData] = useState(null);
  
  const fetchData = async () => {
    try {
      // const response = await fetch(`https://exmcuae.com/testmain/imcws?_a=menu&_s=menuLst&restaurantId=122&organizationId=2&facilityId=114&_appVersion=290%2F2.2.0&_reqSrc=I&commonUserId=57234`);
      const response = await fetch("http://192.168.1.119:8080/RestoWeb/imcws?_a=menu&_s=menuLst&restaurantId=122&organizationId=2&facilityId=114&_appVersion=290%2F2.2.0&_reqSrc=I&commonUserId=57234");
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

  const handleOrderNowClick = () => {
    window.open("https://imenu4u.com/rweb/restaurant/san-marcos/Curry-Craft-Nordahl-763-Center-Dr-101", "_blank");
  };

  return (
    <>
      <div className="menu-containYY">
        <h3 className="menu-titleYY">OUR MENU</h3>
        <div className="topBarYY">
        
        <button className="menu-button">Menu</button><br/><br/><br/>
        <button className="button" onClick={handleOrderNowClick}>Order Now</button>
        </div>
        
        {menuData && menuData.menuList.slice(1).map((category, index) =>  (
          <div key={index}>
            <div className="menusYY">
              <h2 className="textCenterYY">{category.CategoryName}</h2>
              {category.menuArray && category.menuArray.map((item) => (
                <div key={item.menuId} className="menu-itemYY">
                  <div className='textblogYY'>
                    <p className="shortTextYY">{item.shortDesc}</p>
                    <div className="menu-item__dotted-dividerYY"></div>
                    <div>
                      <p className="priceYY">{item.currency}{parseFloat(item.price1).toFixed(2)}</p>
                    </div>
                  </div> 
                  <div>
                    <p className="longTextYY">{item.longDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Template4;
