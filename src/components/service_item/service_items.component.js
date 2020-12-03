import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import img1 from '../../assets/images/drone.jpg'

import ServiceItemComponent from './service_item.component'

import './service_items.component.scss'
import ButtonComponent from '../button/button.component'
import SpacerComponent from '../spacer/spacer.component'



const ServiceItemsComponent = () => {
  const history = useHistory()

  const goToServices = ()=> history.push('/services')

  return (
    <div className="service_item_list">

      <ServiceItemComponent
         imageSrc={img1}
         title="At LGS our mission is to diligently provide business"
         
         text={
           <>
            <p>
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p>
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p>
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
           </>
         } 
         cta={
            <ButtonComponent 
              title="Our Services"
              onClick={goToServices}
            />
         }
      />

      <SpacerComponent space={40} />
      
      <ServiceItemComponent
         imageSrc={img1}
         title="At LGS our mission is to diligently provide business"
         
         text={
           <>
            <p>
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p>
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p>
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
           </>
         } 
         cta={
            <ButtonComponent 
              title="Our Services"
              onClick={goToServices}
            />
         }
         imgThenText={true}
      />
      
      <SpacerComponent space={40} />
            
      <ServiceItemComponent
         imageSrc={img1}
         title="At LGS our mission is to diligently provide business"
         
         text={
           <>
            <p className="service_item__content__text">
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="service_item__content__text">
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="service_item__content__text">
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
           </>
         } 
         cta={
            <ButtonComponent 
              title="Our Services"
              onClick={goToServices}
            />
         }
      />

      <SpacerComponent space={40} />
      
      <ServiceItemComponent
         imageSrc={img1}
         title="At LGS our mission is to diligently provide business"
         
         text={
           <>
            <p className="service_item__content__text">
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="service_item__content__text">
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
            <p className="service_item__content__text">
               As a professional Security provider with a head office centrally located in Milton Keynes, we are able to provide numerous cost-effective services. 
            </p>
           </>
         } 
         cta={
            <ButtonComponent 
              title="Our Services"
              onClick={goToServices}
            />
         }
         imgThenText={true}
      />
      
            
    </div>
  )
}

ServiceItemsComponent.propTypes = {

}

export default ServiceItemsComponent
