import {useEffect,useState} from "react";
import { getTestimonials } from "./testimonials";
import { slideList } from './slidesService'

import { useSelector, useDispatch } from 'react-redux'
import { getNewsThunk } from '../store/news/newsReducer'
import {fetchActivities} from '../store/activities/activitiesReducer'

export const ListNews = () => {
    const newsReducer = useSelector((state) => state.newsInfo)
    
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getNewsThunk())
    }, [])
    return newsReducer
};

export const ListActivities = () => {
    const activitiesReducer = useSelector((state) => state.activitiesInfo)
    
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchActivities())
    }, [])
    return activitiesReducer
};

export const listTestimonials = () => getTestimonials().data;

export const ListSlides = () => {
    const [slides, setSlides] = useState(undefined)
    useEffect(() => {
        slideList().then(res => setSlides(res.data.data))
    }, [])
    
    
    return slides
} 
		
	

