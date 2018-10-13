const github = new Github;
const ui = new UI;
const searchInput = document.getElementById('searchUser');

// search input event listner
searchInput.addEventListener('keyup', (e) => {
    const userInput = e.target.value;
    if (userInput !== '') {
        console.log(e.target.value)
        github.userData(userInput)
            .then(response => {
                console.log(response.profile.message);
                if (response.profile.message !== undefined && response.profile.message === 'Not Found') {
                    ui.showAlert(response.profile.message, 'alert alert-danger');
                } else {
                    ui.showProfile(response.profile);
                }
            }
            );
    } else {
        ui.clearHTML();
    }
})