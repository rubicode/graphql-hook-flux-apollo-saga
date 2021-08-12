const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
} = require('graphql');

// User Type
exports.userType = new GraphQLObjectType({
    name: 'user',
    fields: function () {
        return {
            userName: {
                type: new GraphQLNonNull(GraphQLID)
            },
            Name: {
                type: GraphQLString
            },
            Age: {
                type: GraphQLString
            }
        }
    }
});