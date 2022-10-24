// function to load reviews from locally stored json file
function loadReviews() {
    var promise = $.ajax('./reviews.json');
    promise.done(function(data) {
        //loops through reviews and allocates each one to a pre defined html & css template
        for(var i=0; i<data.length; i++) {
            $('.customerTestimonial').append(
                   '<div class="testimonialImage">' + '<img src="' + data[i].image + '">' + '</div>' +
                   '<div>' + '<h5> TESTIMONIAL </H5>' + '<p class="testimonialReview">' + data[i].review + '</p>' + '<p class="testimonialName">' + data[i].name + '</p>' + '<p class="testimonialLocation">' + data[i].location + '</p>' + '</div>'

            )
        }
    })
}

//when page has fully loaded active page nav link is given an active state
$(document).ready(function () {
    if(window.location.href.indexOf('index.html')) {
        $('#navHome').addClass('navActive');
        $('#navHomeA').addClass('active');
    }
//load reviews function is called to display reviews on page when loaded
    loadReviews()
});