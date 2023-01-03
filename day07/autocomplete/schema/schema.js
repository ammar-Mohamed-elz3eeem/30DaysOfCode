const { GraphQLID, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLList } = require("graphql");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/autocomplete");

const room = new GraphQLObjectType({
	name: "Room",
	fields: {
		_id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		},
		room_users: {
			type: GraphQLInt
		},
		threads: {
			type: GraphQLInt
		}
	}
});

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "Query",
		fields: {
			rooms: {
				type: new GraphQLList(room),
				args: {
					name: {
						type: GraphQLString
					}
				},
				resolve: (r, {name}) => {
					return mongoose.connection.collection("rooms").find({name: new RegExp("("+name+")")}).toArray();
				}
			},
		}
	})
})