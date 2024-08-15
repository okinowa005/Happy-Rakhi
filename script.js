document.getElementById('main-image').addEventListener('click', function() {
    this.src = 'rakhi.jpg'; // Update this with the actual rakhi image path
    document.getElementById('second-text').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('main-image').classList.add('hidden');
        document.getElementById('second-text').classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
    }, 5000); // 5 seconds delay
});
