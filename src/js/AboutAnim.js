

export const AboutWrapperAnim = () =>{
  const AboutWrapper = document.getElementById('About-wrapper');
  const AboutBannerTexts = document.querySelectorAll('.About-intro-container');

  let options = {
    root: document.querySelector('#scrollArea'),
    threshold: 0,
    rootMargin:'0px 0px -10px 0px'
  }
  
  let observer = new IntersectionObserver(function(
    entries,
    observer
  ) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      AboutWrapper.classList.remove('About-wrapper-anim');
      // AboutBannerTexts.forEach(AboutBannerText => {
      //   AboutBannerText.classList.remove('About-text');
      // });
      observer.disconnect();
    })
  }, options);
  observer.observe(AboutWrapper);
}

