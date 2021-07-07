// Returns addition of two or n numbers
exports.addition = function (args) {
    var result = 0;
    args.forEach(element => {
        result += element;
    });
    return result;
};

// Returns difference of two numbers
exports.subtraction = function (args) {
    if (args.length > 2) {
        return "can take only 2 arguments";
    }
    return args[0] - args[1]
};

// Returns product of two or n numbers
exports.multiplication = function (args) {
    var result = 1;
    args.forEach(element => {
        result *= element;
    });
    return result;
};

//Returns the quotient after the division of two numbers
exports.division = function (args) {
    if (args.length > 2) {
        return "can take only 2 arguments";
    }

    try {
        if (args[1] == 0) {
            throw 'Division By zero is not possible';
        }
        return args[0] / args[1]
    }
    catch (err) {
        return err;
    }
}