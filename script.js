         // Global variables
      /*  let currentUser = '';
        let messages = [];
        let users = [];
        let isTyping = false;
        let typingTimeout;

        // Auto messages from website
        const autoMessages = [
            "🎉 Welcome to the group chat!",
            "💫 Chat with all your friends here",
            "🌟 Waiting for new messages...",
            "🚀 Enjoy chatting!",
            "💖 Spread love and positivity"
        ];

        // Initialize
        window.onload = function() {
            loadMessages();
            loadUsers();
            startAutoMessages();
            setInterval(checkForUpdates, 1000);
        };

        function joinChat() {
            const username = document.getElementById('usernameInput').value.trim();
            if (username === '') {
                alert('Please enter your name!');
                return;
            }

            currentUser = username;
            addUser(username);

            document.getElementById('joinScreen').style.display = 'none';
            document.getElementById('chatHeader').style.display = 'block';
            document.getElementById('chatMessages').style.display = 'block';
            document.getElementById('chatInput').style.display = 'flex';

            addSystemMessage(username + ' joined the chat! 🎉');

            // Enable enter key for sending messages
            document.getElementById('messageInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
                handleTyping();
            });
        }

        function sendMessage() {
            const messageText = document.getElementById('messageInput').value.trim();
            if (messageText === '' || currentUser === '') return;

            const message = {
                id: Date.now(),
                user: currentUser,
                text: messageText,
                timestamp: new Date().toLocaleTimeString('hi-IN'),
                type: 'user'
            };

            addMessage(message);
            document.getElementById('messageInput').value = '';
            stopTyping();
        }

        function addMessage(message) {
            messages.push(message);
            saveMessages();
            displayMessage(message);
            scrollToBottom();
        }

        function displayMessage(message) {
            const messagesDiv = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = message.user === currentUser ? 'message own' : 'message other';

            if (message.type === 'system') {
                messageDiv.innerHTML = `<div class="system-message">${message.text}</div>`;
            } else if (message.type === 'auto') {
                messageDiv.innerHTML = `
                    <div class="message-info">🤖 Website</div>
                    <div class="message-bubble">${message.text}</div>
                `;
            } else {
                messageDiv.innerHTML = `
                    <div class="message-info">${message.user} • ${message.timestamp}</div>
                    <div class="message-bubble">${message.text}</div>
                `;
            }

            messagesDiv.appendChild(messageDiv);
        }

        function addSystemMessage(text) {
            const message = {
                id: Date.now(),
                text: text,
                timestamp: new Date().toLocaleTimeString('hi-IN'),
                type: 'system'
            };
            addMessage(message);
        }

        function addAutoMessage() {
            const randomMessage = autoMessages[Math.floor(Math.random() * autoMessages.length)];
            const message = {
                id: Date.now(),
                user: 'Website',
                text: randomMessage,
                timestamp: new Date().toLocaleTimeString('hi-IN'),
                type: 'auto'
            };
            addMessage(message);
        }

        function startAutoMessages() {
            // Send auto message every 30 seconds
            setInterval(() => {
                if (Math.random() < 0.3) { // 30% chance
                    addAutoMessage();
                }
            }, 30000);
        }

        function addUser(username) {
            if (!users.includes(username)) {
                users.push(username);
                saveUsers();
                updateOnlineUsers();
            }
        }

        function updateOnlineUsers() {
            const onlineDiv = document.getElementById('onlineUsers');
            onlineDiv.textContent = `${users.length} users online: ${users.join(', ')}`;
        }

        function handleTyping() {
            if (!isTyping) {
                isTyping = true;
                showTyping(currentUser + ' is typing...');
            }

            clearTimeout(typingTimeout);
            typingTimeout = setTimeout(stopTyping, 2000);
        }

        function showTyping(text) {
            const typingDiv = document.getElementById('typingIndicator');
            typingDiv.textContent = text;
            typingDiv.style.display = 'block';
        }

        function stopTyping() {
            isTyping = false;
            document.getElementById('typingIndicator').style.display = 'none';
        }

        function addEmoji(emoji) {
            const input = document.getElementById('messageInput');
            input.value += emoji;
            input.focus();
        }

        function scrollToBottom() {
            const messagesDiv = document.getElementById('chatMessages');
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }

        function checkForUpdates() {
            const savedMessages = JSON.parse(localStorage.getItem('groupChatMessages') || '[]');
            const savedUsers = JSON.parse(localStorage.getItem('groupChatUsers') || '[]');

            // Check for new messages
            if (savedMessages.length > messages.length) {
                const newMessages = savedMessages.slice(messages.length);
                newMessages.forEach(message => {
                    messages.push(message);
                    displayMessage(message);
                });
                scrollToBottom();
            }

            // Check for new users
            if (savedUsers.length !== users.length) {
                users = [...savedUsers];
                updateOnlineUsers();
            }
        }

        function saveMessages() {
            localStorage.setItem('groupChatMessages', JSON.stringify(messages));
        }

        function loadMessages() {
            const saved = localStorage.getItem('groupChatMessages');
            if (saved) {
                messages = JSON.parse(saved);
                messages.forEach(displayMessage);
                scrollToBottom();
            }
        }

        function saveUsers() {
            localStorage.setItem('groupChatUsers', JSON.stringify(users));
        }

        function loadUsers() {
            const saved = localStorage.getItem('groupChatUsers');
            if (saved) {
                users = JSON.parse(saved);
                updateOnlineUsers();
            }
        } */