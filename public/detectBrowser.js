const head = document.getElementsByTagName('head')[0];
const link = document.createElement('link');

link.rel = 'stylesheet';

(function fnBrowserDetect(){
                 
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
        link.href = './safariMediaQueries.css';
        document.getElementsByTagName('HEAD')[0].appendChild(link);
      }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
      }  else if(userAgent.match(/safari/i)){
        browserName = "safari";
        link.href = './safariMediaQueries.css';
        document.getElementsByTagName('HEAD')[0].appendChild(link);
      }else if(userAgent.match(/opr\//i)){
        browserName = "opera";
      } else if(userAgent.match(/edg/i)){
        browserName = "edge";
      }else{
        browserName="No browser detection";
      }
    
     console.log(browserName);        
})();