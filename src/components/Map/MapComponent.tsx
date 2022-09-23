import React, { useCallback, useState } from "react"
import L, { LatLngExpression } from "leaflet"
import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet"
import MapRouter from "./MapRouter"


const position: LatLngExpression = [42.709532, 22.062541]

const purpleOptions = { color: 'purple' }
const purpleMouseOver = { color: "#e0aaff" }
const polygon: LatLngExpression[] = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ]

const waypoint = [
    { lat: 42.709358977367955, lon: 22.079784504692093 },
    { lat: 42.706685062726024, lon: 22.060832047255268 }
]

const polyline: LatLngExpression[] = [
    [42.709358977367955, 22.079784504692093],
    [42.706685062726024, 22.060832047255268]
]
  

const MapComponent = () => {
    const [styles, setStyles] = useState(purpleOptions)

    const handleMouseOverEvent = useCallback((event: any) => {
        setStyles(purpleMouseOver)
    }, [])

    const handleMouseOutEvent = useCallback((event: any) => {
        setStyles(purpleOptions)
    }, [])

    return (
        <MapContainer zoomControl={false} center={position} zoom={13} style={{ width: '100%', height: '400px'}}>
            <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={position} >
                <Popup>
                    Popup
                </Popup>
            </Marker> 
            <MapRouter waypointCoords={waypoint} />
        </MapContainer>
    )
}


export default MapComponent