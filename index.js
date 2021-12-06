
// then/catch
// Async/Await
// CALLBACK


// Async/Await
// Promise
// CALLBACK

console.log('passed here 1');
getMyCar('ferrari', 1989, (err, data) => {
    if(err) {
        console.log('ERROR ::: ', err);
    } else {
        console.log('data :', data);
        console.log('passed here 2');
    }
});
console.log('Where');

function getMyCar (name, year, callback) {

    setTimeout(() => {
        console.log('Fulfilled');
        callback(null, {name: 'ferrari', year: 1989, color:"red", owner: "ilkhom"})
    }, 5000);

    setTimeout(() => {
        callback({error: 501}, null);
    }, 0);
}

