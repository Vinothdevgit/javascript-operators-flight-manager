function Passengers() {
    function checkFlightCapacity(flightCapacity,passengersArray){
        let passengers = 0;
        for(let passenger of passengersArray){
            passengers+=passenger;
        }
        if(passengers <= flightCapacity){
            return passengers;
        }
        else
            throw new Error("Flight capacity ("+ flightCapacity+") exceeded. You have "+passengers);

    }

    return {checkFlightCapacity};

}
module.exports= Passengers();

