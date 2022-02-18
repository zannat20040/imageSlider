let imgnumber = document.getElementsByTagName('img')
let bottombtn = document.querySelector('.slidingbtn').children;
var i = 0;
bottombtn[i].classList.add('bottombtn');


function forwardImgShow() {

    if (window.getComputedStyle(imgnumber[i]).display === "block" && i != imgnumber.length - 1) {

        imgnumber[i].style.display = 'none';
        bottombtn[i].classList.remove('bottombtn');
        imgnumber[i + 1].style.display = 'block';
        bottombtn[i + 1].classList.add('bottombtn');
        i++;
        console.log('1st condition ' + i);

    }
    else {
        i = 0;
        imgnumber[i].style.display = 'block';
        bottombtn[i].classList.add('bottombtn');
        imgnumber[imgnumber.length - 1].style.display = 'none';
        bottombtn[imgnumber.length - 1].classList.remove('bottombtn');
        console.log('2nd condition ' + i);

    }


}


function reverseImgShow() {
    console.log('click')
    if (window.getComputedStyle(imgnumber[0]).display === "block") {
        imgnumber[0].style.display = 'none'
        bottombtn[0].classList.remove('bottombtn');
        i = imgnumber.length - 1;
        imgnumber[i].style.display = 'block'
        bottombtn[i].classList.add('bottombtn');
        
    }
    else if (window.getComputedStyle(imgnumber[i]).display === "block") {
        imgnumber[i].style.display = 'none';
        bottombtn[i].classList.remove('bottombtn');
        imgnumber[i - 1].style.display = 'block';
        bottombtn[i - 1].classList.add('bottombtn');
        i--;
    }

}