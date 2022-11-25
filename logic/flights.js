function Flights() {
    function calculateNumberOfFlights(numberOfPassengers,flightCapacity){
        let numberOfFlights;
        
      isPositive(numberOfPassengers,"The number of passengers must be a positive integer value");
      isPositive(flightCapacity,"The capacity of the flight must be a positive integer value");
      
      if(numberOfPassengers%flightCapacity===0)
            numberOfFlights=numberOfPassengers/flightCapacity;
        else
            numberOfFlights=Math.trunc((numberOfPassengers/flightCapacity)+1);

        return numberOfFlights;

    }
    function checkAircraftRevision(distanceLimit,distanceArray){
        let totalDistance=0;
        for(let distance of distanceArray)
            totalDistance+=distance;

        if (totalDistance <= distanceLimit / 2)
            return "The revision needs to be done within the next 3 months";
        else if (totalDistance > distanceLimit / 2 || totalDistance === distanceLimit / 3)
            return "The revision needs to be done within the next 2 months";
        else if (totalDistance > distanceLimit / 3 || distanceLimit <= distanceLimit)
            return "The revision needs to be done within the next month";
        else if (totalDistance > distanceLimit)
            throw "Total Distance can't be greater than distance Limit";
            

    }
    function isPositive(num,message) {
        if (Math.sign(num) === 1) {
          return true;
        }
        else 
            throw message;
      }
    return {calculateNumberOfFlights,checkAircraftRevision};
}
module.exports = Flights();