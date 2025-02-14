import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { Message, Conversation, User } from '../types/types';
import { getConversation, getMessageInConversation } from '../services/api';

export const useChatStore = defineStore('chat', () => {
  // State
  const conversations = ref<Conversation[]>([]);
  const activeConversationId = ref<string | null>(null);
  const messages = ref<Record<string, Message[]>>({});
  const fetchedConversations = ref<Set<string>>(new Set());
  const wsConnection = ref<WebSocket | null>(null);
  const currentUser = ref<User | null>(null);

  // Getters
  const sortedConversations = computed(() => {
    return [...conversations.value].sort((a, b) => 
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  });

  const activeConversation = computed(() => 
    conversations.value.find(c => 
      c.lastMessage?.conversationId === activeConversationId.value
    )
  );

  const getConversationMessages = (conversationId: string) => {
    return computed(() => messages.value[conversationId] || []);
  };

  const hasUnseenMessages = computed(() => 
    conversations.value.some(conv => !conv.isSeen)
  );

  const getOtherUser = (conversation: Conversation) => {
    return computed(() => 
      conversation.members.find(member => member.email !== currentUser.value?.email)
    );
  };

  // Actions
  const initializeWebSocket = () => {
    wsConnection.value = new WebSocket(process.env.VUE_APP_WS_URL as string);
    
    wsConnection.value.onmessage = (event: MessageEvent) => {
        const data = JSON.parse(event.data);
        if (data.type === 'NEW_MESSAGE') {
            handleNewMessage(data.payload);
        }
    };
};

  const fetchConversations = async () => {
    let response
    try {
        response = await getConversation()
        conversations.value = response;
    } catch (error) {
      console.error('Error fetching conversations:', error);
      throw error;
    }
    return response
  };

  const fetchMessages = async (conversationId: string) => {
    if (!fetchedConversations.value.has(conversationId)) {
      try {
        const response = await getMessageInConversation(conversationId)
        messages.value = {
          ...messages.value,
          [conversationId]: response
        };
        fetchedConversations.value.add(conversationId);
      } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
      }
    }
  };

  const handleNewMessage = (message: Message) => {
    // Add message to conversation messages if loaded
    if (messages.value[message.conversationId]) {
      messages.value[message.conversationId].push(message);
    }

    // Update conversation's last message and seen status
    const conversation = conversations.value.find(
      c => c.lastMessage.conversationId === message.conversationId
    );
    
    if (conversation) {
      conversation.lastMessage = message;
      conversation.updatedAt = message.timestamp;
      
      // Mark as unseen if not the active conversation and recipient is current user
      if (activeConversationId.value !== message.conversationId && 
          message.recipient === currentUser.value?.email) {
        conversation.isSeen = false;
      }
    }
  };

  const setActiveConversation = async (conversationId: string) => {
    activeConversationId.value = conversationId;
    if (!fetchedConversations.value.has(conversationId)) {
      await fetchMessages(conversationId);
    }

    // Mark conversation as seen
    const conversation = conversations.value.find(
      c => c.lastMessage.conversationId === conversationId
    );
    
    // if (conversation && !conversation.isSeen) {
    //   conversation.isSeen = true;
    //   // Update seen status on server
    //   try {
    //     await api.post(`/conversations/${conversationId}/seen`);
    //   } catch (error) {
    //     console.error('Error updating seen status:', error);
    //   }
    // }
  };

  const sendMessage = async (content: string, messageType: string = 'text', fileUrl: string = '') => {
    if (!activeConversationId.value || !currentUser.value) return;

    const activeConv = conversations.value.find(
      c => c.lastMessage.conversationId === activeConversationId.value
    );

    if (!activeConv) return;

    const recipient = activeConv.members.find(
      member => member.email !== currentUser.value?.email
    );

    if (!recipient) return;

    // try {
    //   const newMessage: Partial<Message> = {
    //     sender: currentUser.value.email,
    //     recipient: recipient.email,
    //     conversationId: activeConversationId.value,
    //     messageType,
    //     content,
    //     fileUrl,
    //     timestamp: new Date().toISOString()
    //   };

    //   await api.post(`/conversations/${activeConversationId.value}/messages`, newMessage);
    //   // Real message will be added through websocket when it comes back
    // } catch (error) {
    //   console.error('Error sending message:', error);
    //   throw error;
    // }
  };

  const setCurrentUser = (user: User) => {
    currentUser.value = user;
  };

  return {
    // State
    conversations,
    activeConversationId,
    messages,
    currentUser,
    
    // Getters
    sortedConversations,
    activeConversation,
    getConversationMessages,
    hasUnseenMessages,
    getOtherUser,

    // Actions
    initializeWebSocket,
    fetchConversations,
    setActiveConversation,
    sendMessage,
    setCurrentUser
  };
});