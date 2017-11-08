export default `

type Team {
    owner: User!
    members: [User!]
    channels: [Channel!]! 
}

`;