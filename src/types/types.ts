export interface User{
    userId: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    image: string,
    color: number,
    profileSetup: boolean
}


export interface Message{
    messageId: string,
    sender: string,
    recipient: string,
    conversationId: string,
    messageType: string,
    content: string,
    fileUrl: string,
    timestamp: string
}

export interface Conversation{
    conversationId: string,
    members: User[],
    lastMessage: Message,
    isSeen: boolean,
    updatedAt: string,
    timestamp: string
}