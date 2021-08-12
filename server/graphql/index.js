
const { GraphQLObjectType, GraphQLSchema } = require('graphql');
var queryType = require('./queries/users').queryType;
var mutations = require('./mutations/index');

exports.userSchema = new GraphQLSchema({
    query: queryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
})