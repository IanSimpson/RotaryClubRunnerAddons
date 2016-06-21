# RotaryClubRunnerAddons
These Addons add functionality and features to the standard Rotary ClubRunner Setup.

## Installation
There are four areas to set up in ClubRunner. Log in to the ClubRunner Back End and go to the "Website" tab and select "Website Designer" to get started.

### Theme
 1. Under "Themes" choose and activate *Rotary International Theme*

### CSS
 1. Save a copy of [RotaryClubRunnerAddonsImport.css](https://raw.githubusercontent.com/IanSimpson/RotaryClubRunnerAddons/master/RotaryClubRunnerAddonsImport.css) from this repository to your Desktop
 2. Under "Settings" choose the "Upload CSS" menu item
 3. Click on "Add CSS File"
 4. Choose the file you have just saved, and make sure you check "Make active" before saving.

### Javascript
 1. Under "Settings" choose the "Edit Meta Tags" menu item
 2. Click on "Add"
 3. Under "Meta tag type" choose "Custom"
 4. Paste `<script src="https://cdn.rawgit.com/IanSimpson/RotaryClubRunnerAddons/master/custom.js" defer></script>` into the "Custom String" box
 5. Save

### Header
 1. Under "Designer" click "Edit Banner"
 2. Click on "Add New Banner"
 3. Set "Banner Height" to 103px
 4. Upload your banner (size 716x103) to the "Left Logo" space
 5. Under "Banner Text", click the "Source" button and copy and paste `<div id="headerphone">0800 123 123</div>` (substituting in your number)
 6. "Save and Publish"

## Widgets
To add widgets, log in to the ClubRunner Back End and go to the "Website" tab and select "Website Content". Choose "Libraries" then "Global Custom Widgets".

 1. Add a new Widget
 2. Give it a relevant name
 3. Click the "Source" button in the editor and copy and paste the source code
 4. "Save and Publish"
You can now embed this widget anywhere in your site.
