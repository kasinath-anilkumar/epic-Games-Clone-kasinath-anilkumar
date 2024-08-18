document.querySelectorAll('.b-image').forEach(img => {
    img.addEventListener('mouseover', function() {
        document.querySelectorAll('.b-image').forEach(otherImg => {
            if (otherImg !== img) {
                otherImg.classList.add('other');
            }
        });
        img.classList.add('hovered');
    });

    img.addEventListener('mouseout', function() {
        document.querySelectorAll('.b-image').forEach(otherImg => {
            otherImg.classList.remove('other');
        });
        img.classList.remove('hovered');
    });
});

function buyNow(){
    alert("Purchased Sucessfully")
}
function cartAdded(){
    alert("Item Added to cart")
}