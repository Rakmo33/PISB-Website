document.addEventListener('DOMContentLoaded', () => {

    // Grab the current date
    var currentDate = new Date();

    // Set some date in the future. (e.g. 5 , 2 means 6th month 2nd day )
    var futureDate = new Date(currentDate.getFullYear(), 9, 5);

    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;


    // Unix timestamp (in seconds) to count down to
    // var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
    var twoDaysFromNow = (new Date().getTime() / 1000) + diff;

    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow)

        // Start the countdown
        .start()

        // Do something when the countdown ends
        .ifEnded(() => {
            console.log('The countdown has ended!');
            $('#wallstreet-modal').modal('hide');
            document.body.removeChild(document.getElementById("wallstreet-modal"));

        });


});