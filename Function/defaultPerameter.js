const bookings = [];
//we can set default value of parameters
const createBookings=function(
    flightNum,
    passenger=1,
    price=passenger*99
    ){
    const booking={
        flightNum,
        passenger,
        price,
    }
    console.log(booking);
    bookings.push(booking);

};

createBookings("LH123",5);
createBookings("LH12333",7,133);


//if we wanted to leave passenger here at this default we can simply set to undifined 

createBookings("MH12",undefined,333)