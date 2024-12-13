document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.add-to-cart');
    const quickViewButton = document.querySelector('.quick-view');
    const quickViewPopup = document.getElementById('quickViewPopup');
    const closePopup = document.querySelector('.close');
    const loadMoreReviewsButton = document.querySelector('.load-more-reviews');
    const addToCartButtons = document.querySelectorAll('.related-products .add-to-cart');
    const reviewForm = document.getElementById('review-form');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.querySelector('.main-image img');

    // Add to Cart Button
    addToCartButton.addEventListener('click', function () {
        alert('Product added to cart!');
    });

    // Quick View Button
    quickViewButton.addEventListener('click', function () {
        quickViewPopup.style.display = 'block';
    });

    // Close Quick View Popup
    closePopup.addEventListener('click', function () {
        quickViewPopup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == quickViewPopup) {
            quickViewPopup.style.display = 'none';
        }
    });

    // Load More Reviews Button
    loadMoreReviewsButton.addEventListener('click', function () {
        alert('Loading more reviews...');
        // Logic to load more reviews goes here
    });

    // Add to Cart Buttons for Related Products
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Related product added to cart!');
        });
    });

    // Review Form Submission
    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const reviewText = document.getElementById('review').value;

        const reviewSection = document.querySelector('.customer-reviews');
        const newReview = document.createElement('div');
        newReview.classList.add('review');

        newReview.innerHTML = `
            <div class="review-header">
                <strong>${name}</strong>
                <span>${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</span>
            </div>
            <p>${reviewText}</p>
        `;

        reviewSection.insertBefore(newReview, reviewForm);
        reviewForm.reset();
    });

    // Thumbnail Click to Change Main Image
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            mainImage.src = this.src;
        });
    });
});