const navBar = document.querySelector('#navBar')
const ul = document.querySelector('nav ul');
const anchors = document.querySelectorAll('nav ul li a');
const header = document.querySelector('#header');
const sections = document.querySelectorAll('section');
const options = 
  {
    root:null, 
    // increase the root of bottom so before section come into veiw by 10px it will add active class
     rootMargin:'0px 0px 10px 0px',
     threshold:0.3
   };
function head() {
    //when click in showcontact add show class to info

    //when your are in width more than 1200px add show class to info
    if (window.innerWidth > 992) {
        ul.classList.add('show');
        console.log('more than 1200px');
    } else if (window.innerWidth < 1200) {
        ul.classList.remove('show');
        navBar.addEventListener('click', (e) => {
            ul.classList.toggle('show');
            anchors.forEach((elem)=>{
                elem.addEventListener('click', ()=>{
                    ul.classList.remove('show');
                })
            })
        });
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            ul.classList.add('show');
            console.log('more than 1200px');
        } else if (window.innerWidth < 1200) {
            ul.classList.remove('show');
            navBar.addEventListener('click', (e) => {
                ul.classList.toggle('show');
                anchors.forEach((elem)=>{
                    elem.addEventListener('click', ()=>{
                        ul.classList.remove('show');
                    })
                })
            });
        }
    });
    // add active class to header when window scrool

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('active');
            console.log('you are scroll top')
        } else {
            header.classList.remove('active')
        }
    })

}
// Add class 'active' to section when near top of viewport
const observer = new IntersectionObserver(entries => {
    //  select thae anchors
    entries.forEach(entry => {
        //if the entry is intersection
        if (entry.isIntersecting) {
            entry.target.classList.add('active-sec');
            //loop  anchors to active  when intersection  
            for (anchor of anchors) {
                if (anchor.getAttribute('data-nav') === entry.target.id) {
                    anchor.classList.add('active-anchor')
                }
            }
        }
        // if the entry is not intersection  remove active class from section and anchor
        else {
            if (entry.target.classList.contains('active-sec')) {
                entry.target.classList.remove('active-sec')
            }
            for (anchor of anchors) {
                if (anchor.getAttribute('data-nav') === entry.target.id) {
                    anchor.classList.remove('active-anchor')
                }
            }
        }
    }
    )
}, options);
// for loop  section  observe it
sections.forEach((sec) => observer.observe(sec));


head();