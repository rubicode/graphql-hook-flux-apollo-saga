const { GraphQLNonNull, GraphQLString } = require('graphql');
var { userType } = require('../types/user');
var services = require('../../services');

exports.remove = {
    type: userType,
    args: {
        userName: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        return services.deleteUser(params);
    }
}