// A,B,C,D are functions which return a Promise. You are requested to create the following logic which uses these functions in the sequence depicted below. An arrow means that the function on its end can start execution only after the Promise on the function on arrow start has resolved. For example, C will start after A and D both have resolved.

const start = () => {
    return Promise.resolve();
}
const A = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of A Reject');
        }, 1000);
    });
}
const B = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of B Reject');
        }, 1000);
    });
}
const C = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of C Reject');
        }, 1000);
    });
}
const D = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of D Reject');
        }, 1000);
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
    .then(() => {
        console.log("Resolve D and A")
        return C();
    })
    .then(() => {
        console.log("Resolve C ")
        return B();
    })
    .then(() => {
        console.log("Resolve B ")
        return end();
    })
    .then(() => {
        console.log("Resolve ENd ")
    })
    .catch((error) => {
        console.error(error);
    });
