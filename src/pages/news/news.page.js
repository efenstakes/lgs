import React from 'react'

import './news.page.scss'

import img1 from '../../assets/images/drone.jpg'



import SpacerComponent from '../../components/spacer/spacer.component'
import AppBarComponent from '../../components/appbar/appbar.component'
import FooterComponent from '../../components/footer/footer.component'
import NewsItemComponent from '../../components/news_item/news_item.component'


const NewsPage = () => {
  return (
    <div>

      {/* app bar */}
      <AppBarComponent />    

      {/* space */}
      <SpacerComponent space={40} />

      <NewsItemComponent
        imageSrc={img1}
        title="Security Operative prevents a distribution center fire"
        date="31 July 2020"
        text={
            <>
              <p> text </p>
            </>
        }
        imgThenText={true}
      />
      
      {/* space */}
      <SpacerComponent space={40} />

      <NewsItemComponent
        imageSrc={img1}
        title="Security Operative prevents a distribution center fire"
        date="2 July 2020"
        text={
            <>
              <p> text </p>
            </>
        }
      />

    
      {/* space */}
      <SpacerComponent space={20} />

      {/* footer */}
      <FooterComponent />

    </div>
  ) 
}

export default NewsPage
