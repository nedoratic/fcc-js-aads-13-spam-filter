// DOM Elements Variables
const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');

// Is Spam Function
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
