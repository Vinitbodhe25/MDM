const buttons = document.querySelectorAll("#products button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.innerText === "Add to Cart") {

            button.innerText = "Added ✓";
            button.classList.remove("bg-indigo-600");
            button.classList.add("bg-green-600");

        } else {

            button.innerText = "Add to Cart";
            button.classList.remove("bg-green-600");
            button.classList.add("bg-indigo-600");

        }

    });

});