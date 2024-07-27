var animationDownObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show-down");
        }
        else {
            entry.target.classList.remove("show-down");
        }
    });
});
var hiddenAnimationDownElements = document.querySelectorAll(".hide-down");
hiddenAnimationDownElements.forEach(function (el) { return animationDownObserver.observe(el); });


