class UserAddResouce {

    execute = (req, res, next) => {

        console.log("dentro do UserAddResouce. ");
    }
}

module.exports = new UserAddResouce();