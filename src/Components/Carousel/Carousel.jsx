import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './silder-animations.css';
import './Carousel.css';
const content = [
	{
		title: 'Aligarh Muslim University',
		description:
		'Aligarh Muslim University (AMU) occupies a unique position amongst universities and institutions of higher learning in the country. It was established in 1920 and evolved out of the Mohammedan Anglo-Oriental (MAO ) which was set up in 1877 by the great visionary and social reformer, Sir Syed Ahmad khan. From its very inception, it has kept its door open to the members of all communities and from all corners of the country and the world. The Aligarh Muslim University s the realization of a vision which was broad, far-reaching and realistic',
		button: 'Read More',
		link:'https://www.amu.ac.in/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bab-e-Sayyad.jpg/1024px-Bab-e-Sayyad.jpg',
	},
	{
		title: 'Computer Science Society',
		description:
		'The CSS came into existence as Area of Dominant Coders ADC in December 2018 and is consistently working since then. It consists of a team of various Bachelor of Science (Hons.) and Masters of Computer Applications Students having technical insight and a passion for programming. Here we mentor, guide, share and learn from each other regarding the latest technology giving students, the much-needed exposure for industrial demands and global trends.',
		button  : 'Discover',
    link:'https://www.facebook.com/computersciencesocietyamu/',
		image: 'https://scontent.fdel9-1.fna.fbcdn.net/v/t1.6435-9/186564206_196549628957052_3774173882539639642_n.png?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=8WQ7_lTqDQcAX_Mf7XN&_nc_ht=scontent.fdel9-1.fna&oh=fa2dbe40a861a6a35f7ba619d8876a8e&oe=613DBE84',
	},
	{
		title: 'Our Team',
		description:
		'People who make it all happen.',
		button: 'Know more',
    image: 'https://bvinfotech.com/wp-content/uploads/2020/11/blog-banner-team.jpg',
	}
];

const Carousel = () => (
	<div className="carousel">
		<Slider  autoplay ={0} className="slider-wrapper">
			{content.map((item, index) => (
				<div 
					key={index}
					className="slider-content"
				>
                 <img src={item.image} alt="logo"/>
					<div className="inner">
						<h1 className="title">{item.title}</h1>
						<p>{item.description}</p>
						<a href={item.link}><button >{item.button}</button></a>
            

					</div>	
				</div>
			))}
		</Slider>
	</div>
);
export default Carousel;

