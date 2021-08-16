import React from 'react';
import '../styles/titlesComponent.css';

export const HeaderNews = ( props ) => {

  const imgInitials = "https://www.autonomosyemprendedor.es/media/autonomosyemprendedor/images/2018/02/12/2018021209200276819.jpg"
	const img = !props.img ? imgInitials : props.img;

  return (
		<div className="header-news" style={{backgroundImage: `url(${img})`}}>
			<div className="bg-news">
				<h2>{props.title}</h2>
			</div>
		</div>
	)
};
