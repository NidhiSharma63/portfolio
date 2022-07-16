const anim = () =>{
  const heroBaner = document.getElementById('hero-banner-container');
  const heroBannerText = document.querySelector('.hero-banner');
  const heroBannerImage = document.querySelector('.hero-banner-image');

  let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0,
    rootMargin:'0px 0px -100px 0px'
  }
  
  let observer = new IntersectionObserver(function(
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      heroBannerText.classList.remove('tranfrom-left');
      heroBannerImage.classList.remove('tranfrom-image');
      observer.disconnect();
    })
  }, options);
  observer.observe(heroBaner);
}

export default anim;