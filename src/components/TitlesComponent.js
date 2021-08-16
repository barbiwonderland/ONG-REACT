import React from 'react';
import styled from 'styled-components';

import '../styles/titlesComponent.css';


export const TitlesComponent = ( props ) => {

	const imgInitials = "https://www.autonomosyemprendedor.es/media/autonomosyemprendedor/images/2018/02/12/2018021209200276819.jpg"
	const img = !props.img ? imgInitials : props.img;

  const BackGround = styled.div`
  	background-image: url(${img});
  	background-position: center;
  	background-size: cover;
  	border-radius: 5px;
  	margin: 10px auto;
  	max-width: 1000px;
  	height: 80px;
  	@media (max-width: 1000px) {
  		margin: 10px;
  	}
  `;

  return (
    <BackGround>
      <div className="title-styles">
        <div className="triangle-title"></div>
        <h3>{props.title}</h3>
      </div>
    </BackGround>
  )
};
