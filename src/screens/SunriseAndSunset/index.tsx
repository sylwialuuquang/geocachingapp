import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import Geolocation from 'react-native-geolocation-service';

import { LocationHelper } from '../../helpers/LocationHelper';
import SunriseAndSunsetList from '../../components/SunriseAndSunsetList'

const SunriseAndSunsetScreen: React.FC = () => {
    const [locationResponse, setLocationResponse] = useState<null | Geolocation.GeoPosition>(null)
    
    useEffect(() => LocationHelper(setLocationResponse), [setLocationResponse])

    return (
        <View>
            {locationResponse === null ? <Text>Loading...</Text> :
            <SunriseAndSunsetList coords={locationResponse.coords}/>}
        </View>
    )
}

export default SunriseAndSunsetScreen;