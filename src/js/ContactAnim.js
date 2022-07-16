
export const ContactAnim = () =>{
  const Item = document.querySelector('.contact-wrapper');

  let options = {
    root: document.querySelector('#scrollArea'),
    threshold: 0.1,
    rootMargin:'0px 0px 100px 0px'
  }
  
  let observer = new IntersectionObserver(function(
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      Item.classList.remove('contact-wrapper-anim');
      observer.disconnect();
    })
  }, options);
  observer.observe(Item);
};


