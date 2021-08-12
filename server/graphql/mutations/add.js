const { GraphQLNonNull, GraphQLString } = require('graphql');
var { userType } = require('../types/user');
var services = require('../../services');

exports.add = {
    type: userType,
    args: {
        userName: {
            type: new GraphQLNonNull(GraphQLString),
        },
        Name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        Age: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        return services.createUser(params);
    }
}