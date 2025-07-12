import React from "react";
import './address.css';
import { useWindowDimensions } from "../../utils/useWindowDimensions";

export const Address = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div id="AddressBox">
      <div className="AddressTexts" id="MainAddress"> 
        Local: Buffet D'Matos<br/>
        Rua Oratório, 3265 - Parque Oratório,<br/>Santo André - SP, 09251-000
      </div>
      <div id="AddressMap">
        <div>
          <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.352826415865!2d-46.511320788911476!3d-23.62753226393828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce681b3b8cdd4b%3A0x33967b0ee4d59c51!2sBuffet%20D&#39;%20Matos!5e0!3m2!1spt-BR!2sbr!4v1752200848160!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ border: 'none' }} />
        </div>
      </div>
      <div className="AddressTexts" id="ParkingText"> 
        <a href="https://maps.app.goo.gl/pqYCBxZeHWkYbVV98">
          Estacionamento<br/>
          na mesma rua, nº 3356
        </a>
      </div>
    </div>
  )
};
