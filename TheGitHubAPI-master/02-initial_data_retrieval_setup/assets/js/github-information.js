
// applies to github.html

//function for the function response userInformationHTML for rendering the information to the users

function userInformationHTML(user) {
    return`
    <h2>${user.name}
        <span class="small-name">
            (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
        </span>
        </h2>
        <div class="gh-content">
            <div class="gh-avatar">
                <a href="${user.html_url}" target="_blank">
                    <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}">
</a>
</div>
<p>Followers: ${user.followers} - Following: ${user.following} <br> Repos: ${user.public_repos}</p>
</div> `;
}

/* this function brings the user information and gives format to it at the same time */


//--------------------------------------


/* this java code is using string literals in which we need to change the java
 * version to react js  */

/* this code creates a function and uses jquery to access the elements in te html and check
 * their values and change its code */

/* in this case the variable username is assign to the element with id #gh-username and
 * it has a method .val() which converts this variable in a into an input form element  */

/* then we use a conditional statement for the case in which the form is empty */

/* then we call the element and modify its html code to show a gif animation after the we imput
  * a user name  */

function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();

    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

//now we will star retrieving the info from the API

// we will use promises to complete actions

/* in this case we get JSON and bring the username variable to get the content from the API
    then we have a function which will the response from the server and store it as the variable
     userData */
/* the #gh-user-data element then gets new html code from a function userInformationHTML(userData),
which will be created at the top of the page later on*/

/* the following function is an error response in which the status is checked and it has
a html code which will display a message for such ${username}*/
/*  */

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function (response) {
            var userData = response;
            $('#gh-user-data').html(userInformationHTML(userData));
        }, function (errorResponse) {
            if (errorResponse.status === 404){
                $('#gh-user-data').html(
                    `<h2>No info found for ${username}</h2>`);
            } else {
                console.log(errorResponse);
                $('#gh-user-data').html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });
}