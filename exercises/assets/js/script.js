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

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-button2-visible")
        }
        else
        {
            entry.target.classList.remove("reveal-button2-visible")
        }
    });
});

const hidden_Page3 = document.querySelectorAll('.reveal-button2');
hidden_Page3.forEach((el)=>observer3.observe(el));


const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-button3-visible")
        }
        else
        {
            entry.target.classList.remove("reveal-button3-visible")
        }
    });
});

const hidden_Page4 = document.querySelectorAll('.reveal-button3');
hidden_Page4.forEach((el)=>observer4.observe(el));