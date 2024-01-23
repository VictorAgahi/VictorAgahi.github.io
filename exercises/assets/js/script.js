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
