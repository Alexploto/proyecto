




const getAllUserService = async () => {
    try {
        const deleteUser= await userModels.deleteOne ({ _id: id });
        if (deleteUser.deletedCount === 0)

        return {statuscode: 404, message: "User not found"};
        return {statuscode: 200, message: "User deleted successfully"};
        return deleteUser;
    }
    catch (error)
        { console.log(error)}
            return {statuscode: 404, message: "ocurrio un error "};


    }
    module.exports = {
        getAllUserService

}