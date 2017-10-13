
$('form').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'text'             : $('input[name=text]').val(),
        };

        if (formData.text != '') {
        // process the form
        $.ajax({
            type        : 'GET', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://script.google.com/macros/s/AKfycbz0DmGk60hlgz_lmy9XmHTh24mmvZLs9cix-czBgfbdMAhHHOu3/exec', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
        })
            // using the done promise callback
            .done(function(data) {
                $('#error').hide();
                $('#text').html(formData.text);
                $('#text-box').val('');
                // log data to the console so we can see
                console.log(data);
                
                // here we will handle errors and validation messages
            })
            .fail(function(data) {
                const errorArray = data.responseJSON.errors;
                if (errorArray) {
                  console.log(errorArray);
                  $('#error').show();
                }
                // log data to the console so we can see
                console.log(data);

                // here we will handle errors and validation messages
            });

        };
        // stop the form from submitting the normal way and refreshing the page
       event.preventDefault();     
    });