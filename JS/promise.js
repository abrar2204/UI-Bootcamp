const showConfirmationButton = document.getElementById('confirmation-button');

showConfirmationButton.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    const confirm = document.getElementById('confirm-button');
    const cancel = document.getElementById('cancel-button');
    const input = document.getElementById('username');
 

    const confirmationPromise = () => new Promise((resolve, reject) => {
        let confirmClickHandler = () => {
            resolve({ data: input.value });  
            hideModal();
        };
    
        let cancelClickHandler = () => {
            reject({ message: "No values given" })
            hideModal();
        }
        const hideModal = ()=>{
            modal.style.display = 'none';
            input.value = "";
            confirm.removeEventListener('click',confirmClickHandler);
            cancel.removeEventListener('click',cancelClickHandler);
        }

        confirm.addEventListener('click',confirmClickHandler )
        cancel.addEventListener('click', cancelClickHandler)
    })

    confirmationPromise().then(res => { console.log(res.data) }).catch(err => { console.log(err.message) })
})