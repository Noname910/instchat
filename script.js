// Enhanced Chat Application JavaScript with Firebase Integration
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // DOM Elements - Auth
    const authContainer = document.getElementById('auth-container');
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    // DOM Elements - Main Navigation
    const mainContainer = document.getElementById('main-container');
    const homeBtn = document.getElementById('home-btn');
    const exploreBtn = document.getElementById('explore-btn');
    const messagesBtn = document.getElementById('messages-btn');
    const notificationsBtn = document.getElementById('notifications-btn');
    const profileBtn = document.getElementById('profile-btn');
    const createRoomBtn = document.getElementById('create-room-btn');
    const mainLogoutBtn = document.getElementById('main-logout-btn');
    
    // DOM Elements - Sections
    const homeSection = document.getElementById('home-section');
    const exploreSection = document.getElementById('explore-section');
    const messagesSection = document.getElementById('messages-section');
    const notificationsSection = document.getElementById('notifications-section');
    const profileSection = document.getElementById('profile-section');
    
    // DOM Elements - Home
    const recentRoomsContainer = document.getElementById('recent-rooms-container');
    const globalRoomCount = document.getElementById('global-room-count');
    
    // DOM Elements - Explore
    const exploreSearch = document.getElementById('explore-search');
    const searchBtn = document.getElementById('search-btn');
    const exploreTabs = document.querySelectorAll('.explore-tab');
    const exploreRooms = document.getElementById('explore-rooms');
    const exploreUsers = document.getElementById('explore-users');
    
    // DOM Elements - Messages
    const messagesTabs = document.querySelectorAll('.messages-tab');
    const chatsList = document.getElementById('chats-list');
    const roomsList = document.getElementById('rooms-list');
    const newMessageBtn = document.getElementById('new-message-btn');
    
    // DOM Elements - Profile
    const profileUsername = document.getElementById('profile-username');
    const profileFullname = document.getElementById('profile-fullname');
    const profileBio = document.getElementById('profile-bio');
    const profileAvatarImg = document.getElementById('profile-avatar-img');
    const followingCount = document.getElementById('following-count');
    const followersCount = document.getElementById('followers-count');
    const roomsCount = document.getElementById('rooms-count');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const editAvatarBtn = document.getElementById('edit-avatar-btn');
    const editCoverBtn = document.getElementById('edit-cover-btn');
    const profileTabs = document.querySelectorAll('.profile-tab');
    const profileRooms = document.getElementById('profile-rooms');
    const profileFollowing = document.getElementById('profile-following');
    const profileFollowers = document.getElementById('profile-followers');
    
    // DOM Elements - User Profile View
    const userProfileView = document.getElementById('user-profile-view');
    const userProfileBackBtn = document.getElementById('user-profile-back-btn');
    const userAvatarImg = document.getElementById('user-avatar-img');
    const userProfileUsername = document.getElementById('user-profile-username');
    const userProfileFullname = document.getElementById('user-profile-fullname');
    const userProfileBio = document.getElementById('user-profile-bio');
    const userFollowingCount = document.getElementById('user-following-count');
    const userFollowersCount = document.getElementById('user-followers-count');
    const userRoomsCount = document.getElementById('user-rooms-count');
    const followUserBtn = document.getElementById('follow-user-btn');
    const messageUserBtn = document.getElementById('message-user-btn');
    const userProfileRooms = document.getElementById('user-profile-rooms');
    
    // DOM Elements - Chat
    const chatContainer = document.getElementById('chat-container');
    const backBtn = document.getElementById('back-btn');
    const currentRoomName = document.getElementById('current-room-name');
    const roomMembersCount = document.getElementById('room-members-count');
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const typingIndicator = document.getElementById('typing-indicator');
    const roomInfoBtn = document.getElementById('room-info-btn');
    const attachmentBtn = document.getElementById('attachment-btn');
    const fileMenu = document.getElementById('file-menu');
    const uploadImageBtn = document.getElementById('upload-image-btn');
    const uploadFileBtn = document.getElementById('upload-file-btn');
    const fileInput = document.getElementById('file-input');
    
    // DOM Elements - Direct Chat
    const directChatContainer = document.getElementById('direct-chat-container');
    const directBackBtn = document.getElementById('direct-back-btn');
    const chatUserAvatar = document.getElementById('chat-user-avatar');
    const chatUserName = document.getElementById('chat-user-name');
    const chatUserStatus = document.getElementById('chat-user-status');
    const directChatMessages = document.getElementById('direct-chat-messages');
    const directMessageInput = document.getElementById('direct-message-input');
    const directSendBtn = document.getElementById('direct-send-btn');
    const directTypingIndicator = document.getElementById('direct-typing-indicator');
    const viewProfileBtn = document.getElementById('view-profile-btn');
    const directAttachmentBtn = document.getElementById('direct-attachment-btn');
    const directFileMenu = document.getElementById('direct-file-menu');
    const directUploadImageBtn = document.getElementById('direct-upload-image-btn');
    const directUploadFileBtn = document.getElementById('direct-upload-file-btn');
    const directFileInput = document.getElementById('direct-file-input');
    
    // DOM Elements - Reply
    const replyContainer = document.getElementById('reply-container');
    const replyText = document.getElementById('reply-text');
    const cancelReplyBtn = document.getElementById('cancel-reply-btn');
    const directReplyContainer = document.getElementById('direct-reply-container');
    const directReplyText = document.getElementById('direct-reply-text');
    const directCancelReplyBtn = document.getElementById('direct-cancel-reply-btn');
    
    // DOM Elements - Emoji
    const emojiBtn = document.getElementById('emoji-btn');
    const emojiPicker = document.getElementById('emoji-picker');
    const emojiList = document.getElementById('emoji-list');
    const emojiCategories = document.querySelectorAll('.emoji-category');
    const directEmojiBtn = document.getElementById('direct-emoji-btn');
    
    // DOM Elements - Modals
    const createRoomModal = document.getElementById('create-room-modal');
    const createRoomForm = document.getElementById('create-room-form');
    const roomTypeSelect = document.getElementById('room-type');
    const roomPasswordGroup = document.getElementById('room-password-group');
    const editProfileModal = document.getElementById('edit-profile-modal');
    const editProfileForm = document.getElementById('edit-profile-form');
    const newMessageModal = document.getElementById('new-message-modal');
    const userSearch = document.getElementById('user-search');
    const messageUsersList = document.getElementById('message-users-list');
    const joinPrivateRoomModal = document.getElementById('join-private-room-modal');
    const joinPrivateRoomForm = document.getElementById('join-private-room-form');
    const privateRoomName = document.getElementById('private-room-name');
    const privateRoomPassword = document.getElementById('private-room-password');
    const roomInfoModal = document.getElementById('room-info-modal');
    const modalRoomName = document.getElementById('modal-room-name');
    const modalRoomDescription = document.getElementById('modal-room-description');
    const roomTypeBadge = document.getElementById('room-type-badge');
    const roomMembersList = document.getElementById('room-members-list');
    const closeModalBtns = document.querySelectorAll('.close-modal-btn');
    const imagePreviewModal = document.getElementById('image-preview-modal');
    const previewImage = document.getElementById('preview-image');
    const closePreviewBtn = document.querySelector('.close-preview-btn');
    const overlay = document.getElementById('overlay');
    
    // Templates
    const messageTemplate = document.getElementById('message-template');
    const roomCardTemplate = document.getElementById('room-card-template');
    const userCardTemplate = document.getElementById('user-card-template');
    const chatListItemTemplate = document.getElementById('chat-list-item-template');
    const notificationItemTemplate = document.getElementById('notification-item-template');
    
    // Firebase references
    const auth = firebase.auth();
    const db = firebase.firestore();
    const storage = firebase.storage();
    
    // App State
    const state = {
        currentUser: null,
        currentUserData: null,
        currentRoom: null,
        currentChat: null,
        replyingTo: null,
        directReplyingTo: null,
        typingTimeout: null,
        directTypingTimeout: null,
        viewingUser: null,
        unsubscribeListeners: {}, // Store Firestore listeners for cleanup
    };
    
    // Initialize Emoji Picker
    function initEmojiPicker() {
        const emojis = {
            smileys: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳'],
            people: ['👋', '🤚', '✋', '🖖', '👌', '🤌', '🤏', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '👍', '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🙏'],
            animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🙈', '🙉', '🙊', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇'],
            food: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🌮', '🍕', '🍔', '🍟', '🍖', '🍗', '🥩', '🍱'],
            travel: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🛵', '🏍️', '🛺', '🚲', '🛴', '🚨', '🚥', '🚦', '🛑', '✈️', '🛫', '🛬', '🛩️'],
            activities: ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽'],
            objects: ['💡', '🔦', '🧯', '🛢️', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🪓', '🔩', '⚙️', '🗜️', '⚗️', '🧪', '🧫', '🧬', '🔬'],
            symbols: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎']
        };
        
        // Load default emoji category
        loadEmojis('smileys');
        
        // Add event listeners to emoji categories
        emojiCategories.forEach(category => {
            category.addEventListener('click', function() {
                // Remove active class from all categories
                emojiCategories.forEach(cat => cat.classList.remove('active'));
                // Add active class to clicked category
                this.classList.add('active');
                // Load emojis for the selected category
                loadEmojis(this.dataset.category);
            });
        });
        
        function loadEmojis(category) {
            emojiList.innerHTML = '';
            emojis[category].forEach(emoji => {
                const emojiElement = document.createElement('div');
                emojiElement.classList.add('emoji');
                emojiElement.textContent = emoji;
                emojiElement.addEventListener('click', function() {
                    // Add emoji to active input
                    if (directChatContainer.classList.contains('hidden')) {
                        messageInput.value += emoji;
                        messageInput.focus();
                    } else {
                        directMessageInput.value += emoji;
                        directMessageInput.focus();
                    }
                    emojiPicker.classList.add('hidden');
                    overlay.classList.add('hidden');
                });
                emojiList.appendChild(emojiElement);
            });
        }
    }
    
    // Initialize the app
    function init() {
        console.log('Initializing app...');
        
        // Initialize emoji picker
        initEmojiPicker();
        
        // Set up auth state listener
        auth.onAuthStateChanged(user => {
            console.log('Auth state changed:', user ? 'User logged in' : 'User logged out');
            if (user) {
                // User is signed in
                state.currentUser = user.uid;
                console.log('Current user ID:', state.currentUser);
                
                // Get user data from Firestore
                getUserData(user.uid).then(userData => {
                    state.currentUserData = userData;
                    console.log('User data loaded:', userData);
                    showMainContainer();
                    loadHomeSection();
                    
                    // Initialize Firestore listeners
                    initializeFirestoreListeners();
                });
            } else {
                // User is signed out
                state.currentUser = null;
                state.currentUserData = null;
                showAuthContainer();
                
                // Clean up any existing listeners
                Object.values(state.unsubscribeListeners).forEach(unsubscribe => {
                    if (typeof unsubscribe === 'function') {
                        unsubscribe();
                    }
                });
                state.unsubscribeListeners = {};
            }
        });
        
        // Create global room if it doesn't exist
        ensureGlobalRoomExists();
        
        // Set up event listeners
        setupEventListeners();
    }
    
    // Ensure global room exists
    function ensureGlobalRoomExists() {
        console.log('Checking if global room exists...');
        db.collection('rooms').doc('global').get().then(doc => {
            if (!doc.exists) {
                console.log('Global room does not exist, creating it...');
                db.collection('rooms').doc('global').set({
                    id: 'global',
                    name: 'Global Room',
                    description: 'Chat with everyone in the global community',
                    type: 'public',
                    password: null,
                    creator: 'system',
                    members: [],
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                }).then(() => {
                    console.log('Global room created successfully');
                }).catch(error => {
                    console.error('Error creating global room:', error);
                });
            } else {
                console.log('Global room exists');
            }
        }).catch(error => {
            console.error('Error checking global room:', error);
        });
    }
    
    // Initialize Firestore listeners
    function initializeFirestoreListeners() {
        console.log('Initializing Firestore listeners...');
        
        // Listen for rooms
        state.unsubscribeListeners.rooms = db.collection('rooms').onSnapshot(snapshot => {
            console.log('Rooms snapshot received:', snapshot.docs.length, 'rooms');
            const roomsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            updateRoomsList(roomsData);
            
            // Check if global room exists, create it if not
            const globalRoom = roomsData.find(room => room.id === 'global');
            if (!globalRoom) {
                console.log('Global room not found in snapshot, creating it...');
                ensureGlobalRoomExists();
            }
        }, error => {
            console.error('Error listening for rooms:', error);
            alert('Error loading chat rooms. Please check console for details.');
        });

        // Listen for global messages initially
        joinRoom('global');
    }
    
    // Get user data from Firestore
    async function getUserData(userId) {
        try {
            console.log('Getting user data for:', userId);
            const doc = await db.collection('users').doc(userId).get();
            if (doc.exists) {
                console.log('User data found');
                return doc.data();
            } else {
                console.log('No user data found!');
                return null;
            }
        } catch (error) {
            console.error('Error getting user data:', error);
            return null;
        }
    }
    
    // Set up event listeners
    function setupEventListeners() {
        // Auth event listeners
        loginTab.addEventListener('click', function() {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        });
        
        signupTab.addEventListener('click', function() {
            signupTab.classList.add('active');
            loginTab.classList.remove('active');
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;
            
            if (!email || !password) {
                alert('Please enter both username and password');
                return;
            }
            
            // Sign in with Firebase Auth
            console.log('Attempting to sign in with Firebase Auth...');
            auth.signInWithEmailAndPassword(email, password)
                .then(userCredential => {
                    console.log('Sign in successful:', userCredential.user.uid);
                })
                .catch(error => {
                    console.error('Error signing in:', error);
                    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                        alert('Invalid username or password');
                    } else if (error.code === 'auth/configuration-not-found') {
                        alert('Authentication configuration error. Please make sure this domain ('+window.location.hostname+') is added to authorized domains in Firebase console.');
                        console.error('Firebase configuration error. Make sure the domain is authorized in Firebase console: https://console.firebase.google.com/project/instchat-79b7c/authentication/settings');
                    } else if (error.code === 'auth/operation-not-allowed') {
                        alert('Email/Password authentication is not enabled in your Firebase project. Please enable it in the Firebase console under Authentication → Sign-in method.');
                        console.error('Firebase authentication error: Email/Password provider is disabled. Enable it at: https://console.firebase.google.com/project/instchat-79b7c/authentication/providers');
                    } else {
                        alert('Error signing in: ' + error.message);
                    }
                });
        });
        
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('signup-username').value.trim();
            const fullname = document.getElementById('signup-fullname').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            const bio = document.getElementById('signup-bio').value.trim();
            
            // Simple validation
            if (!username || !fullname || !email || !password) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // Check if username is already taken
            db.collection('users').where('username', '==', username).get()
                .then(snapshot => {
                    if (!snapshot.empty) {
                        alert('Username already taken');
                        return;
                    }
                    
        // Create user with Firebase Auth
                    console.log('Attempting to create user with Firebase Auth...');
                    auth.createUserWithEmailAndPassword(email, password)
                        .then(userCredential => {
                            console.log('User created successfully:', userCredential.user.uid);
                            // Add user data to Firestore
                            return db.collection('users').doc(userCredential.user.uid).set({
                                uid: userCredential.user.uid,
                                username: username,
                                fullname: fullname,
                                bio: bio || 'No bio yet',
                                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(fullname)}&background=random`,
                                following: [],
                                followers: [],
                                rooms: [],
                                recentRooms: ['global'],
                                createdAt: firebase.firestore.FieldValue.serverTimestamp()
                            });
                        })
                        .catch(error => {
                            console.error('Error creating user:', error);
                            if (error.code === 'auth/configuration-not-found') {
                                alert('Authentication configuration error. Please make sure this domain ('+window.location.hostname+') is added to authorized domains in Firebase console.');
                                console.error('Firebase configuration error. Make sure the domain is authorized in Firebase console: https://console.firebase.google.com/project/instchat-79b7c/authentication/settings');
                            } else if (error.code === 'auth/email-already-in-use') {
                                alert('This username is already in use. Please choose a different username.');
                            } else if (error.code === 'auth/operation-not-allowed') {
                                alert('Email/Password authentication is not enabled in your Firebase project. Please enable it in the Firebase console under Authentication → Sign-in method.');
                                console.error('Firebase authentication error: Email/Password provider is disabled. Enable it at: https://console.firebase.google.com/project/instchat-79b7c/authentication/providers');
                            } else {
                                alert('Error creating account: ' + error.message);
                            }
                        });
                })
                .catch(error => {
                    console.error('Error checking username:', error);
                    alert('Error checking username: ' + error.message);
                });
        });
        
        // Main navigation event listeners
        homeBtn.addEventListener('click', function() {
            setActiveNavButton(homeBtn);
            showSection(homeSection);
            loadHomeSection();
        });
        
        exploreBtn.addEventListener('click', function() {
            setActiveNavButton(exploreBtn);
            showSection(exploreSection);
            loadExploreSection();
        });
        
        messagesBtn.addEventListener('click', function() {
            setActiveNavButton(messagesBtn);
            showSection(messagesSection);
            loadMessagesSection();
        });
        
        notificationsBtn.addEventListener('click', function() {
            setActiveNavButton(notificationsBtn);
            showSection(notificationsSection);
            loadNotificationsSection();
        });
        
        profileBtn.addEventListener('click', function() {
            setActiveNavButton(profileBtn);
            showSection(profileSection);
            loadProfileSection();
        });
        
        mainLogoutBtn.addEventListener('click', function() {
            // Sign out from Firebase Auth
            auth.signOut().catch(error => {
                console.error('Error signing out:', error);
            });
        });
        
        createRoomBtn.addEventListener('click', function() {
            showModal(createRoomModal);
        });
        
        // Room type select event listener
        roomTypeSelect.addEventListener('change', function() {
            if (this.value === 'private') {
                roomPasswordGroup.classList.remove('hidden');
            } else {
                roomPasswordGroup.classList.add('hidden');
            }
        });
        
        // Create room form event listener
        createRoomForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const roomName = document.getElementById('room-name').value.trim();
            const roomDescription = document.getElementById('room-description').value.trim();
            const roomType = roomTypeSelect.value;
            const roomPassword = document.getElementById('room-password').value;
            
            // Simple validation
            if (!roomName) {
                alert('Please enter a room name');
                return;
            }
            
            if (roomType === 'private' && !roomPassword) {
                alert('Please enter a password for the private room');
                return;
            }
            
            // Create room ID from name (lowercase, replace spaces with underscores)
            const roomId = roomName.toLowerCase().replace(/\s+/g, '_');
            
            console.log('Creating room:', roomId);
            
            // Check if room already exists
            db.collection('rooms').doc(roomId).get()
                .then(doc => {
                    if (doc.exists) {
                        alert('A room with this name already exists');
                        return;
                    }
                    
                    console.log('Room does not exist, creating it...');
                    
                    // Create new room in Firestore
                    return db.collection('rooms').doc(roomId).set({
                        id: roomId,
                        name: roomName,
                        description: roomDescription || 'No description provided',
                        type: roomType,
                        password: roomType === 'private' ? roomPassword : null,
                        creator: state.currentUser,
                        members: [state.currentUser],
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                })
                .then(() => {
                    if (!roomId) return; // If room creation was aborted
                    
                    console.log('Room created successfully, updating user data...');
                    
                    // Add room to user's rooms
                    return db.collection('users').doc(state.currentUser).update({
                        rooms: firebase.firestore.FieldValue.arrayUnion(roomId),
                        recentRooms: firebase.firestore.FieldValue.arrayUnion(roomId)
                    });
                })
                .then(() => {
                    if (!roomId) return; // If room creation was aborted
                    
                    console.log('User data updated, joining room...');
                    
                    // Hide modal and join the new room
                    hideModal(createRoomModal);
                    joinRoom(roomId);
                    
                    // Reset form
                    createRoomForm.reset();
                    roomPasswordGroup.classList.add('hidden');
                })
                .catch(error => {
                    console.error('Error creating room:', error);
                    alert('Error creating room: ' + error.message);
                });
        });
        
        // Edit profile form event listener
        editProfileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullname = document.getElementById('edit-fullname').value.trim();
            const bio = document.getElementById('edit-bio').value.trim();
            
            // Update user data in Firestore
            db.collection('users').doc(state.currentUser).update({
                fullname: fullname,
                bio: bio
            })
            .then(() => {
                // Update local user data
                state.currentUserData.fullname = fullname;
                state.currentUserData.bio = bio;
                
                // Update profile display
                profileFullname.textContent = fullname;
                profileBio.textContent = bio;
                
                // Hide modal
                hideModal(editProfileModal);
            })
            .catch(error => {
                console.error('Error updating profile:', error);
                alert('Error updating profile: ' + error.message);
            });
        });
        
        // Back button event listeners
        backBtn.addEventListener('click', function() {
            // Unsubscribe from room messages listener
            if (state.unsubscribeListeners.roomMessages) {
                state.unsubscribeListeners.roomMessages();
                delete state.unsubscribeListeners.roomMessages;
            }
            
            // Reset state
            state.currentRoom = null;
            state.replyingTo = null;
            
            // Show main container
            chatContainer.classList.add('hidden');
            mainContainer.classList.remove('hidden');
            
            // Clear chat messages
            chatMessages.innerHTML = '';
        });
        
        directBackBtn.addEventListener('click', function() {
            // Unsubscribe from direct messages listener
            if (state.unsubscribeListeners.directMessages) {
                state.unsubscribeListeners.directMessages();
                delete state.unsubscribeListeners.directMessages;
            }
            
            // Reset state
            state.currentChat = null;
            state.directReplyingTo = null;
            
            // Show main container
            directChatContainer.classList.add('hidden');
            mainContainer.classList.remove('hidden');
            
            // Clear direct chat messages
            directChatMessages.innerHTML = '';
        });
        
        userProfileBackBtn.addEventListener('click', function() {
            // Show main container
            userProfileView.classList.add('hidden');
            mainContainer.classList.remove('hidden');
            
            // Reset state
            state.viewingUser = null;
        });
        
        // Send button event listeners
        sendBtn.addEventListener('click', function() {
            sendMessage();
        });
        
        directSendBtn.addEventListener('click', function() {
            sendDirectMessage();
        });
        
        // Message input event listeners
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
        
        directMessageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendDirectMessage();
            }
        });
        
        // Typing indicator event listeners
        messageInput.addEventListener('input', function() {
            // Clear previous timeout
            if (state.typingTimeout) {
                clearTimeout(state.typingTimeout);
            }
            
            // Set typing status in Firestore
            db.collection('rooms').doc(state.currentRoom).collection('typing').doc(state.currentUser).set({
                username: state.currentUserData.username,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            // Clear typing status after 2 seconds of inactivity
            state.typingTimeout = setTimeout(() => {
                db.collection('rooms').doc(state.currentRoom).collection('typing').doc(state.currentUser).delete();
            }, 2000);
        });
        
        directMessageInput.addEventListener('input', function() {
            // Clear previous timeout
            if (state.directTypingTimeout) {
                clearTimeout(state.directTypingTimeout);
            }
            
            // Set typing status in Firestore
            db.collection('chats').doc(state.currentChat).collection('typing').doc(state.currentUser).set({
                username: state.currentUserData.username,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            // Clear typing status after 2 seconds of inactivity
            state.directTypingTimeout = setTimeout(() => {
                db.collection('chats').doc(state.currentChat).collection('typing').doc(state.currentUser).delete();
            }, 2000);
        });
        
        // Room info button event listener
        roomInfoBtn.addEventListener('click', function() {
            // Get room data from Firestore
            db.collection('rooms').doc(state.currentRoom).get()
                .then(doc => {
                    if (doc.exists) {
                        const roomData = doc.data();
                        
                        // Set room information in modal
                        modalRoomName.textContent = roomData.name;
                        modalRoomDescription.textContent = roomData.description;
                        
                        // Set room type badge
                        if (roomData.type === 'private') {
                            roomTypeBadge.textContent = 'Private';
                            roomTypeBadge.className = 'badge private';
                        } else {
                            roomTypeBadge.textContent = 'Public';
                            roomTypeBadge.className = 'badge public';
                        }
                        
                        // Clear room members list
                        roomMembersList.innerHTML = '';
                        
                        // Get room members data
                        const memberPromises = (roomData.members || []).map(memberId => 
                            db.collection('users').doc(memberId).get()
                        );
                        
                        return Promise.all(memberPromises);
                    }
                    return [];
                })
                .then(memberDocs => {
                    memberDocs.forEach(doc => {
                        if (doc.exists) {
                            const userData = doc.data();
                            const memberItem = document.createElement('div');
                            memberItem.classList.add('member-item');
                            memberItem.innerHTML = `
                                <div class="member-avatar">
                                    <img src="${userData.avatar}" alt="${userData.username}">
                                </div>
                                <div class="member-info">
                                    <div class="member-username">${userData.username}</div>
                                    <div class="member-fullname">${userData.fullname}</div>
                                </div>
                            `;
                            roomMembersList.appendChild(memberItem);
                        }
                    });
                    
                    // Show modal
                    showModal(roomInfoModal);
                })
                .catch(error => {
                    console.error('Error getting room info:', error);
                    alert('Error getting room info: ' + error.message);
                });
        });
        
        // Cancel reply button event listeners
        cancelReplyBtn.addEventListener('click', function() {
            state.replyingTo = null;
            replyContainer.classList.add('hidden');
        });
        
        directCancelReplyBtn.addEventListener('click', function() {
            state.directReplyingTo = null;
            directReplyContainer.classList.add('hidden');
        });
        
        // Emoji button event listeners
        emojiBtn.addEventListener('click', function() {
            emojiPicker.style.bottom = '80px';
            emojiPicker.style.left = '50px';
            emojiPicker.classList.toggle('hidden');
            overlay.classList.toggle('hidden');
        });
        
        directEmojiBtn.addEventListener('click', function() {
            emojiPicker.style.bottom = '80px';
            emojiPicker.style.left = '50px';
            emojiPicker.classList.toggle('hidden');
            overlay.classList.toggle('hidden');
        });
        
        // Attachment button event listeners
        attachmentBtn.addEventListener('click', function() {
            fileMenu.classList.toggle('hidden');
        });
        
        directAttachmentBtn.addEventListener('click', function() {
            directFileMenu.classList.toggle('hidden');
        });
        
        // Upload buttons event listeners
        uploadImageBtn.addEventListener('click', function() {
            fileInput.setAttribute('accept', 'image/*');
            fileInput.click();
        });
        
        uploadFileBtn.addEventListener('click', function() {
            fileInput.setAttribute('accept', '.pdf,.doc,.docx,.txt');
            fileInput.click();
        });
        
        directUploadImageBtn.addEventListener('click', function() {
            directFileInput.setAttribute('accept', 'image/*');
            directFileInput.click();
        });
        
        directUploadFileBtn.addEventListener('click', function() {
            directFileInput.setAttribute('accept', '.pdf,.doc,.docx,.txt');
            directFileInput.click();
        });
        
        // File input event listeners
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const file = this.files[0];
                handleFileUpload(file);
                fileMenu.classList.add('hidden');
            }
        });
        
        directFileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const file = this.files[0];
                handleDirectFileUpload(file);
                directFileMenu.classList.add('hidden');
            }
        });
        
        // Close modal buttons event listeners
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const modal = this.closest('.modal');
                hideModal(modal);
            });
        });
        
        // Close preview button event listener
        closePreviewBtn.addEventListener('click', function() {
            imagePreviewModal.classList.add('hidden');
        });
        
        // Overlay event listener
        overlay.addEventListener('click', function() {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.add('hidden');
            });
            emojiPicker.classList.add('hidden');
            overlay.classList.add('hidden');
        });
        
        // Explore tabs event listeners
        exploreTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                exploreTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const tabName = this.dataset.tab;
                if (tabName === 'rooms') {
                    exploreRooms.classList.remove('hidden');
                    exploreUsers.classList.add('hidden');
                } else if (tabName === 'users') {
                    exploreRooms.classList.add('hidden');
                    exploreUsers.classList.remove('hidden');
                }
            });
        });
        
        // Messages tabs event listeners
        messagesTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                messagesTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const tabName = this.dataset.tab;
                if (tabName === 'chats') {
                    chatsList.classList.remove('hidden');
                    roomsList.classList.add('hidden');
                } else if (tabName === 'rooms') {
                    chatsList.classList.add('hidden');
                    roomsList.classList.remove('hidden');
                }
            });
        });
        
        // Profile tabs event listeners
        profileTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                profileTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const tabName = this.dataset.tab;
                if (tabName === 'rooms') {
                    profileRooms.classList.remove('hidden');
                    profileFollowing.classList.add('hidden');
                    profileFollowers.classList.add('hidden');
                } else if (tabName === 'following') {
                    profileRooms.classList.add('hidden');
                    profileFollowing.classList.remove('hidden');
                    profileFollowers.classList.add('hidden');
                } else if (tabName === 'followers') {
                    profileRooms.classList.add('hidden');
                    profileFollowing.classList.add('hidden');
                    profileFollowers.classList.remove('hidden');
                }
            });
        });
        
        // Edit profile button event listener
        editProfileBtn.addEventListener('click', function() {
            // Set current values in form
            document.getElementById('edit-fullname').value = state.currentUserData.fullname;
            document.getElementById('edit-bio').value = state.currentUserData.bio;
            
            // Show modal
            showModal(editProfileModal);
        });
        
        // Edit avatar button event listener
        editAvatarBtn.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = e => {
                const file = e.target.files[0];
                if (file) {
                    uploadProfileImage(file, 'avatar');
                }
            };
            input.click();
        });
        
        editCoverBtn.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = e => {
                const file = e.target.files[0];
                if (file) {
                    uploadProfileImage(file, 'cover');
                }
            };
            input.click();
        });
        
        // New message button event listener
        newMessageBtn.addEventListener('click', function() {
            // Populate users list from Firestore
            messageUsersList.innerHTML = '';
            
            db.collection('users').get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        const userData = doc.data();
                        if (userData.uid !== state.currentUser) {
                            const userItem = document.createElement('div');
                            userItem.classList.add('users-list-item');
                            userItem.innerHTML = `
                                <div class="users-list-avatar">
                                    <img src="${userData.avatar}" alt="${userData.username}">
                                </div>
                                <div class="users-list-info">
                                    <div class="users-list-username">${userData.username}</div>
                                    <div class="users-list-fullname">${userData.fullname}</div>
                                </div>
                            `;
                            userItem.addEventListener('click', function() {
                                startDirectChat(userData.uid);
                                hideModal(newMessageModal);
                            });
                            messageUsersList.appendChild(userItem);
                        }
                    });
                })
                .catch(error => {
                    console.error('Error getting users:', error);
                });
            
            showModal(newMessageModal);
        });
        
        // User search event listener
        userSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const userItems = messageUsersList.querySelectorAll('.users-list-item');
            
            userItems.forEach(item => {
                const username = item.querySelector('.users-list-username').textContent.toLowerCase();
                const fullname = item.querySelector('.users-list-fullname').textContent.toLowerCase();
                
                if (username.includes(searchTerm) || fullname.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
        
        // Join private room form event listener
        joinPrivateRoomForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const roomId = this.dataset.roomId;
            const password = privateRoomPassword.value;
            
            // Check if password is correct
            db.collection('rooms').doc(roomId).get()
                .then(doc => {
                    if (doc.exists) {
                        const roomData = doc.data();
                        if (password === roomData.password) {
                            // Add user to room members
                            return db.collection('rooms').doc(roomId).update({
                                members: firebase.firestore.FieldValue.arrayUnion(state.currentUser)
                            });
                        } else {
                            alert('Incorrect password');
                            return Promise.reject('Incorrect password');
                        }
                    } else {
                        alert('Room not found');
                        return Promise.reject('Room not found');
                    }
                })
                .then(() => {
                    // Add room to user's recent rooms
                    return db.collection('users').doc(state.currentUser).update({
                        recentRooms: firebase.firestore.FieldValue.arrayUnion(roomId)
                    });
                })
                .then(() => {
                    // Hide modal and join room
                    hideModal(joinPrivateRoomModal);
                    joinRoom(roomId);
                })
                .catch(error => {
                    if (typeof error === 'string') {
                        // Already alerted
                        return;
                    }
                    console.error('Error joining private room:', error);
                    alert('Error joining private room: ' + error.message);
                });
        });
        
        // Explore search event listener
        exploreSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            // Search rooms
            const roomCards = exploreRooms.querySelectorAll('.room-card');
            roomCards.forEach(card => {
                const roomName = card.querySelector('.room-name').textContent.toLowerCase();
                const roomDescription = card.querySelector('.room-description').textContent.toLowerCase();
                
                if (roomName.includes(searchTerm) || roomDescription.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Search users
            const userCards = exploreUsers.querySelectorAll('.user-card');
            userCards.forEach(card => {
                const username = card.querySelector('.user-card-username').textContent.toLowerCase();
                const fullname = card.querySelector('.user-card-fullname').textContent.toLowerCase();
                
                if (username.includes(searchTerm) || fullname.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
        
        // Search button event listener
        searchBtn.addEventListener('click', function() {
            const searchTerm = exploreSearch.value.toLowerCase();
            
            if (!searchTerm) {
                return;
            }
            
            // Set active tab to rooms
            exploreTabs.forEach(tab => {
                if (tab.dataset.tab === 'rooms') {
                    tab.click();
                }
            });
            
            // Search rooms
            const roomCards = exploreRooms.querySelectorAll('.room-card');
            roomCards.forEach(card => {
                const roomName = card.querySelector('.room-name').textContent.toLowerCase();
                const roomDescription = card.querySelector('.room-description').textContent.toLowerCase();
                
                if (roomName.includes(searchTerm) || roomDescription.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Show auth container
    function showAuthContainer() {
        authContainer.classList.remove('hidden');
        mainContainer.classList.add('hidden');
        chatContainer.classList.add('hidden');
        directChatContainer.classList.add('hidden');
        userProfileView.classList.add('hidden');
    }
    
    // Show main container
    function showMainContainer() {
        authContainer.classList.add('hidden');
        mainContainer.classList.remove('hidden');
        chatContainer.classList.add('hidden');
        directChatContainer.classList.add('hidden');
        userProfileView.classList.add('hidden');
    }
    
    // Show section
    function showSection(section) {
        // Hide all sections
        homeSection.classList.add('hidden');
        exploreSection.classList.add('hidden');
        messagesSection.classList.add('hidden');
        notificationsSection.classList.add('hidden');
        profileSection.classList.add('hidden');
        
        // Show selected section
        section.classList.remove('hidden');
    }
    
    // Set active nav button
    function setActiveNavButton(button) {
        // Remove active class from all nav buttons
        homeBtn.classList.remove('active');
        exploreBtn.classList.remove('active');
        messagesBtn.classList.remove('active');
        notificationsBtn.classList.remove('active');
        profileBtn.classList.remove('active');
        
        // Add active class to selected button
        button.classList.add('active');
    }
    
    // Show modal
    function showModal(modal) {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    
    // Hide modal
    function hideModal(modal) {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    
    // Load home section
    function loadHomeSection() {
        console.log('Loading home section...');
        
        // Update global room count from Firestore
        db.collection('rooms').doc('global').get()
            .then(doc => {
                if (doc.exists) {
                    const roomData = doc.data();
                    globalRoomCount.textContent = roomData.members ? roomData.members.length : 0;
                }
            })
            .catch(error => {
                console.error('Error getting global room:', error);
            });
        
        // Clear recent rooms container
        recentRoomsContainer.innerHTML = '';
        
        // Get user's recent rooms from Firestore
        db.collection('users').doc(state.currentUser).get()
            .then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    const recentRooms = userData.recentRooms || [];
                    
                    console.log('User recent rooms:', recentRooms);
                    
                    // Get user's recent rooms (excluding global)
                    const userRooms = recentRooms.filter(roomId => roomId !== 'global');
                    
                    // Get room data for each room
                    const roomPromises = userRooms.map(roomId => 
                        db.collection('rooms').doc(roomId).get()
                    );
                    
                    return Promise.all(roomPromises);
                }
                return [];
            })
            .then(roomDocs => {
                roomDocs.forEach(doc => {
                    if (doc.exists) {
                        const roomData = doc.data();
                        const roomCard = createRoomCard(roomData);
                        recentRoomsContainer.appendChild(roomCard);
                    }
                });
                
                // Add event listeners to join room buttons
                document.querySelectorAll('.join-room-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const roomId = this.dataset.room;
                        
                        db.collection('rooms').doc(roomId).get()
                            .then(doc => {
                                if (doc.exists) {
                                    const roomData = doc.data();
                                    if (roomData.type === 'private' && !roomData.members.includes(state.currentUser)) {
                                        // Show private room join modal
                                        privateRoomName.textContent = roomData.name;
                                        joinPrivateRoomForm.dataset.roomId = roomId;
                                        privateRoomPassword.value = '';
                                        showModal(joinPrivateRoomModal);
                                    } else {
                                        joinRoom(roomId);
                                    }
                                }
                            })
                            .catch(error => {
                                console.error('Error getting room:', error);
                            });
                    });
                });
            })
            .catch(error => {
                console.error('Error loading home section:', error);
            });
    }
    
    // Load explore section
    function loadExploreSection() {
        // Clear explore rooms and users containers
        exploreRooms.innerHTML = '';
        exploreUsers.innerHTML = '';
        
        // Get public rooms from Firestore
        db.collection('rooms').where('type', '==', 'public').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const roomData = doc.data();
                    const roomCard = createRoomCard(roomData);
                    exploreRooms.appendChild(roomCard);
                });
                
                // Add event listeners to join room buttons
                exploreRooms.querySelectorAll('.join-room-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const roomId = this.dataset.room;
                        joinRoom(roomId);
                    });
                });
            })
            .catch(error => {
                console.error('Error getting public rooms:', error);
            });
        
        // Get users from Firestore
        db.collection('users').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const userData = doc.data();
                    if (userData.uid !== state.currentUser) {
                        const userCard = createUserCard(userData);
                        exploreUsers.appendChild(userCard);
                    }
                });
                
                // Add event listeners to follow buttons
                exploreUsers.querySelectorAll('.follow-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const userId = this.dataset.userid;
                        toggleFollow(userId);
                        updateFollowButton(this, userId);
                    });
                });
                
                // Add event listeners to message buttons
                exploreUsers.querySelectorAll('.message-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const userId = this.dataset.userid;
                        startDirectChat(userId);
                    });
                });
            })
            .catch(error => {
                console.error('Error getting users:', error);
            });
    }
    
    // Load messages section
    function loadMessagesSection() {
        // Clear chats and rooms lists
        chatsList.innerHTML = '';
        roomsList.innerHTML = '';
        
        // Get direct chats from Firestore
        db.collection('chats')
            .where('participants', 'array-contains', state.currentUser)
            .orderBy('updatedAt', 'desc')
            .get()
            .then(snapshot => {
                const chatPromises = snapshot.docs.map(doc => {
                    const chatData = doc.data();
                    const otherUserId = chatData.participants.find(p => p !== state.currentUser);
                    
                    // Get other user data
                    return db.collection('users').doc(otherUserId).get()
                        .then(userDoc => {
                            if (userDoc.exists) {
                                const userData = userDoc.data();
                                
                                // Get last message
                                return db.collection('chats').doc(doc.id).collection('messages')
                                    .orderBy('createdAt', 'desc')
                                    .limit(1)
                                    .get()
                                    .then(messagesSnapshot => {
                                        let lastMessage = null;
                                        if (!messagesSnapshot.empty) {
                                            lastMessage = messagesSnapshot.docs[0].data();
                                        }
                                        
                                        return {
                                            chatId: doc.id,
                                            userData,
                                            lastMessage
                                        };
                                    });
                            }
                            return null;
                        });
                });
                
                return Promise.all(chatPromises);
            })
            .then(chatsData => {
                // Filter out null values
                chatsData = chatsData.filter(chat => chat !== null);
                
                // Create chat list items
                chatsData.forEach(chat => {
                    const chatItem = createChatListItem(chat.userData, chat.lastMessage, chat.chatId);
                    chatsList.appendChild(chatItem);
                });
                
                // Add event listeners to chat items
                chatsList.querySelectorAll('.chat-list-item').forEach(item => {
                    item.addEventListener('click', function() {
                        const userId = this.dataset.userid;
                        const chatId = this.dataset.chatid;
                        openDirectChat(userId, chatId);
                    });
                });
            })
            .catch(error => {
                console.error('Error loading chats:', error);
            });
        
        // Get user's rooms from Firestore
        db.collection('users').doc(state.currentUser).get()
            .then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    const userRooms = userData.recentRooms || [];
                    
                    // Get room data for each room
                    const roomPromises = userRooms.map(roomId => 
                        db.collection('rooms').doc(roomId).get()
                            .then(roomDoc => {
                                if (roomDoc.exists) {
                                    const roomData = roomDoc.data();
                                    
                                    // Get last message
                                    return db.collection('rooms').doc(roomId).collection('messages')
                                        .orderBy('createdAt', 'desc')
                                        .limit(1)
                                        .get()
                                        .then(messagesSnapshot => {
                                            let lastMessage = null;
                                            if (!messagesSnapshot.empty) {
                                                lastMessage = messagesSnapshot.docs[0].data();
                                            }
                                            
                                            return {
                                                roomData,
                                                lastMessage
                                            };
                                        });
                                }
                                return null;
                            })
                    );
                    
                    return Promise.all(roomPromises);
                }
                return [];
            })
            .then(roomsData => {
                // Filter out null values
                roomsData = roomsData.filter(room => room !== null);
                
                // Create room list items
                roomsData.forEach(room => {
                    const roomItem = createRoomListItem(room.roomData, room.lastMessage);
                    roomsList.appendChild(roomItem);
                });
                
                // Add event listeners to room items
                roomsList.querySelectorAll('.chat-list-item').forEach(item => {
                    item.addEventListener('click', function() {
                        const roomId = this.dataset.roomid;
                        joinRoom(roomId);
                    });
                });
            })
            .catch(error => {
                console.error('Error loading rooms:', error);
            });
    }
    
    // Load notifications section
    function loadNotificationsSection() {
        // Clear notifications container
        notificationsSection.querySelector('.notifications-list').innerHTML = '';
        
        // Get user's notifications from Firestore
        db.collection('users').doc(state.currentUser).collection('notifications')
            .orderBy('createdAt', 'desc')
            .get()
            .then(snapshot => {
                if (snapshot.empty) {
                    notificationsSection.querySelector('.notifications-list').innerHTML = '<div class="empty-state">No notifications yet</div>';
                    return;
                }
                
                const notificationPromises = snapshot.docs.map(doc => {
                    const notificationData = doc.data();
                    notificationData.id = doc.id;
                    
                    // Get from user data if needed
                    if (notificationData.fromUser) {
                        return db.collection('users').doc(notificationData.fromUser).get()
                            .then(userDoc => {
                                if (userDoc.exists) {
                                    notificationData.fromUser = userDoc.data();
                                }
                                return notificationData;
                            });
                    }
                    
                    return notificationData;
                });
                
                return Promise.all(notificationPromises);
            })
            .then(notifications => {
                if (!notifications || notifications.length === 0) {
                    return;
                }
                
                // Create notification items
                notifications.forEach(notification => {
                    const notificationItem = createNotificationItem(notification);
                    notificationsSection.querySelector('.notifications-list').appendChild(notificationItem);
                });
                
                // Mark all notifications as read
                const batch = db.batch();
                notifications.forEach(notification => {
                    if (!notification.read) {
                        const notificationRef = db.collection('users').doc(state.currentUser).collection('notifications').doc(notification.id);
                        batch.update(notificationRef, { read: true });
                    }
                });
                
                return batch.commit();
            })
            .catch(error => {
                console.error('Error loading notifications:', error);
            });
    }
    
    // Load profile section
    function loadProfileSection() {
        // Set profile information
        profileUsername.textContent = state.currentUserData.username;
        profileFullname.textContent = state.currentUserData.fullname;
        profileBio.textContent = state.currentUserData.bio;
        profileAvatarImg.src = state.currentUserData.avatar;
        
        // Set counts
        followingCount.textContent = state.currentUserData.following ? state.currentUserData.following.length : 0;
        followersCount.textContent = state.currentUserData.followers ? state.currentUserData.followers.length : 0;
        roomsCount.textContent = state.currentUserData.rooms ? state.currentUserData.rooms.length : 0;
        
        // Clear profile containers
        profileRooms.innerHTML = '';
        profileFollowing.innerHTML = '';
        profileFollowers.innerHTML = '';
        
        // Get user's rooms from Firestore
        const roomPromises = (state.currentUserData.rooms || []).map(roomId => 
            db.collection('rooms').doc(roomId).get()
        );
        
        Promise.all(roomPromises)
            .then(roomDocs => {
                roomDocs.forEach(doc => {
                    if (doc.exists) {
                        const roomData = doc.data();
                        const roomCard = createRoomCard(roomData);
                        profileRooms.appendChild(roomCard);
                    }
                });
                
                // Add event listeners to join room buttons
                profileRooms.querySelectorAll('.join-room-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const roomId = this.dataset.room;
                        joinRoom(roomId);
                    });
                });
            })
            .catch(error => {
                console.error('Error loading user rooms:', error);
            });
        
        // Get user's following from Firestore
        const followingPromises = (state.currentUserData.following || []).map(userId => 
            db.collection('users').doc(userId).get()
        );
        
        Promise.all(followingPromises)
            .then(userDocs => {
                userDocs.forEach(doc => {
                    if (doc.exists) {
                        const userData = doc.data();
                        const userCard = createUserCard(userData);
                        profileFollowing.appendChild(userCard);
                    }
                });
                
                // Add event listeners to follow buttons
                profileFollowing.querySelectorAll('.follow-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const userId = this.dataset.userid;
                        toggleFollow(userId);
                        updateFollowButton(this, userId);
                    });
                });
                
                // Add event listeners to message buttons
                profileFollowing.querySelectorAll('.message-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const userId = this.dataset.userid;
                        startDirectChat(userId);
                    });
                });
            })
            .catch(error => {
                console.error('Error loading following users:', error);
            });
        
        // Get user's followers from Firestore
        const followerPromises = (state.currentUserData.followers || []).map(userId => 
            db.collection('users').doc(userId).get()
        );
        
        Promise.all(followerPromises)
            .then(userDocs => {
                userDocs.forEach(doc => {
                    if (doc.exists) {
                        const userData = doc.data();
                        const userCard = createUserCard(userData);
                        profileFollowers.appendChild(userCard);
                    }
                });
                
                // Add event listeners to follow buttons
                profileFollowers.querySelectorAll('.follow-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const userId = this.dataset.userid;
                        toggleFollow(userId);
                        updateFollowButton(this, userId);
                    });
                });
                
                // Add event listeners to message buttons
                profileFollowers.querySelectorAll('.message-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const userId = this.dataset.userid;
                        startDirectChat(userId);
                    });
                });
            })
            .catch(error => {
                console.error('Error loading follower users:', error);
            });
    }
    
    // View user profile
    function viewUserProfile(userId) {
        // Get user data from Firestore
        db.collection('users').doc(userId).get()
            .then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    state.viewingUser = userData;
                    
                    // Set user information
                    userAvatarImg.src = userData.avatar;
                    userProfileUsername.textContent = userData.username;
                    userProfileFullname.textContent = userData.fullname;
                    userProfileBio.textContent = userData.bio;
                    
                    // Set counts
                    userFollowingCount.textContent = userData.following ? userData.following.length : 0;
                    userFollowersCount.textContent = userData.followers ? userData.followers.length : 0;
                    userRoomsCount.textContent = userData.rooms ? userData.rooms.length : 0;
                    
                    // Set follow button state
                    if (state.currentUserData.following && state.currentUserData.following.includes(userId)) {
                        followUserBtn.textContent = 'Following';
                        followUserBtn.classList.add('following');
                    } else {
                        followUserBtn.textContent = 'Follow';
                        followUserBtn.classList.remove('following');
                    }
                    
                    // Set message button data
                    followUserBtn.dataset.userid = userId;
                    messageUserBtn.dataset.userid = userId;
                    
                    // Clear profile rooms container
                    userProfileRooms.innerHTML = '';
                    
                    // Get public rooms created by user
                    const roomPromises = (userData.rooms || []).map(roomId => 
                        db.collection('rooms').doc(roomId).get()
                    );
                    
                    Promise.all(roomPromises)
                        .then(roomDocs => {
                            roomDocs.forEach(doc => {
                                if (doc.exists) {
                                    const roomData = doc.data();
                                    if (roomData.type === 'public') {
                                        const roomCard = createRoomCard(roomData);
                                        userProfileRooms.appendChild(roomCard);
                                    }
                                }
                            });
                            
                            // Add event listeners to join room buttons
                            userProfileRooms.querySelectorAll('.join-room-btn').forEach(btn => {
                                btn.addEventListener('click', function() {
                                    const roomId = this.dataset.room;
                                    joinRoom(roomId);
                                });
                            });
                        })
                        .catch(error => {
                            console.error('Error loading user rooms:', error);
                        });
                    
                    // Add event listeners to follow button
                    followUserBtn.addEventListener('click', function() {
                        toggleFollow(userId);
                        if (state.currentUserData.following && state.currentUserData.following.includes(userId)) {
                            this.textContent = 'Following';
                            this.classList.add('following');
                        } else {
                            this.textContent = 'Follow';
                            this.classList.remove('following');
                        }
                    });
                    
                    // Add event listener to message button
                    messageUserBtn.addEventListener('click', function() {
                        startDirectChat(userId);
                    });
                    
                    // Show user profile view
                    directChatContainer.classList.add('hidden');
                    mainContainer.classList.add('hidden');
                    userProfileView.classList.remove('hidden');
                }
            })
            .catch(error => {
                console.error('Error viewing user profile:', error);
            });
    }
    
    // Create room card
    function createRoomCard(roomData) {
        const template = document.importNode(roomCardTemplate.content, true);
        const roomCard = template.querySelector('.room-card');
        
        // Set room information
        roomCard.querySelector('.room-name').textContent = roomData.name;
        roomCard.querySelector('.members-count').textContent = roomData.members ? roomData.members.length : 0;
        roomCard.querySelector('.room-description').textContent = roomData.description;
        
        // Set room type badge
        const roomTypeBadge = roomCard.querySelector('.room-type-badge');
        if (roomData.type === 'private') {
            roomTypeBadge.textContent = 'Private';
            roomTypeBadge.classList.add('badge', 'private');
        } else {
            roomTypeBadge.textContent = 'Public';
            roomTypeBadge.classList.add('badge', 'public');
        }
        
        // Set join button data
        const joinBtn = roomCard.querySelector('.join-room-btn');
        joinBtn.dataset.room = roomData.id;
        
        return roomCard;
    }
    
    // Create user card
    function createUserCard(userData) {
        const template = document.importNode(userCardTemplate.content, true);
        const userCard = template.querySelector('.user-card');
        
        // Set user information
        userCard.querySelector('.user-card-avatar img').src = userData.avatar;
        userCard.querySelector('.user-card-username').textContent = userData.username;
        userCard.querySelector('.user-card-fullname').textContent = userData.fullname;
        
        // Set follow button state
        const followBtn = userCard.querySelector('.follow-btn');
        followBtn.dataset.userid = userData.uid;
        if (state.currentUserData.following && state.currentUserData.following.includes(userData.uid)) {
            followBtn.textContent = 'Following';
            followBtn.classList.add('following');
        }
        
        // Set message button data
        const messageBtn = userCard.querySelector('.message-btn');
        messageBtn.dataset.userid = userData.uid;
        
        return userCard;
    }
    
    // Create chat list item
    function createChatListItem(userData, lastMessage, chatId) {
        const template = document.importNode(chatListItemTemplate.content, true);
        const chatItem = template.querySelector('.chat-list-item');
        
        // Set chat information
        chatItem.dataset.userid = userData.uid;
        chatItem.dataset.chatid = chatId;
        chatItem.querySelector('.chat-item-avatar img').src = userData.avatar;
        chatItem.querySelector('.chat-item-name').textContent = userData.username;
        
        if (lastMessage) {
            chatItem.querySelector('.chat-item-message').textContent = lastMessage.text;
            chatItem.querySelector('.chat-item-time').textContent = formatTime(lastMessage.createdAt.toDate());
        } else {
            chatItem.querySelector('.chat-item-message').textContent = 'No messages yet';
            chatItem.querySelector('.chat-item-time').textContent = '';
        }
        
        return chatItem;
    }
    
    // Create room list item
    function createRoomListItem(roomData, lastMessage) {
        const template = document.importNode(chatListItemTemplate.content, true);
        const roomItem = template.querySelector('.chat-list-item');
        
        // Set room information
        roomItem.dataset.roomid = roomData.id;
        
        // Use a default avatar for rooms
        const avatarImg = roomItem.querySelector('.chat-item-avatar img');
        avatarImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(roomData.name)}&background=random`;
        
        roomItem.querySelector('.chat-item-name').textContent = roomData.name;
        
        if (lastMessage) {
            if (lastMessage.type === 'system') {
                roomItem.querySelector('.chat-item-message').textContent = lastMessage.text;
            } else {
                roomItem.querySelector('.chat-item-message').textContent = `${lastMessage.senderName}: ${lastMessage.text}`;
            }
            roomItem.querySelector('.chat-item-time').textContent = formatTime(lastMessage.createdAt.toDate());
        } else {
            roomItem.querySelector('.chat-item-message').textContent = 'No messages yet';
            roomItem.querySelector('.chat-item-time').textContent = '';
        }
        
        return roomItem;
    }
    
    // Create notification item
    function createNotificationItem(notification) {
        const template = document.importNode(notificationItemTemplate.content, true);
        const notificationItem = template.querySelector('.notification-item');
        
        // Set notification information
        if (notification.type === 'follow') {
            const fromUser = notification.fromUser;
            notificationItem.querySelector('.notification-avatar img').src = fromUser.avatar;
            notificationItem.querySelector('.notification-text').textContent = `${fromUser.username} started following you`;
            
            // Add action buttons if needed
            const actionBtn = notificationItem.querySelector('.notification-action-btn');
            if (!state.currentUserData.following || !state.currentUserData.following.includes(fromUser.uid)) {
                actionBtn.textContent = 'Follow Back';
                actionBtn.classList.add('accept');
                actionBtn.dataset.userid = fromUser.uid;
                actionBtn.addEventListener('click', function() {
                    toggleFollow(fromUser.uid);
                    this.textContent = 'Following';
                    this.disabled = true;
                    
                    // Mark notification as read
                    db.collection('users').doc(state.currentUser).collection('notifications').doc(notification.id).update({
                        read: true
                    });
                });
            } else {
                actionBtn.remove();
            }
        } else if (notification.type === 'room_invite') {
            const fromUser = notification.fromUser;
            notificationItem.querySelector('.notification-avatar img').src = fromUser.avatar;
            notificationItem.querySelector('.notification-text').textContent = `${fromUser.username} invited you to join ${notification.roomName}`;
            
            // Add action buttons
            const actionBtn = notificationItem.querySelector('.notification-action-btn');
            actionBtn.textContent = 'Join';
            actionBtn.classList.add('accept');
            actionBtn.dataset.roomid = notification.roomId;
            actionBtn.addEventListener('click', function() {
                joinRoom(notification.roomId);
                
                // Mark notification as read
                db.collection('users').doc(state.currentUser).collection('notifications').doc(notification.id).update({
                    read: true
                });
            });
        }
        
        // Set read status
        if (notification.read) {
            notificationItem.classList.add('read');
        }
        
        // Set time
        notificationItem.querySelector('.notification-time').textContent = formatTime(notification.createdAt.toDate());
        
        return notificationItem;
    }
    
    // Create message element
    function createMessageElement(message, isDirectChat = false) {
        const template = document.importNode(messageTemplate.content, true);
        const messageElement = template.querySelector('.message');
        
        // Set message ID
        messageElement.dataset.id = message.id;
        
        // Set message type
        if (message.type === 'system') {
            messageElement.classList.add('system-message');
            messageElement.innerHTML = `<div class="message-text">${message.text}</div>`;
            return messageElement;
        }
        
        // Set message sender
        const isSelf = message.sender === state.currentUser;
        if (isSelf) {
            messageElement.classList.add('self');
        }
        
        // Set message avatar
        const avatarImg = messageElement.querySelector('.message-avatar img');
        avatarImg.src = message.senderAvatar;
        avatarImg.alt = message.senderName;
        
        // Set message content
        messageElement.querySelector('.message-sender').textContent = isSelf ? 'You' : message.senderName;
        messageElement.querySelector('.message-text').textContent = message.text;
        messageElement.querySelector('.message-time').textContent = formatTime(message.createdAt.toDate());
        
        // Set reply if exists
        if (message.replyTo) {
            const replyElement = document.createElement('div');
            replyElement.classList.add('message-reply');
            replyElement.innerHTML = `
                <div class="reply-sender">${message.replyToSenderName}</div>
                <div class="reply-text">${message.replyToText}</div>
            `;
            messageElement.querySelector('.message-content').insertBefore(replyElement, messageElement.querySelector('.message-text'));
        }
        
        // Set image if exists
        if (message.image) {
            const imageElement = document.createElement('div');
            imageElement.classList.add('message-image');
            imageElement.innerHTML = `<img src="${message.image}" alt="Image">`;
            messageElement.querySelector('.message-content').appendChild(imageElement);
            
            // Add click event to show image preview
            imageElement.querySelector('img').addEventListener('click', function() {
                previewImage.src = message.image;
                imagePreviewModal.classList.remove('hidden');
            });
        }
        
        // Set file if exists
        if (message.file) {
            const fileElement = document.createElement('div');
            fileElement.classList.add('message-file');
            fileElement.innerHTML = `
                <a href="${message.file}" target="_blank" class="file-link">
                    <i class="fas fa-file"></i>
                    <span>${message.fileName}</span>
                </a>
            `;
            messageElement.querySelector('.message-content').appendChild(fileElement);
        }
        
        // Add reply button event listener
        messageElement.querySelector('.reply-btn').addEventListener('click', function() {
            if (isDirectChat) {
                state.directReplyingTo = {
                    id: message.id,
                    text: message.text,
                    sender: message.sender,
                    senderName: message.senderName
                };
                directReplyText.textContent = message.text;
                directReplyContainer.classList.remove('hidden');
                directMessageInput.focus();
            } else {
                state.replyingTo = {
                    id: message.id,
                    text: message.text,
                    sender: message.sender,
                    senderName: message.senderName
                };
                replyText.textContent = message.text;
                replyContainer.classList.remove('hidden');
                messageInput.focus();
            }
        });
        
        // Add avatar click event listener
        avatarImg.addEventListener('click', function() {
            if (message.sender !== state.currentUser) {
                viewUserProfile(message.sender);
            }
        });
        
        return messageElement;
    }
    
    // Join room
    function joinRoom(roomId) {
        console.log('Joining room:', roomId);
        
        // Set current room
        state.currentRoom = roomId;
        
        // Get room data from Firestore
        db.collection('rooms').doc(roomId).get()
            .then(doc => {
                if (doc.exists) {
                    const roomData = doc.data();
                    
                    // Set room information
                    currentRoomName.textContent = roomData.name;
                    roomMembersCount.textContent = roomData.members ? roomData.members.length : 0;
                    
                    // Add user to room members if not already a member
                    if (!roomData.members || !roomData.members.includes(state.currentUser)) {
                        console.log('Adding user to room members...');
                        db.collection('rooms').doc(roomId).update({
                            members: firebase.firestore.FieldValue.arrayUnion(state.currentUser)
                        });
                        
                        // Add system message
                        db.collection('rooms').doc(roomId).collection('messages').add({
                            type: 'system',
                            text: `${state.currentUserData.username} joined the room`,
                            createdAt: firebase.firestore.FieldValue.serverTimestamp()
                        });
                    }
                    
                    // Add room to user's recent rooms
                    db.collection('users').doc(state.currentUser).update({
                        recentRooms: firebase.firestore.FieldValue.arrayUnion(roomId)
                    });
                    
                    // Clear chat messages
                    chatMessages.innerHTML = '';
                    
                    // Show chat container
                    mainContainer.classList.add('hidden');
                    chatContainer.classList.remove('hidden');
                    
                    // Listen for room messages
                    if (state.unsubscribeListeners.roomMessages) {
                        state.unsubscribeListeners.roomMessages();
                    }
                    
                    state.unsubscribeListeners.roomMessages = db.collection('rooms').doc(roomId).collection('messages')
                        .orderBy('createdAt')
                        .onSnapshot(snapshot => {
                            console.log('Room messages snapshot received:', snapshot.docs.length, 'messages');
                            
                            // Get new messages
                            const changes = snapshot.docChanges();
                            
                            changes.forEach(change => {
                                if (change.type === 'added') {
                                    const message = change.doc.data();
                                    message.id = change.doc.id;
                                    
                                    // Create message element
                                    const messageElement = createMessageElement(message);
                                    chatMessages.appendChild(messageElement);
                                }
                            });
                            
                            // Scroll to bottom
                            chatMessages.scrollTop = chatMessages.scrollHeight;
                        }, error => {
                            console.error('Error listening for room messages:', error);
                        });
                    
                    // Listen for typing indicators
                    if (state.unsubscribeListeners.roomTyping) {
                        state.unsubscribeListeners.roomTyping();
                    }
                    
                    state.unsubscribeListeners.roomTyping = db.collection('rooms').doc(roomId).collection('typing')
                        .onSnapshot(snapshot => {
                            // Get typing users
                            const typingUsers = snapshot.docs
                                .filter(doc => doc.id !== state.currentUser)
                                .map(doc => doc.data().username);
                            
                            // Update typing indicator
                            if (typingUsers.length > 0) {
                                typingIndicator.textContent = typingUsers.join(', ') + ' is typing...';
                                typingIndicator.classList.remove('hidden');
                            } else {
                                typingIndicator.classList.add('hidden');
                            }
                        }, error => {
                            console.error('Error listening for typing indicators:', error);
                        });
                    
                    // Focus message input
                    messageInput.focus();
                }
            })
            .catch(error => {
                console.error('Error joining room:', error);
                alert('Error joining room: ' + error.message);
            });
    }
    
    // Start direct chat
    function startDirectChat(userId) {
        // Get chat ID (sorted user IDs)
        const users = [state.currentUser, userId].sort();
        const chatId = users.join('_');
        
        // Open direct chat
        openDirectChat(userId, chatId);
    }
    
    // Open direct chat
    function openDirectChat(userId, chatId) {
        // Set current chat
        state.currentChat = chatId;
        
        // Get user data from Firestore
        db.collection('users').doc(userId).get()
            .then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    
                    // Set user information
                    chatUserAvatar.src = userData.avatar;
                    chatUserName.textContent = userData.username;
                    
                    // Check if chat exists
                    return db.collection('chats').doc(chatId).get()
                        .then(chatDoc => {
                            if (!chatDoc.exists) {
                                // Create chat document
                                return db.collection('chats').doc(chatId).set({
                                    participants: [state.currentUser, userId],
                                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                                });
                            }
                        })
                        .then(() => {
                            // Clear direct chat messages
                            directChatMessages.innerHTML = '';
                            
                            // Show direct chat container
                            mainContainer.classList.add('hidden');
                            directChatContainer.classList.remove('hidden');
                            
                            // Listen for direct messages
                            if (state.unsubscribeListeners.directMessages) {
                                state.unsubscribeListeners.directMessages();
                            }
                            
                            state.unsubscribeListeners.directMessages = db.collection('chats').doc(chatId).collection('messages')
                                .orderBy('createdAt')
                                .onSnapshot(snapshot => {
                                    // Get new messages
                                    const changes = snapshot.docChanges();
                                    
                                    changes.forEach(change => {
                                        if (change.type === 'added') {
                                            const message = change.doc.data();
                                            message.id = change.doc.id;
                                            
                                            // Create message element
                                            const messageElement = createMessageElement(message, true);
                                            directChatMessages.appendChild(messageElement);
                                        }
                                    });
                                    
                                    // Scroll to bottom
                                    directChatMessages.scrollTop = directChatMessages.scrollHeight;
                                }, error => {
                                    console.error('Error listening for direct messages:', error);
                                });
                            
                            // Listen for typing indicators
                            if (state.unsubscribeListeners.directTyping) {
                                state.unsubscribeListeners.directTyping();
                            }
                            
                            state.unsubscribeListeners.directTyping = db.collection('chats').doc(chatId).collection('typing')
                                .onSnapshot(snapshot => {
                                    // Get typing users
                                    const typingUsers = snapshot.docs
                                        .filter(doc => doc.id !== state.currentUser)
                                        .map(doc => doc.data().username);
                                    
                                    // Update typing indicator
                                    if (typingUsers.length > 0) {
                                        directTypingIndicator.textContent = typingUsers.join(', ') + ' is typing...';
                                        directTypingIndicator.classList.remove('hidden');
                                    } else {
                                        directTypingIndicator.classList.add('hidden');
                                    }
                                }, error => {
                                    console.error('Error listening for typing indicators:', error);
                                });
                            
                            // Set view profile button data
                            viewProfileBtn.dataset.userid = userId;
                            
                            // Add event listener to view profile button
                            viewProfileBtn.addEventListener('click', function() {
                                viewUserProfile(userId);
                            });
                            
                            // Focus message input
                            directMessageInput.focus();
                        });
                }
            })
            .catch(error => {
                console.error('Error opening direct chat:', error);
                alert('Error opening direct chat: ' + error.message);
            });
    }
    
    // Send message
    function sendMessage() {
        const text = messageInput.value.trim();
        
        if (!text) {
            return;
        }
        
        // Create message object
        const message = {
            type: 'text',
            text: text,
            sender: state.currentUser,
            senderName: state.currentUserData.username,
            senderAvatar: state.currentUserData.avatar,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        // Add reply information if replying
        if (state.replyingTo) {
            message.replyTo = state.replyingTo.id;
            message.replyToText = state.replyingTo.text;
            message.replyToSender = state.replyingTo.sender;
            message.replyToSenderName = state.replyingTo.senderName;
        }
        
        // Add message to Firestore
        db.collection('rooms').doc(state.currentRoom).collection('messages').add(message)
            .then(() => {
                // Clear message input
                messageInput.value = '';
                
                // Clear reply
                state.replyingTo = null;
                replyContainer.classList.add('hidden');
                
                // Update room's updatedAt timestamp
                db.collection('rooms').doc(state.currentRoom).update({
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                
                // Clear typing status
                db.collection('rooms').doc(state.currentRoom).collection('typing').doc(state.currentUser).delete();
            })
            .catch(error => {
                console.error('Error sending message:', error);
                alert('Error sending message: ' + error.message);
            });
    }
    
    // Send direct message
    function sendDirectMessage() {
        const text = directMessageInput.value.trim();
        
        if (!text) {
            return;
        }
        
        // Create message object
        const message = {
            type: 'text',
            text: text,
            sender: state.currentUser,
            senderName: state.currentUserData.username,
            senderAvatar: state.currentUserData.avatar,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        // Add reply information if replying
        if (state.directReplyingTo) {
            message.replyTo = state.directReplyingTo.id;
            message.replyToText = state.directReplyingTo.text;
            message.replyToSender = state.directReplyingTo.sender;
            message.replyToSenderName = state.directReplyingTo.senderName;
        }
        
        // Add message to Firestore
        db.collection('chats').doc(state.currentChat).collection('messages').add(message)
            .then(() => {
                // Clear message input
                directMessageInput.value = '';
                
                // Clear reply
                state.directReplyingTo = null;
                directReplyContainer.classList.add('hidden');
                
                // Update chat's updatedAt timestamp
                db.collection('chats').doc(state.currentChat).update({
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                
                // Clear typing status
                db.collection('chats').doc(state.currentChat).collection('typing').doc(state.currentUser).delete();
            })
            .catch(error => {
                console.error('Error sending direct message:', error);
                alert('Error sending direct message: ' + error.message);
            });
    }
    
    // Handle file upload
    function handleFileUpload(file) {
        // Create storage reference
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`rooms/${state.currentRoom}/${Date.now()}_${file.name}`);
        
        // Upload file
        fileRef.put(file)
            .then(snapshot => {
                return snapshot.ref.getDownloadURL();
            })
            .then(downloadURL => {
                // Create message object
                const message = {
                    type: 'text',
                    text: '',
                    sender: state.currentUser,
                    senderName: state.currentUserData.username,
                    senderAvatar: state.currentUserData.avatar,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                };
                
                // Add file information
                if (file.type.startsWith('image/')) {
                    message.image = downloadURL;
                } else {
                    message.file = downloadURL;
                    message.fileName = file.name;
                }
                
                // Add message to Firestore
                return db.collection('rooms').doc(state.currentRoom).collection('messages').add(message);
            })
            .then(() => {
                // Update room's updatedAt timestamp
                db.collection('rooms').doc(state.currentRoom).update({
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            })
            .catch(error => {
                console.error('Error uploading file:', error);
                alert('Error uploading file: ' + error.message);
            });
    }
    
    // Handle direct file upload
    function handleDirectFileUpload(file) {
        // Create storage reference
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`chats/${state.currentChat}/${Date.now()}_${file.name}`);
        
        // Upload file
        fileRef.put(file)
            .then(snapshot => {
                return snapshot.ref.getDownloadURL();
            })
            .then(downloadURL => {
                // Create message object
                const message = {
                    type: 'text',
                    text: '',
                    sender: state.currentUser,
                    senderName: state.currentUserData.username,
                    senderAvatar: state.currentUserData.avatar,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                };
                
                // Add file information
                if (file.type.startsWith('image/')) {
                    message.image = downloadURL;
                } else {
                    message.file = downloadURL;
                    message.fileName = file.name;
                }
                
                // Add message to Firestore
                return db.collection('chats').doc(state.currentChat).collection('messages').add(message);
            })
            .then(() => {
                // Update chat's updatedAt timestamp
                db.collection('chats').doc(state.currentChat).update({
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            })
            .catch(error => {
                console.error('Error uploading file:', error);
                alert('Error uploading file: ' + error.message);
            });
    }
    
    // Upload profile image
    function uploadProfileImage(file, type) {
        // Create storage reference
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`users/${state.currentUser}/${type}_${Date.now()}`);
        
        // Upload file
        fileRef.put(file)
            .then(snapshot => {
                return snapshot.ref.getDownloadURL();
            })
            .then(downloadURL => {
                // Update user data in Firestore
                const updateData = {};
                updateData[type] = downloadURL;
                
                return db.collection('users').doc(state.currentUser).update(updateData);
            })
            .then(() => {
                // Update local user data
                state.currentUserData[type] = downloadURL;
                
                // Update profile display
                if (type === 'avatar') {
                    profileAvatarImg.src = downloadURL;
                }
            })
            .catch(error => {
                console.error('Error uploading profile image:', error);
                alert('Error uploading profile image: ' + error.message);
            });
    }
    
    // Toggle follow
    function toggleFollow(userId) {
        // Get user data
        db.collection('users').doc(userId).get()
            .then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    
                    // Check if already following
                    const isFollowing = state.currentUserData.following && state.currentUserData.following.includes(userId);
                    
                    if (isFollowing) {
                        // Unfollow user
                        return db.collection('users').doc(state.currentUser).update({
                            following: firebase.firestore.FieldValue.arrayRemove(userId)
                        })
                        .then(() => {
                            // Remove from other user's followers
                            return db.collection('users').doc(userId).update({
                                followers: firebase.firestore.FieldValue.arrayRemove(state.currentUser)
                            });
                        })
                        .then(() => {
                            // Update local user data
                            if (state.currentUserData.following) {
                                state.currentUserData.following = state.currentUserData.following.filter(id => id !== userId);
                            }
                        });
                    } else {
                        // Follow user
                        return db.collection('users').doc(state.currentUser).update({
                            following: firebase.firestore.FieldValue.arrayUnion(userId)
                        })
                        .then(() => {
                            // Add to other user's followers
                            return db.collection('users').doc(userId).update({
                                followers: firebase.firestore.FieldValue.arrayUnion(state.currentUser)
                            });
                        })
                        .then(() => {
                            // Update local user data
                            if (!state.currentUserData.following) {
                                state.currentUserData.following = [];
                            }
                            state.currentUserData.following.push(userId);
                            
                            // Add notification for other user
                            return db.collection('users').doc(userId).collection('notifications').add({
                                type: 'follow',
                                fromUser: state.currentUser,
                                read: false,
                                createdAt: firebase.firestore.FieldValue.serverTimestamp()
                            });
                        });
                    }
                }
            })
            .catch(error => {
                console.error('Error toggling follow:', error);
                alert('Error toggling follow: ' + error.message);
            });
    }
    
    // Update follow button
    function updateFollowButton(button, userId) {
        // Check if already following
        const isFollowing = state.currentUserData.following && state.currentUserData.following.includes(userId);
        
        if (isFollowing) {
            button.textContent = 'Following';
            button.classList.add('following');
        } else {
            button.textContent = 'Follow';
            button.classList.remove('following');
        }
    }
    
    // Update rooms list
    function updateRoomsList(roomsData) {
        // Update rooms in messages section
        if (roomsList) {
            // Get user's recent rooms
            const userRooms = state.currentUserData ? state.currentUserData.recentRooms || [] : [];
            
            // Filter rooms that user is a member of
            const userRoomsData = roomsData.filter(room => 
                userRooms.includes(room.id) || 
                (room.members && room.members.includes(state.currentUser))
            );
            
            // Update user's recent rooms if needed
            if (state.currentUserData) {
                const newRecentRooms = userRoomsData.map(room => room.id);
                if (JSON.stringify(newRecentRooms.sort()) !== JSON.stringify(userRooms.sort())) {
                    db.collection('users').doc(state.currentUser).update({
                        recentRooms: newRecentRooms
                    });
                    
                    // Update local user data
                    state.currentUserData.recentRooms = newRecentRooms;
                }
            }
        }
    }
    
    // Format time
    function formatTime(date) {
        const now = new Date();
        const diff = now - date;
        
        // Less than a minute
        if (diff < 60000) {
            return 'Just now';
        }
        
        // Less than an hour
        if (diff < 3600000) {
            const minutes = Math.floor(diff / 60000);
            return `${minutes}m ago`;
        }
        
        // Less than a day
        if (diff < 86400000) {
            const hours = Math.floor(diff / 3600000);
            return `${hours}h ago`;
        }
        
        // Less than a week
        if (diff < 604800000) {
            const days = Math.floor(diff / 86400000);
            return `${days}d ago`;
        }
        
        // Format date
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    
    // Initialize the app
    init();
});
