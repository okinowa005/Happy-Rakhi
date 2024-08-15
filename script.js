document.getElementById('main-image').addEventListener('click', function() {
    this.src = 'rakhi.jpg'; // Update this with the actual rakhi image path
    setTimeout(function() {
        document.getElementById('main-image').classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
    }, 10000); // 5 seconds delay
});
