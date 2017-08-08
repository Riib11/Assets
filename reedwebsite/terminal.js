var active = false

function interpret(event) {
    var input = document.getElementById('input')
    var input_text = input.value
    if(event && event.keyCode == 13 && !active && input_text != "") {
        active = true;

        var input = document.getElementById('input')
        var shadow = document.getElementById('input-shadow')
        input.value = ""

        shadow.innerText = input_text
        var t = 25, l = 10, o = 1.0
        function setValues(top,left,opacity) {
            shadow.style.top = String(top) + "px"
            shadow.style.left = String(left) + "px"
            shadow.style.opacity = String(opacity)
        }

        var interval = setInterval(update,10)

        function update() {
            if(o >= 0) {
                setValues(t,l,o)
                t += 1
                o -= 0.02
            } else {
                clearInterval(interval)
                process(input_text)
                active = false
            }
        }
    }

    var console = document.getElementById('console')

    function process(txt) {
        if(txt == "ls") {
            console.innerHTML = "<div id='links'><div class='menuitem'><a href='https://people.reed.edu/~blancheh/terminal.html'>Terminal</a></div><div class='menuitem'><a href='https://people.reed.edu/~blancheh/forum/redirect.html'>Forum</a></div><div class='menuitem'><a href='https://github.com/Riib11'>Github</a></div><div class='menuitem'><a href='explodingcat.html'>Exploding Cat</a></div>            <div class='menuitem'><a href='webaudiotest.html'>Music Generator</a></div>            <div class='menuitem'><a href='http://riibfeed.blogspot.com'>Writings</a></div>            <div class='menuitem'><a href='https://sites.google.com/site/riibfeed/'>Old Writings</a></div>            <div class='menuitem'><a href='https://henryspoetry.tumblr.com'>Henry's Poetry</a></div>            <br>            <div class='menuitem'><a href='archives.html'>Archives</a></div></div>"
            console.style.opacity = "1.0"
        }
    }
}