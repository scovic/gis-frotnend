import L, { ControlOptions, LatLng } from "leaflet"
import { createControlComponent, } from "@react-leaflet/core"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import "leaflet-routing-machine"

type Coords = {
    lat: number
    lon: number
}

type MapRouterProps = {
    waypointCoords: Coords[]
}

const createRoutingMachineLayer = (props: MapRouterProps & ControlOptions) => {
    const { waypointCoords } = props

    const waypoints = waypointCoords.map(wp => new LatLng(wp.lat, wp.lon))

    const lineOptions: L.Routing.LineOptions = {
        styles: [{ color: "#6FA1EC", weight: 4 }],
        extendToWaypoints: false,
        missingRouteTolerance: 5
    }

    const instance = L.Routing.control({
        waypoints: waypoints,
        lineOptions: lineOptions,
        show: false,
    })

    return instance
}

const RoutingMachine = createControlComponent(createRoutingMachineLayer)

export default RoutingMachine

