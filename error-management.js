//Error Management

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Error Management in Javascript</title>
  </head>
  <body>
    <script>
        function siteComponent(func) {
            return func();
        }

        widget = () => {
            return '<div>HI there</div>'
        }
        try {
            console.log(siteComponent(widget));
        } catch(e) {
            console.log('An error occured with the siteComponent', e);
        }

       
    </script>
  </body>
</html>
<!---Can use try and catch blocks to catchh errors-->

//----------------------------------------------------------------

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Error Management in Javascript</title>
  </head>
  <body>
    <script>
        class DevcampError extends Error {
            constructor(msg = 'An error occured', params) {
                super(`${msg}\n ${params ? params : ""}`);

            }
        }

        function siteComponent(func) {
            return func();
        }

        try {
            console.log(siteComponent('opps'));
        } catch(e) {
           throw new DevcampError('DevcampError', e);
        }
        widget = () => {
            return '<div>HI there</div>';
        }
    </script>
  </body>
</html>

//Integrating Error Management into API Calls in JavaScript
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Error Management in Javascript</title>
  </head>
  <body>
    <script>
        class ApiError extends Error {
            constructor (...params) {
                super(params);
                this.msg = msg;
            }
        }
        var request = new XMLHttpRequest(); 

        request.open('GET', 'http://api.dailysmarty.com/poss', true)

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                console.log(data);
            } else {
                throw new ApiError('ApiError', 'An API error occured with a status code of 404')
            }
        }
        request.send();
    </script>
  </body>
</html>