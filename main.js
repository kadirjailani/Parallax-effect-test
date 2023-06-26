import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


var respondToVisibility = function(element, callback) {
    var options = {
      root: document.documentElement
    }
  
    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        callback(entry.intersectionRatio > 0);
      });
    }, options);
  
    observer.observe(element);
  }

  const feedbackEl = document.getElementById("slideThis");
  respondToVisibility(document.getElementById("testSlide"), visible => {
      
    if(visible) {
        feedbackEl.classList.add("visible");
     }
  });
