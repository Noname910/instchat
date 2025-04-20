// Enhanced Chat Application JavaScript with Firebase Integration
document.addEventListener('DOMContentLoaded', function() {
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
        // Initialize emoji picker
        initEmojiPicker();
        
        // Set up auth state listener
        auth.onAuthStateChanged(user => {
            if (user) {
                // User is signed in
                state.currentUser = user.uid;
                
                // Get user data from Firestore
                getUserData(user.uid).then(userData => {
                    state.currentUserData = userData;
                    showMainContainer();
                    loadHomeSection();
                });
            } else {
                // User is signed out
                state.currentUser = null;
                state.currentUserData = null;
                showAuthContainer();
            }
        });
        
        // Create global room if it doesn't exist
        db.collection('rooms').doc('global').get().then(doc => {
            if (!doc.exists) {
                db.collection('rooms').doc('global').set({
                    id: 'global',
                    name: 'Global Room',
                    description: 'Chat with everyone in the global community',
                    type: 'public',
                    password: null,
                    creator: 'system',
                    members: [],
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
        });
        
        // Set up event listeners
        setupEventListeners();
    }
    
    // Get user data from Firestore
    async function getUserData(userId) {
        try {
            const doc = await db.collection('users').doc(userId).get();
            if (doc.exists) {
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
            const email = document.getElementById('login-username').value.trim() + '@instchat.com'; // Using username as email
            const password = document.getElementById('login-password').value;
            
            // Simple validation
            if (!email || !password) {
                alert('Please enter both username and password');
                return;
            }
            
            // Sign in with Firebase Auth
            auth.signInWithEmailAndPassword(email, password)
                .catch(error => {
                    console.error('Error signing in:', error);
                    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                        alert('Invalid username or password');
                    } else if (error.code === 'auth/configuration-not-found') {
                        alert('Authentication configuration error. Please try again later.');
                        console.error('Firebase configuration error. Make sure the domain is authorized in Firebase console.');
                    } else {
                        alert('Error signing in: ' + error.message);
                    }
                });
        });
        
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('signup-username').value.trim();
            const fullname = document.getElementById('signup-fullname').value.trim();
            const bio = document.getElementById('signup-bio').value.trim();
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            const email = username + '@instchat.com'; // Using username as email
            
            // Simple validation
            if (!username || !fullname || !password || !confirmPassword) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // Check if username already exists
            db.collection('users').where('username', '==', username).get()
                .then(snapshot => {
                    if (!snapshot.empty) {
                        alert('Username already taken');
                        return;
                    }
                    
        // Create user with Firebase Auth
                    auth.createUserWithEmailAndPassword(email, password)
                        .then(userCredential => {
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
                                alert('Authentication configuration error. Please try again later.');
                                console.error('Firebase configuration error. Make sure the domain is authorized in Firebase console.');
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
            
            // Check if room already exists
            db.collection('rooms').doc(roomId).get()
                .then(doc => {
                    if (doc.exists) {
                        alert('A room with this name already exists');
                        return;
                    }
                    
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
                    // Add room to user's rooms
                    return db.collection('users').doc(state.currentUser).update({
                        rooms: firebase.firestore.FieldValue.arrayUnion(roomId),
                        recentRooms: firebase.firestore.FieldValue.arrayUnion(roomId)
                    });
                })
                .then(() => {
                    // Add system message for room creation
                    return addSystemMessage(roomId, `${state.currentUserData.username} created this room`);
                })
                .then(() => {
                    // Close modal and refresh home section
                    hideModal(createRoomModal);
                    loadHomeSection();
                    
                    // Join the newly created room
                    joinRoom(roomId);
                })
                .catch(error => {
                    console.error('Error creating room:', error);
                    alert('Error creating room: ' + error.message);
                });
        });
        
        // Edit profile form event listener
        editProfileBtn.addEventListener('click', function() {
            // Populate form with current user data
            document.getElementById('edit-username').value = state.currentUserData.username;
            document.getElementById('edit-fullname').value = state.currentUserData.fullname;
            document.getElementById('edit-bio').value = state.currentUserData.bio;
            
            showModal(editProfileModal);
        });
        
        editProfileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('edit-username').value.trim();
            const fullname = document.getElementById('edit-fullname').value.trim();
            const bio = document.getElementById('edit-bio').value.trim();
            
            // Simple validation
            if (!username || !fullname) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Check if username is changed and already exists
            if (username !== state.currentUserData.username) {
                db.collection('users').where('username', '==', username).get()
                    .then(snapshot => {
                        if (!snapshot.empty) {
                            alert('Username already taken');
                            return Promise.reject('Username taken');
                        }
                        
                        // Update user data in Firestore
                        return db.collection('users').doc(state.currentUser).update({
                            username: username,
                            fullname: fullname,
                            bio: bio || 'No bio yet'
                        });
                    })
                    .then(() => {
                        // Update state
                        state.currentUserData.username = username;
                        state.currentUserData.fullname = fullname;
                        state.currentUserData.bio = bio || 'No bio yet';
                        
                        // Close modal and refresh profile section
                        hideModal(editProfileModal);
                        loadProfileSection();
                    })
                    .catch(error => {
                        if (error !== 'Username taken') {
                            console.error('Error updating profile:', error);
                            alert('Error updating profile: ' + error.message);
                        }
                    });
            } else {
                // Update user data in Firestore (username not changed)
                db.collection('users').doc(state.currentUser).update({
                    fullname: fullname,
                    bio: bio || 'No bio yet'
                })
                .then(() => {
                    // Update state
                    state.currentUserData.fullname = fullname;
                    state.currentUserData.bio = bio || 'No bio yet';
                    
                    // Close modal and refresh profile section
                    hideModal(editProfileModal);
                    loadProfileSection();
                })
                .catch(error => {
                    console.error('Error updating profile:', error);
                    alert('Error updating profile: ' + error.message);
                });
            }
        });
        
        // Avatar and cover photo upload
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
                    // Add system message for user joining
                    return addSystemMessage(roomId, `${state.currentUserData.username} joined the room`);
                })
                .then(() => {
                    // Hide modal and join room
                    hideModal(joinPrivateRoomModal);
                    joinRoom(roomId);
                })
                .catch(error => {
                    if (error !== 'Incorrect password' && error !== 'Room not found') {
                        console.error('Error joining private room:', error);
                        alert('Error joining room: ' + error.message);
                    }
                });
        });
        
        // Room info button event listener
        roomInfoBtn.addEventListener('click', function() {
            showRoomInfo();
        });
        
        // Back button event listeners
        backBtn.addEventListener('click', function() {
            // Unsubscribe from room messages listener
            if (state.unsubscribeListeners.roomMessages) {
                state.unsubscribeListeners.roomMessages();
                delete state.unsubscribeListeners.roomMessages;
            }
            
            chatContainer.classList.add('hidden');
            mainContainer.classList.remove('hidden');
            state.currentRoom = null;
            state.replyingTo = null;
            replyContainer.classList.add('hidden');
        });
        
        directBackBtn.addEventListener('click', function() {
            // Unsubscribe from direct messages listener
            if (state.unsubscribeListeners.directMessages) {
                state.unsubscribeListeners.directMessages();
                delete state.unsubscribeListeners.directMessages;
            }
            
            directChatContainer.classList.add('hidden');
            mainContainer.classList.remove('hidden');
            state.currentChat = null;
            state.directReplyingTo = null;
            directReplyContainer.classList.add('hidden');
        });
        
        userProfileBackBtn.addEventListener('click', function() {
            userProfileView.classList.add('hidden');
            if (directChatContainer.classList.contains('hidden')) {
                mainContainer.classList.remove('hidden');
            } else {
                directChatContainer.classList.remove('hidden');
            }
            state.viewingUser = null;
        });
        
        // View profile button event listener
        viewProfileBtn.addEventListener('click', function() {
            const userId = state.currentChat;
            viewUserProfile(userId);
        });
        
        // Message input event listeners
        messageInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            } else {
                // Show typing indicator to other users (simulated)
                showTypingIndicator();
            }
        });
        
        directMessageInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                sendDirectMessage();
            } else {
                // Show typing indicator to other user (simulated)
                showDirectTypingIndicator();
            }
        });
        
        // Send button event listeners
        sendBtn.addEventListener('click', sendMessage);
        directSendBtn.addEventListener('click', sendDirectMessage);
        
        // Reply button event listeners
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
                } else {
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
                } else {
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
                } else {
                    profileRooms.classList.add('hidden');
                    profileFollowing.classList.add('hidden');
                    profileFollowers.classList.remove('hidden');
                }
            });
        });
    }
    
    // Upload profile image (avatar or cover)
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
                // Update state and UI
                if (type === 'avatar') {
                    state.currentUserData.avatar = downloadURL;
                    profileAvatarImg.src = downloadURL;
                } else if (type === 'cover') {
                    state.currentUserData.cover = downloadURL;
                    // Update cover in UI if needed
                }
                
                alert(`${type.charAt(0).toUpperCase() + type.slice(1)} updated successfully!`);
            })
            .catch(error => {
                console.error(`Error uploading ${type}:`, error);
                alert(`Error uploading ${type}: ${error.message}`);
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
                                        
                                        return { userData, lastMessage, chatId: doc.id };
                                    });
                            }
                            return null;
                        });
                });
                
                return Promise.all(chatPromises);
            })
            .then(chatsData => {
                chatsData.forEach(data => {
                    if (data) {
                        const chatItem = createChatListItem(data.userData, data.lastMessage, data.chatId);
                        chatsList.appendChild(chatItem);
                    }
                });
                
                // Add event listeners to chat list items
                chatsList.querySelectorAll('.chat-list-item').forEach(item => {
                    item.addEventListener('click', function() {
                        const userId = this.dataset.userid;
                        startDirectChat(userId);
                    });
                });
            })
            .catch(error => {
                console.error('Error loading chats:', error);
            });
        
        // Get rooms from Firestore
        db.collection('users').doc(state.currentUser).get()
            .then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    const recentRooms = userData.recentRooms || [];
                    
                    // Get room data for each room
                    const roomPromises = recentRooms.map(roomId => {
                        return db.collection('rooms').doc(roomId).get()
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
                                            
                                            return { roomData, lastMessage };
                                        });
                                }
                                return null;
                            });
                    });
                    
                    return Promise.all(roomPromises);
                }
                return [];
            })
            .then(roomsData => {
                roomsData.forEach(data => {
                    if (data) {
                        const roomItem = createRoomListItem(data.roomData, data.lastMessage);
                        roomsList.appendChild(roomItem);
                    }
                });
                
                // Add event listeners to room list items
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
        // Clear notifications list
        const notificationsList = document.getElementById('notifications-list');
        notificationsList.innerHTML = '';
        
        // Get notifications from Firestore
        db.collection('users').doc(state.currentUser).collection('notifications')
            .orderBy('createdAt', 'desc')
            .get()
            .then(snapshot => {
                if (snapshot.empty) {
                    notificationsList.innerHTML = '<div class="empty-notifications">No notifications yet</div>';
                    return;
                }
                
                const notificationPromises = snapshot.docs.map(doc => {
                    const notificationData = doc.data();
                    
                    // Get user data for notification
                    if (notificationData.fromUserId) {
                        return db.collection('users').doc(notificationData.fromUserId).get()
                            .then(userDoc => {
                                if (userDoc.exists) {
                                    const userData = userDoc.data();
                                    return { ...notificationData, fromUser: userData, id: doc.id };
                                }
                                return null;
                            });
                    }
                    
                    return { ...notificationData, id: doc.id };
                });
                
                return Promise.all(notificationPromises);
            })
            .then(notificationsData => {
                notificationsData.forEach(data => {
                    if (data) {
                        const notificationItem = createNotificationItem(data);
                        notificationsList.appendChild(notificationItem);
                    }
                });
            })
            .catch(error => {
                console.error('Error loading notifications:', error);
            });
    }
    
    // Load profile section
    function loadProfileSection() {
        // Update profile information from state
        profileUsername.textContent = state.currentUserData.username;
        profileFullname.textContent = state.currentUserData.fullname;
        profileBio.textContent = state.currentUserData.bio;
        profileAvatarImg.src = state.currentUserData.avatar;
        
        // Get updated user data from Firestore
        db.collection('users').doc(state.currentUser).get()
            .then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    
                    // Update stats
                    followingCount.textContent = userData.following ? userData.following.length : 0;
                    followersCount.textContent = userData.followers ? userData.followers.length : 0;
                    roomsCount.textContent = userData.rooms ? userData.rooms.length : 0;
                    
                    // Clear profile content containers
                    profileRooms.innerHTML = '';
                    profileFollowing.innerHTML = '';
                    profileFollowers.innerHTML = '';
                    
                    // Get rooms data
                    const roomPromises = (userData.rooms || []).map(roomId => 
                        db.collection('rooms').doc(roomId).get()
                    );
                    
                    // Get following users data
                    const followingPromises = (userData.following || []).map(userId => 
                        db.collection('users').doc(userId).get()
                    );
                    
                    // Get followers data
                    const followerPromises = (userData.followers || []).map(userId => 
                        db.collection('users').doc(userId).get()
                    );
                    
                    // Process rooms
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
                            console.error('Error loading rooms:', error);
                        });
                    
                    // Process following users
                    Promise.all(followingPromises)
                        .then(userDocs => {
                            userDocs.forEach(doc => {
                                if (doc.exists) {
                                    const userData = doc.data();
                                    const userCard = createUserCard(userData);
                                    profileFollowing.appendChild(userCard);
                                }
                            });
                            
                            // Add event listeners
                            addUserCardEventListeners(profileFollowing);
                        })
                        .catch(error => {
                            console.error('Error loading following users:', error);
                        });
                    
                    // Process followers
                    Promise.all(followerPromises)
                        .then(userDocs => {
                            userDocs.forEach(doc => {
                                if (doc.exists) {
                                    const userData = doc.data();
                                    const userCard = createUserCard(userData);
                                    profileFollowers.appendChild(userCard);
                                }
                            });
                            
                            // Add event listeners
                            addUserCardEventListeners(profileFollowers);
                        })
                        .catch(error => {
                            console.error('Error loading followers:', error);
                        });
                }
            })
            .catch(error => {
                console.error('Error loading profile:', error);
            });
    }
    
    // Add event listeners to user cards
    function addUserCardEventListeners(container) {
        // Add event listeners to follow buttons
        container.querySelectorAll('.follow-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.dataset.userid;
                toggleFollow(userId);
                updateFollowButton(this, userId);
            });
        });
        
        // Add event listeners to message buttons
        container.querySelectorAll('.message-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.dataset.userid;
                startDirectChat(userId);
            });
        });
    }
    
    // View user profile
    function viewUserProfile(userId) {
        db.collection('users').doc(userId).get()
            .then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    state.viewingUser = userId;
                    
                    // Update profile information
                    userProfileUsername.textContent = userData.username;
                    userProfileFullname.textContent = userData.fullname;
                    userProfileBio.textContent = userData.bio;
                    userAvatarImg.src = userData.avatar;
                    
                    // Update stats
                    userFollowingCount.textContent = userData.following ? userData.following.length : 0;
                    userFollowersCount.textContent = userData.followers ? userData.followers.length : 0;
                    userRoomsCount.textContent = userData.rooms ? userData.rooms.length : 0;
                    
                    // Update follow button
                    if (state.currentUserData.following && state.currentUserData.following.includes(userId)) {
                        followUserBtn.textContent = 'Following';
                        followUserBtn.classList.add('following');
                    } else {
                        followUserBtn.textContent = 'Follow';
                        followUserBtn.classList.remove('following');
                    }
                    
                    // Set user ID for follow and message buttons
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
                this.textContent = 'Joined';
                this.disabled = true;
                
                // Mark notification as read
                db.collection('users').doc(state.currentUser).collection('notifications').doc(notification.id).update({
                    read: true
                });
            });
        }
        
        notificationItem.querySelector('.notification-time').textContent = formatTime(notification.createdAt.toDate());
        
        if (!notification.read) {
            notificationItem.classList.add('unread');
        }
        
        return notificationItem;
    }
    
    // Toggle follow
    function toggleFollow(userId) {
        // Check if already following
        const isFollowing = state.currentUserData.following && state.currentUserData.following.includes(userId);
        
        if (isFollowing) {
            // Unfollow user
            db.collection('users').doc(state.currentUser).update({
                following: firebase.firestore.FieldValue.arrayRemove(userId)
            });
            
            db.collection('users').doc(userId).update({
                followers: firebase.firestore.FieldValue.arrayRemove(state.currentUser)
            });
            
            // Update state
            if (state.currentUserData.following) {
                state.currentUserData.following = state.currentUserData.following.filter(id => id !== userId);
            }
        } else {
            // Follow user
            db.collection('users').doc(state.currentUser).update({
                following: firebase.firestore.FieldValue.arrayUnion(userId)
            });
            
            db.collection('users').doc(userId).update({
                followers: firebase.firestore.FieldValue.arrayUnion(state.currentUser)
            });
            
            // Add notification for the target user
            db.collection('users').doc(userId).collection('notifications').add({
                type: 'follow',
                fromUserId: state.currentUser,
                read: false,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            // Update state
            if (!state.currentUserData.following) {
                state.currentUserData.following = [];
            }
            state.currentUserData.following.push(userId);
        }
    }
    
    // Update follow button
    function updateFollowButton(button, userId) {
        const isFollowing = state.currentUserData.following && state.currentUserData.following.includes(userId);
        
        if (isFollowing) {
            button.textContent = 'Following';
            button.classList.add('following');
        } else {
            button.textContent = 'Follow';
            button.classList.remove('following');
        }
    }
    
    // Join a room
    function joinRoom(roomId) {
        // Check if room exists
        db.collection('rooms').doc(roomId).get()
            .then(doc => {
                if (!doc.exists) {
                    alert('Room not found');
                    return Promise.reject('Room not found');
                }
                
                // Set current room
                state.currentRoom = roomId;
                
                // Add user to room members if not already there
                const roomData = doc.data();
                if (!roomData.members || !roomData.members.includes(state.currentUser)) {
                    return db.collection('rooms').doc(roomId).update({
                        members: firebase.firestore.FieldValue.arrayUnion(state.currentUser)
                    });
                }
                
                return Promise.resolve();
            })
            .then(() => {
                // Add room to user's recent rooms
                return db.collection('users').doc(state.currentUser).update({
                    recentRooms: firebase.firestore.FieldValue.arrayUnion(roomId)
                });
            })
            .then(() => {
                // Update UI
                currentRoomName.textContent = roomId === 'global' ? 'Global Room' : roomId.replace(/_/g, ' ');
                updateMembersCount();
                
                // Load messages
                loadMessages();
                
                // Show chat container
                mainContainer.classList.add('hidden');
                chatContainer.classList.remove('hidden');
                
                // Focus on message input
                messageInput.focus();
            })
            .catch(error => {
                if (error !== 'Room not found') {
                    console.error('Error joining room:', error);
                    alert('Error joining room: ' + error.message);
                }
            });
    }
    
    // Start direct chat
    function startDirectChat(userId) {
        // Check if user exists
        db.collection('users').doc(userId).get()
            .then(doc => {
                if (!doc.exists) {
                    alert('User not found');
                    return Promise.reject('User not found');
                }
                
                // Set current chat
                state.currentChat = userId;
                
                // Create chat ID (sorted userIds to ensure consistency)
                const participants = [state.currentUser, userId].sort();
                const chatId = participants.join('_');
                
                // Check if chat exists, if not create it
                return db.collection('chats').doc(chatId).get()
                    .then(chatDoc => {
                        if (!chatDoc.exists) {
                            return db.collection('chats').doc(chatId).set({
                                id: chatId,
                                participants: participants,
                                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                            });
                        }
                        return Promise.resolve();
                    })
                    .then(() => {
                        // Get user data
                        const userData = doc.data();
                        
                        // Update UI
                        chatUserAvatar.src = userData.avatar;
                        chatUserName.textContent = userData.username;
                        chatUserStatus.textContent = 'Online'; // Simulated status
                        chatUserStatus.classList.add('online');
                        
                        // Load direct messages
                        loadDirectMessages(chatId);
                        
                        // Show direct chat container
                        mainContainer.classList.add('hidden');
                        directChatContainer.classList.remove('hidden');
                        
                        // Focus on message input
                        directMessageInput.focus();
                    });
            })
            .catch(error => {
                if (error !== 'User not found') {
                    console.error('Error starting direct chat:', error);
                    alert('Error starting chat: ' + error.message);
                }
            });
    }
    
    // Load messages for current room
    function loadMessages() {
        chatMessages.innerHTML = '';
        
        // Show loading indicator
        const loadingMessage = document.createElement('div');
        loadingMessage.classList.add('loading-messages');
        loadingMessage.textContent = 'Loading messages...';
        loadingMessage.style.textAlign = 'center';
        loadingMessage.style.color = 'var(--text-secondary)';
        loadingMessage.style.padding = '20px';
        chatMessages.appendChild(loadingMessage);
        
        // Set up real-time listener for messages
        const messagesRef = db.collection('rooms').doc(state.currentRoom).collection('messages')
            .orderBy('createdAt', 'asc');
        
        // Store the unsubscribe function
        state.unsubscribeListeners.roomMessages = messagesRef.onSnapshot(snapshot => {
            // Remove loading indicator
            chatMessages.innerHTML = '';
            
            if (snapshot.empty) {
                const emptyMessage = document.createElement('div');
                emptyMessage.classList.add('empty-messages');
                emptyMessage.textContent = 'No messages yet. Be the first to send a message!';
                emptyMessage.style.textAlign = 'center';
                emptyMessage.style.color = 'var(--text-secondary)';
                emptyMessage.style.padding = '20px';
                chatMessages.appendChild(emptyMessage);
                return;
            }
            
            snapshot.forEach(doc => {
                const messageData = doc.data();
                
                if (messageData.type === 'system') {
                    const systemMessage = document.createElement('div');
                    systemMessage.classList.add('system-message');
                    systemMessage.textContent = messageData.text;
                    systemMessage.style.textAlign = 'center';
                    systemMessage.style.color = 'var(--text-secondary)';
                    systemMessage.style.padding = '5px 0';
                    systemMessage.style.fontSize = '12px';
                    chatMessages.appendChild(systemMessage);
                } else {
                    addMessageToUI(messageData, doc.id);
                }
            });
            
            // Scroll to bottom
            scrollToBottom(chatMessages);
        }, error => {
            console.error('Error getting messages:', error);
            chatMessages.innerHTML = '<div class="error-messages">Error loading messages</div>';
        });
    }
    
    // Load direct messages for current chat
    function loadDirectMessages(chatId) {
        directChatMessages.innerHTML = '';
        
        // Show loading indicator
        const loadingMessage = document.createElement('div');
        loadingMessage.classList.add('loading-messages');
        loadingMessage.textContent = 'Loading messages...';
        loadingMessage.style.textAlign = 'center';
        loadingMessage.style.color = 'var(--text-secondary)';
        loadingMessage.style.padding = '20px';
        directChatMessages.appendChild(loadingMessage);
        
        // Create chat ID (sorted userIds to ensure consistency)
        const participants = [state.currentUser, state.currentChat].sort();
        chatId = chatId || participants.join('_');
        
        // Set up real-time listener for messages
        const messagesRef = db.collection('chats').doc(chatId).collection('messages')
            .orderBy('createdAt', 'asc');
        
        // Store the unsubscribe function
        state.unsubscribeListeners.directMessages = messagesRef.onSnapshot(snapshot => {
            // Remove loading indicator
            directChatMessages.innerHTML = '';
            
            if (snapshot.empty) {
                const emptyMessage = document.createElement('div');
                emptyMessage.classList.add('empty-messages');
                emptyMessage.textContent = 'No messages yet. Start a conversation!';
                emptyMessage.style.textAlign = 'center';
                emptyMessage.style.color = 'var(--text-secondary)';
                emptyMessage.style.padding = '20px';
                directChatMessages.appendChild(emptyMessage);
                return;
            }
            
            snapshot.forEach(doc => {
                const messageData = doc.data();
                addDirectMessageToUI(messageData, doc.id);
            });
            
            // Scroll to bottom
            scrollToBottom(directChatMessages);
        }, error => {
            console.error('Error getting direct messages:', error);
            directChatMessages.innerHTML = '<div class="error-messages">Error loading messages</div>';
        });
    }
    
    // Add message to UI
    function addMessageToUI(message, messageId) {
        // Clone message template
        const messageNode = document.importNode(messageTemplate.content, true);
        const messageElement = messageNode.querySelector('.message');
        messageElement.dataset.id = messageId;
        
        // Set message content
        const messageAvatar = messageNode.querySelector('.message-avatar img');
        const messageSender = messageNode.querySelector('.message-sender');
        const messageBody = messageNode.querySelector('.message-body');
        const messageTime = messageNode.querySelector('.message-time');
        const repliedMessage = messageNode.querySelector('.replied-message');
        const repliedContent = messageNode.querySelector('.replied-content');
        const messageMedia = messageNode.querySelector('.message-media');
        const messageImage = messageNode.querySelector('.message-image');
        const fileAttachment = messageNode.querySelector('.file-attachment');
        const fileName = messageNode.querySelector('.file-name');
        const downloadBtn = messageNode.querySelector('.download-btn');
        
        // Set avatar and sender name
        if (message.senderAvatar) {
            messageAvatar.src = message.senderAvatar;
        }
        messageSender.textContent = message.senderName;
        
        // Set message content
        messageBody.textContent = message.text;
        
        // Set time
        if (message.createdAt) {
            messageTime.textContent = formatTime(message.createdAt.toDate());
        } else {
            messageTime.textContent = 'Just now';
        }
        
        // Check if it's a reply
        if (message.replyTo) {
            repliedMessage.classList.remove('hidden');
            repliedContent.textContent = message.replyTo.text;
        }
        
        // Check if it has media
        if (message.media) {
            messageMedia.classList.remove('hidden');
            
            if (message.media.type === 'image') {
                messageImage.classList.remove('hidden');
                messageImage.src = message.media.url;
                
                // Add click event to show image preview
                messageImage.addEventListener('click', function() {
                    previewImage.src = message.media.url;
                    imagePreviewModal.classList.remove('hidden');
                });
            } else {
                fileAttachment.classList.remove('hidden');
                fileName.textContent = message.media.name;
                downloadBtn.href = message.media.url;
            }
        }
        
        // Check if it's the current user's message
        if (message.senderId === state.currentUser) {
            messageElement.classList.add('outgoing');
        }
        
        // Add reply functionality
        const replyBtn = messageNode.querySelector('.reply-btn');
        replyBtn.addEventListener('click', function() {
            state.replyingTo = {
                id: messageId,
                text: message.text,
                senderId: message.senderId,
                senderName: message.senderName
            };
            replyText.textContent = message.text;
            replyContainer.classList.remove('hidden');
            messageInput.focus();
        });
        
        // Add message to chat
        chatMessages.appendChild(messageNode);
    }
    
    // Add direct message to UI
    function addDirectMessageToUI(message, messageId) {
        // Clone message template
        const messageNode = document.importNode(messageTemplate.content, true);
        const messageElement = messageNode.querySelector('.message');
        messageElement.dataset.id = messageId;
        
        // Set message content
        const messageAvatar = messageNode.querySelector('.message-avatar img');
        const messageSender = messageNode.querySelector('.message-sender');
        const messageBody = messageNode.querySelector('.message-body');
        const messageTime = messageNode.querySelector('.message-time');
        const repliedMessage = messageNode.querySelector('.replied-message');
        const repliedContent = messageNode.querySelector('.replied-content');
        const messageMedia = messageNode.querySelector('.message-media');
        const messageImage = messageNode.querySelector('.message-image');
        const fileAttachment = messageNode.querySelector('.file-attachment');
        const fileName = messageNode.querySelector('.file-name');
        const downloadBtn = messageNode.querySelector('.download-btn');
        
        // Set avatar and sender name
        if (message.senderAvatar) {
            messageAvatar.src = message.senderAvatar;
        }
        messageSender.textContent = message.senderName;
        
        // Set message content
        messageBody.textContent = message.text;
        
        // Set time
        if (message.createdAt) {
            messageTime.textContent = formatTime(message.createdAt.toDate());
        } else {
            messageTime.textContent = 'Just now';
        }
        
        // Check if it's a reply
        if (message.replyTo) {
            repliedMessage.classList.remove('hidden');
            repliedContent.textContent = message.replyTo.text;
        }
        
        // Check if it has media
        if (message.media) {
            messageMedia.classList.remove('hidden');
            
            if (message.media.type === 'image') {
                messageImage.classList.remove('hidden');
                messageImage.src = message.media.url;
                
                // Add click event to show image preview
                messageImage.addEventListener('click', function() {
                    previewImage.src = message.media.url;
                    imagePreviewModal.classList.remove('hidden');
                });
            } else {
                fileAttachment.classList.remove('hidden');
                fileName.textContent = message.media.name;
                downloadBtn.href = message.media.url;
            }
        }
        
        // Check if it's the current user's message
        if (message.senderId === state.currentUser) {
            messageElement.classList.add('outgoing');
        }
        
        // Add reply functionality
        const replyBtn = messageNode.querySelector('.reply-btn');
        replyBtn.addEventListener('click', function() {
            state.directReplyingTo = {
                id: messageId,
                text: message.text,
                senderId: message.senderId,
                senderName: message.senderName
            };
            directReplyText.textContent = message.text;
            directReplyContainer.classList.remove('hidden');
            directMessageInput.focus();
        });
        
        // Add message to chat
        directChatMessages.appendChild(messageNode);
    }
    
    // Send message
    function sendMessage() {
        const text = messageInput.value.trim();
        if (!text) return;
        
        // Create message object
        const message = {
            senderId: state.currentUser,
            senderName: state.currentUserData.username,
            senderAvatar: state.currentUserData.avatar,
            text: text,
            type: 'user',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        // Check if it's a reply
        if (state.replyingTo) {
            message.replyTo = {
                id: state.replyingTo.id,
                text: state.replyingTo.text,
                senderId: state.replyingTo.senderId,
                senderName: state.replyingTo.senderName
            };
            
            // Reset reply state
            state.replyingTo = null;
            replyContainer.classList.add('hidden');
        }
        
        // Add message to Firestore
        db.collection('rooms').doc(state.currentRoom).collection('messages').add(message)
            .then(() => {
                // Clear input
                messageInput.value = '';
                
                // Clear typing indicator
                clearTimeout(state.typingTimeout);
                typingIndicator.classList.add('hidden');
                
                // Update room's updatedAt timestamp
                return db.collection('rooms').doc(state.currentRoom).update({
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            })
            .catch(error => {
                console.error('Error sending message:', error);
                alert('Error sending message: ' + error.message);
            });
    }
    
    // Send direct message
    function sendDirectMessage() {
        const text = directMessageInput.value.trim();
        if (!text) return;
        
        // Create chat ID (sorted userIds to ensure consistency)
        const participants = [state.currentUser, state.currentChat].sort();
        const chatId = participants.join('_');
        
        // Create message object
        const message = {
            senderId: state.currentUser,
            senderName: state.currentUserData.username,
            senderAvatar: state.currentUserData.avatar,
            text: text,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        // Check if it's a reply
        if (state.directReplyingTo) {
            message.replyTo = {
                id: state.directReplyingTo.id,
                text: state.directReplyingTo.text,
                senderId: state.directReplyingTo.senderId,
                senderName: state.directReplyingTo.senderName
            };
            
            // Reset reply state
            state.directReplyingTo = null;
            directReplyContainer.classList.add('hidden');
        }
        
        // Add message to Firestore
        db.collection('chats').doc(chatId).collection('messages').add(message)
            .then(() => {
                // Clear input
                directMessageInput.value = '';
                
                // Clear typing indicator
                clearTimeout(state.directTypingTimeout);
                directTypingIndicator.classList.add('hidden');
                
                // Update chat's updatedAt timestamp
                return db.collection('chats').doc(chatId).update({
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            })
            .catch(error => {
                console.error('Error sending direct message:', error);
                alert('Error sending message: ' + error.message);
            });
    }
    
    // Add system message
    function addSystemMessage(roomId, text) {
        const message = {
            text: text,
            type: 'system',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        // Add message to Firestore
        return db.collection('rooms').doc(roomId).collection('messages').add(message)
            .then(() => {
                // Update room's updatedAt timestamp
                return db.collection('rooms').doc(roomId).update({
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            })
            .catch(error => {
                console.error('Error adding system message:', error);
                return Promise.reject(error);
            });
    }
    
    // Show typing indicator
    function showTypingIndicator() {
        // Clear previous timeout
        clearTimeout(state.typingTimeout);
        
        // Show typing indicator
        typingIndicator.classList.remove('hidden');
        typingIndicator.querySelector('span').textContent = 'Someone is typing';
        
        // Set timeout to hide typing indicator after 2 seconds
        state.typingTimeout = setTimeout(function() {
            typingIndicator.classList.add('hidden');
        }, 2000);
    }
    
    // Show direct typing indicator
    function showDirectTypingIndicator() {
        // Clear previous timeout
        clearTimeout(state.directTypingTimeout);
        
        // Show typing indicator
        directTypingIndicator.classList.remove('hidden');
        directTypingIndicator.querySelector('span').textContent = `${state.currentUserData.username} is typing`;
        
        // Set timeout to hide typing indicator after 2 seconds
        state.directTypingTimeout = setTimeout(function() {
            directTypingIndicator.classList.add('hidden');
        }, 2000);
    }
    
    // Show room info
    function showRoomInfo() {
        db.collection('rooms').doc(state.currentRoom).get()
            .then(doc => {
                if (doc.exists) {
                    const roomData = doc.data();
                    
                    modalRoomName.textContent = roomData.name;
                    modalRoomDescription.querySelector('p').textContent = roomData.description;
                    
                    // Set room type badge
                    if (roomData.type === 'private') {
                        roomTypeBadge.textContent = 'Private';
                        roomTypeBadge.className = 'badge private';
                    } else {
                        roomTypeBadge.textContent = 'Public';
                        roomTypeBadge.className = 'badge public';
                    }
                    
                    // Update members list
                    roomMembersList.innerHTML = '';
                    
                    // Get user data for each member
                    const memberPromises = (roomData.members || []).map(memberId => 
                        db.collection('users').doc(memberId).get()
                    );
                    
                    Promise.all(memberPromises)
                        .then(memberDocs => {
                            memberDocs.forEach(memberDoc => {
                                if (memberDoc.exists) {
                                    const memberData = memberDoc.data();
                                    const memberItem = document.createElement('li');
                                    
                                    memberItem.innerHTML = `
                                        <div class="member-avatar">
                                            <img src="${memberData.avatar}" alt="${memberData.username}">
                                        </div>
                                        <div class="member-name">${memberData.username}</div>
                                        ${memberData.uid === roomData.creator ? '<div class="member-role admin">Admin</div>' : ''}
                                    `;
                                    
                                    roomMembersList.appendChild(memberItem);
                                }
                            });
                        })
                        .catch(error => {
                            console.error('Error getting room members:', error);
                        });
                    
                    // Show modal
                    showModal(roomInfoModal);
                }
            })
            .catch(error => {
                console.error('Error getting room info:', error);
            });
    }
    
    // Update members count
    function updateMembersCount() {
        db.collection('rooms').doc(state.currentRoom).get()
            .then(doc => {
                if (doc.exists) {
                    const roomData = doc.data();
                    const count = roomData.members ? roomData.members.length : 0;
                    roomMembersCount.textContent = count === 1 ? '1 member' : `${count} members`;
                }
            })
            .catch(error => {
                console.error('Error updating members count:', error);
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
                // Create message object with file
                const message = {
                    senderId: state.currentUser,
                    senderName: state.currentUserData.username,
                    senderAvatar: state.currentUserData.avatar,
                    text: file.type.startsWith('image/') ? 'Sent an image' : 'Sent a file',
                    type: 'user',
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    media: {
                        type: file.type.startsWith('image/') ? 'image' : 'file',
                        url: downloadURL,
                        name: file.name
                    }
                };
                
                // Check if it's a reply
                if (state.replyingTo) {
                    message.replyTo = {
                        id: state.replyingTo.id,
                        text: state.replyingTo.text,
                        senderId: state.replyingTo.senderId,
                        senderName: state.replyingTo.senderName
                    };
                    
                    // Reset reply state
                    state.replyingTo = null;
                    replyContainer.classList.add('hidden');
                }
                
                // Add message to Firestore
                return db.collection('rooms').doc(state.currentRoom).collection('messages').add(message);
            })
            .then(() => {
                // Update room's updatedAt timestamp
                return db.collection('rooms').doc(state.currentRoom).update({
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
        // Create chat ID (sorted userIds to ensure consistency)
        const participants = [state.currentUser, state.currentChat].sort();
        const chatId = participants.join('_');
        
        // Create storage reference
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`chats/${chatId}/${Date.now()}_${file.name}`);
        
        // Upload file
        fileRef.put(file)
            .then(snapshot => {
                return snapshot.ref.getDownloadURL();
            })
            .then(downloadURL => {
                // Create message object with file
                const message = {
                    senderId: state.currentUser,
                    senderName: state.currentUserData.username,
                    senderAvatar: state.currentUserData.avatar,
                    text: file.type.startsWith('image/') ? 'Sent an image' : 'Sent a file',
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    media: {
                        type: file.type.startsWith('image/') ? 'image' : 'file',
                        url: downloadURL,
                        name: file.name
                    }
                };
                
                // Check if it's a reply
                if (state.directReplyingTo) {
                    message.replyTo = {
                        id: state.directReplyingTo.id,
                        text: state.directReplyingTo.text,
                        senderId: state.directReplyingTo.senderId,
                        senderName: state.directReplyingTo.senderName
                    };
                    
                    // Reset reply state
                    state.directReplyingTo = null;
                    directReplyContainer.classList.add('hidden');
                }
                
                // Add message to Firestore
                return db.collection('chats').doc(chatId).collection('messages').add(message);
            })
            .then(() => {
                // Update chat's updatedAt timestamp
                return db.collection('chats').doc(chatId).update({
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            })
            .catch(error => {
                console.error('Error uploading file:', error);
                alert('Error uploading file: ' + error.message);
            });
    }
    
    // Format time
    function formatTime(date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    
    // Scroll chat to bottom
    function scrollToBottom(container) {
        container.scrollTop = container.scrollHeight;
    }
    
    // Initialize the app
    init();
});
