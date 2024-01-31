function lockedProfile() {
    const profilesReff = document.querySelectorAll('.profile');
    for (let user of profilesReff) {
        const userBtnReff = user.querySelector('button');
        userBtnReff.addEventListener('click', function () {
            
            const userHiddenFieldsReff = user.querySelector('div');
            const isLock = user.querySelector('input').checked;
            if (isLock) {
                return
            }
            if (userBtnReff.textContent == 'Show more') {
                userHiddenFieldsReff.style.display = 'block';
                userBtnReff.textContent = "Hide it";
            } else {
                userHiddenFieldsReff.style.display = 'none';
                userBtnReff.textContent = "Show more";
            }



        })

    }
    // const username1Reff = profilesReff[0];
    // const username2Reff = profilesReff[1];
    // const username3Reff = profilesReff[2];

    // const user1ButnReff = username1Reff.querySelector('button');
    // const user2ButnReff = username2Reff.querySelector('button');
    // const user3ButnReff = username3Reff.querySelector('button');

    // user1ButnReff.addEventListener('click', function () {
    //     let isLock = username1Reff.querySelector('[name="user1Locked"]').checked;
    //     if (isLock) {
    //         return
    //     }
    //     if (user1ButnReff.textContent == 'Show more') {
    //         document.getElementById('user1HiddenFields').style.display = 'block';
    //         user1ButnReff.textContent = "Hide it";
    //     } else {
    //         document.getElementById('user1HiddenFields').style.display = 'none';
    //         user1ButnReff.textContent = "Show more";
    //     }



}