let Nav=document.querySelectorAll('.main-nav li');

let subNav=document.querySelector('.sub-nav');

let secCon=document.querySelector('.sec-slide .container .slider');


let btnSl1=document.querySelector('#btn-slide01')
let btnSl2=document.querySelector('#btn-slide02')
let btnSl3=document.querySelector('#btn-slide03')

let btnNext=document.querySelector('#next');
let btnPrev=document.querySelector('#prev');

let btnNotice=document.querySelector('.notice-tit');
let btnGallery=document.querySelector('.gallery-tit');
let noticeEl=document.querySelector('.notice');
let galleryEl=document.querySelector('.gallery');


for(let i=0;i<Nav.length;i++)
{
    Nav[i].addEventListener('mouseenter',function()
    {
        subNav.style.height='180px';    
    })
}

subNav.addEventListener('mouseleave',function()
{
    subNav.style.height='0px';
    
})

let slideEls=document.querySelectorAll('.slider .img-box');
let selectIdx=1;

    function changeSlide(idx)
    {
                if(idx==1)
                {
                    btnSl1.classList.remove('active');
                    btnSl3.classList.remove('active');
                    secCon.style.transform='translatex(-1200px)';
                    btnSl2.classList.add('active');
                }
            
                else if(idx==2)
                {
                    btnSl1.classList.remove('active');
                    btnSl2.classList.remove('active');
                    secCon.style.transform='translatex(-2400px)';
                    btnSl3.classList.add('active');
                }
                else if(idx==0)
                {
                    btnSl2.classList.remove('active');
                    btnSl3.classList.remove('active');
                    secCon.style.transform='translatex(0px)';
                    btnSl1.classList.add('active');
                }        
    }
    // changeSlide();    

    setInterval(function()
        {
            if(selectIdx>2)
            {
                selectIdx=0;
            }
            console.log(selectIdx);
            changeSlide(selectIdx++);
        },2500)
    
   
    

    // 슬라이드 버튼
    btnSl1.addEventListener('click',function()
    {
        selectIdx=0;
        changeSlide(selectIdx++);
    })

    btnSl2.addEventListener('click',function()
    {
        selectIdx=1;
        changeSlide(selectIdx++);
    })

    btnSl3.addEventListener('click',function()
    {
        selectIdx=2;
        changeSlide(selectIdx++);
    })

    btnNext.addEventListener('click',function()
    {
       changeSlide(selectIdx++);
    })
    btnPrev.addEventListener('click',function()
    {
       
        changeSlide(--selectIdx);
    })


    btnNotice.addEventListener('click',function()
    { 
        galleryEl.style.opacity='0';
        galleryEl.style.zIndex='1';
        btnGallery.classList.remove('active');

        noticeEl.style.opacity='1';
        noticeEl.style.zIndex='2';
        btnNotice.classList.add('active');
    })

    btnGallery.addEventListener('click',function()
    {
        noticeEl.style.opacity='0';
        noticeEl.style.zIndex='1';
        btnNotice.classList.remove('active');

        galleryEl.style.opacity='1';
        galleryEl.style.zIndex='2';
        btnGallery.classList.add('active');

    })
    
    // notice
    
    let popupEl= document.querySelectorAll('.popup');
    let popBtn=document.querySelectorAll('.in button');
    let popOn=document.querySelectorAll('.popon');

    // open popup
    for(let cnt=0;cnt<popBtn.length;cnt++)
    {
        popOn[cnt].addEventListener('click',function()
        {
            popupEl[cnt].style.display='block';
        })
    }
    console.log(popupEl,popBtn);

    // close버튼
    for(let cnt=0;cnt<popBtn.length;cnt++)
    {
        popBtn[cnt].addEventListener('click',function()
        {
            popupEl[cnt].style.display='none';
        })
    }



    let galleryImg=document.querySelectorAll('.gallery-contents .img-box');
    let galleryTxt=document.querySelectorAll('.gallery-contents a p');

    for(let cnt=0;cnt<galleryImg.length;cnt++)
    {
        galleryImg[cnt].addEventListener('mouseenter',function()
        {
            galleryTxt[cnt].style.textDecoration='underline';
        })
    }

    for(let cnt=0;cnt<galleryImg.length;cnt++)
    {
        galleryImg[cnt].addEventListener('mouseleave',function()
        {
            galleryTxt[cnt].style.textDecoration='none';
        })
    }
    console.log(galleryTxt);
