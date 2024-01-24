const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
           entry.target.classList.add("reveal-p-visible")
        }
        else
        {
            entry.target.classList.remove("reveal-p-visible")
        }
    });
});



const hiddenElement = document.querySelectorAll('.reveal-p');
hiddenElement.forEach((el)=>observer.observe(el));




const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-button1-visible")
        }
        else
        {
            entry.target.classList.remove("reveal-button1-visible")
        }
    });
});

const hidden_Page2 = document.querySelectorAll('.reveal-button1');
hidden_Page2.forEach((el)=>observer2.observe(el));