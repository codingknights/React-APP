
export default function LandingScript(){
        

        sign_up_btn.addEventListener('click', () => {
            container.classList.add("sign-up-mode");
        });

    sign_in_btn.addEventListener('click', () => {
        container.classList.remove("sign-up-mode");
    })
    
}