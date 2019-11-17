
/**
 * 
 * SlideToggle function in Vanilla Javascript
 * 
 * @link   https://walkerspider.com/plugins/ws-slide
 * @author Alexandre Buleté.
 * @since  05.15.19
 */

/**
 * Main Function | Put in window scope
 * To use it
 * 
 * @param {Element} event : trigger element | ex: document.querySelector('.btn')
 * @param {Element} elem  : element to slideToggle | ex: document.querySelector('.wrap-content')
 * @param {Integer} speed : speed animation (optional) (in ms) | default 200ms
 * @param {Function} callback : to add parts of code inside the click event
 */
window.slideToggle = function(event, elem, speed = 200, callback = null) {

    // Set style overflow:hidden to the element
    elem.style.overflow = 'hidden';

    event.addEventListener('click', ()=> {
        toggleAnimation(elem, speed);

        if ( callback ) {
            callback();
        }
    });

}

/**
 * Toggle the slide animation
 * @param {Element} elem 
 * @param {Integer} speed 
 */
function toggleAnimation(elem, speed) {
    // Initialize values
    let interval = 1;
    let intval = null;
    let initHeight = getHeight(elem);
    window.clearInterval(intval);

    // Check if the element is closed
    (elem.offsetHeight === 0) ? elem.classList.remove('close') : elem.classList.add('close')

    // If is closed
    if( elem.classList.contains('close') ) {
        let h = initHeight;

        // Get the dist (px) per ms
        let dist = (initHeight * interval) / speed;

        intval = setInterval(()=>{
            h -= dist;
            elem.style.height = `${h}px`;
            if(h <= 0) {
                window.clearInterval(intval);
            } 
            if(h - dist <= dist) {
                elem.style.height = '0px';
                window.clearInterval(intval);
            }
        }, interval);
    }
    // If is opened
    else {
        let h = 0;
        // Get the dist (px) per ms
        let dist = (initHeight * interval) / speed;

        intval = setInterval(()=>{
            h+=dist;
            elem.style.height = `${h}px`;
            if(h >= initHeight) {
                window.clearInterval(intval);
            } 
            if(initHeight - h <= dist) {
                elem.style.height = `${initHeight}px`;
            }
        }, interval);
    }
}

/**
 * Calcul the height of each children (height + margin) and collapse margins
 * @param {Element} elem Element to slideToggle
 * @return {Integer} Return the height of all child elements
 */
function getHeight(elem) {

    // If element is closed => Calculate the height
    if ( elem.offsetHeight === 0 ) {
        let height = 0;
        let children = elem.children;
        for (let i = 0; i < children.length; i++) {
            let style = window.getComputedStyle(children[i]);

            // Get margin-top and margin-bottom
            let margin_top = removeUnitAndParse( style.getPropertyValue('margin-top') );
            let margin_bottom = removeUnitAndParse( style.getPropertyValue('margin-bottom') );
            
            // Collapse margins
            if ( children[i-1] ) {
                let prev_margin_b = removeUnitAndParse( window.getComputedStyle(children[i-1]).getPropertyValue('margin-bottom') );
                if ( prev_margin_b > 0 ) {
                    margin_top = 0;
                }
            }

            height += children[i].offsetHeight + margin_top + margin_bottom;
        }
        return height;   
    } 
    // Else if openned just return height
    else {
        return elem.offsetHeight;
    }
}

/**
 * Remove all strings (like unit) and parse it | ex: from '12.5px' to 12.5
 * @param {String} str value in string | ex: '12px' 
 * @return {Integer or Float} nbr
 */
function removeUnitAndParse(str) {
    let parse = 'parseInt';
    if ( str.match('.') ) { parse = 'parseFloat'; }
    let nbr = str.match(/[+-]?\d+(?:\.\d+)?/g);
    // /[+-]?       : get + or -
    // \d+          : get numbers
    // (?:\.\d+)?   : get dot (for decimals)
    // g            : get all matches
    switch (parse) {
        case 'parseInt':
            nbr = parseInt(nbr);
            break;
        case 'parseFloat' :
            nbr = parseFloat(nbr);
            break;
    }
    return nbr;
}
