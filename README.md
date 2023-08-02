# Node.js-and-Express-Site
 
 `custom.css` File
* I created a new css file (custom.css) and added it to the public folder in the static server route. I also linked that stylesheet onto the layout.pug template. 
The styling changes include: 
* adding text shadow to titles on home page, about me page, and project pages.
* adding a box-shadow on each project image on the home page.
* adding a transition on hover on each project div on the home page.
* adding a rounded box around the navigation `back` links, as well as a background change on hover.
* adding a background and text color change on the `learn more` link on mouse hover.
* adding a background and text color change on the `btn-link` links.
*

CHANGES TO `styles.css`
* In the `.about-bio p`, I changed the `padding-top` from 40px to 10px to reduce the spacing between `p` tags. 
* In the `.cell` class, I added a `transition: 0.3s` in order to make the `div` float on hover. The transition itself is located on `custom.css` in `.cell:hover`.