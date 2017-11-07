export default `

type Team {
    owner: User!
    members: [User!]
    channels: [Channels!]! 
}

type Channel {
    id: Int! 
    name: String!
    public: Boolean!
    messages: [Message!]!
}

type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
}

type User {
    id: Int!
    username: String!
    email: String!
    teams: [Team!]!
}

type Query {
    hi: String
}
`;