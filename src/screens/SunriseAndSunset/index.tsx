import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import SunCalc from 'suncalc'
import Geolocation from 'react-native-geolocation-service';

import { LocationHelper } from '../../helpers/LocationHelper';


const SunriseAndSunset: React.FC = () => {
    const [locationResponse, setLocationResponse] = useState<null | Geolocation.GeoPosition>(null)
    const [sunInfo, setSunInfo] = useState([])

    useEffect(() => LocationHelper(setLocationResponse), [setLocationResponse])

    // const times = SunCalc.getTimes(new Date(), locationResponse.coords.latitude, locationResponse.coords.longitude)
    const times = SunCalc.getTimes(new Date(), 51, 42)
    const sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes()
    const sunsetStr = times.sunset.getHours() + ':' + times.sunset.getMinutes()
    useEffect(() => {
        setSunInfo({date: new Date(), sunrise: sunriseStr, sunset: sunsetStr})
    }, [])
    
    
    // const getSunInfo = () => {
    //     let sunInfo = []
    //     let today = new Date()
    //     for (let i = 0; i <= 10; i++) {
    //         let date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000)
    //         const times = SunCalc.getTimes(date, locationResponse.coords.latitude, locationResponse.coords.longitude)
    //         const sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes()
    //         const sunsetStr = times.sunset.getHours() + ':' + times.sunset.getMinutes()
    //         sunInfo.push({date: date, sunrise: sunriseStr, sunset: sunsetStr})
    //     }
    //     setSunInfo(sunInfo)
    // }
    return (
        <View>
            {locationResponse === null ? <Text>Loading....</Text> : <Text>{locationResponse.coords.latitude}</Text>}
        </View>
    )
}

export default SunriseAndSunset;