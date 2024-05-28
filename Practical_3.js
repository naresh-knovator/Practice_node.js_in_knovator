// A,B,C,D are functions which return a Promise. You are requested to create the following logic which uses these functions in the sequence depicted below. An arrow means that the function on its end can start execution only after the Promise on the function on arrow start has resolved. For example, C will start after A and D both have resolved.

const start = () => {
    return Promise.resolve();
}
const A = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of A');
        }, 1000);
    });
}
const B = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of B');
        }, 3000);
    });
}
const C = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of C');
        }, 1000);
    });
}
const D = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of D');
        }, 2000);
    });
}
const end = () => {
    return Promise.resolve();
}

start()
    .then(() => {
        console.log("Resolve Start")
        return Promise.all([D(), A()]);
    })
    .then(([resultA, resultD]) => {
        console.log("A and D resolved");
        console.log(resultA, resultD);
        return Promise.all([B(), resultD]); 
    })
    .then(([resultB, resultD]) => {
        console.log("B resolved");
        console.log(resultB);
        return C();
    })
    .then((resultC) => {
        console.log("C resolved");
        console.log(resultC);
        return end();
    })
    .then(() => {
        console.log("End resolved");
    })
    .catch((error) => {
        console.error(error);
    });
