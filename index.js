// DOM Elements Variables
const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');

// Help
const helpRegex = /please help|assist me/i;

// Dollar
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;

// Free
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

// Is Spam Function
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

// Event Listener
checkMessageButton.addEventListener('click', () => {
	if (messageInput.value === '') {
		alert('Please enter a message.');
		return;
	}
	result.textContent = isSpam(messageInput.value) ? 'Oh no! This looks like a spam message.' : 'This message does not seem to contain any spam.';
	messageInput.value = '';
});
