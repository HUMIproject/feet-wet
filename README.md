# feet-wet
Initial playground repo to get our feet wet with GitHub

Currently contains a minimal Firefox extension, which adds a red border around Facebook content when it is browsed in Firefox, and inserts "HUMI" before the Like button after posts in the Facebook feed.

###Installation

Please feel free to play around with the extension in Firefox.  To get it to run, take the following steps, as described [here] (https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension):

    Create a subdirectory called "fb1", and download the 3 files into it.
    In your browser address bar, type "about:debugging".
    Make sure the "Enable add-on debugging" box is checked.
    Click the "Load temporary add-on" button.  Navigate into the fb1 directory, and double-click on one of the files.
    HUMI should now appear in the list as a loaded add-on.
    Open facebook.com in a browser tab, and log into Facebook.
    The Facebook page should now have a red border, and the word "HUMI" should appear next to the first Like button.

You can look at the manifest.json file and the fb1.js file to see what it does.

Format for editing this file is text, with [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links) for fancier formatting.

###Known issues:

- does not add "HUMI" before all "Like" buttons
- this file should also instruct how to deactivate the Firefox extension


