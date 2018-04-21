import '/src/application-shell.js';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
//import 'https://www.googletagmanager.com/gtag/js?id=UA-73943527-10';

const $_documentContainer = document.createElement('div');
$_documentContainer.innerHTML = `
      
<meta charset="UTF-8">
<!-- Webcomponents-loader / check and load any polyfills your browser needs -->
<script type="script" src='./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'></script>
<!-- BASE
<base href="/"> -->
<!-- VIEWPORT -->
<meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">
<!-- THEME COLOR -->
<meta name="theme-color" content="#303030">
<!-- TITILE -->
<title>Roofing Contract</title>
<!-- MANIFEST -->
<link rel="manifest"                                href="manifest.json">
<!-- MANIFEST ICON -->
<!-- <link rel="icon"                               href="manifest/favicon.ico"> -->
<!-- CANONICAL -->
<link rel="canonical"                               href="https://roofingcontract.com/" />
<!-- GOOGLE VERIFICATION -->
<meta name="google-site-verification"               content="rh-NjqCCrZAZxwcQdF-taYcDvp5CalWAKDDdv2yyH18" />
<!-- AUTHOR -->
<meta name="author"                                 content="Jack Markiewicz">
<!-- TIME -->
<meta http-equiv="If-Modified-Since"                content="Sun, 25 Mar 2018 14:30:59 GMT" />
<!-- DESCRIPTION -->
<meta name="description"                            content="Free Roofing Contract, Primary, Subcontract, Employment Contract, Warranty, Proposal, or calculate an estimate.">
<!-- KEYWORDS -->
<meta name="keywords"                               content="roof, contract, purchase order, asphalt, cedar, metal, slate, clay">
<!-- HTTPS REFERRER TAG-->
<meta name="referrer"                               content="no-referrer-when-downgrade">
<!-- Add to homescreen for Chrome on Android -->
<meta name="mobile-web-app-capable"                 content="yes">
<meta name="application-name"                       content="Roofing Contract">
<!-- Add to homescreen for Safari on iOS -->
<meta name="apple-mobile-web-app-capable"           content="yes">
<meta name="apple-mobile-web-app-status-bar-style"  content="black-translucent">
<meta name="apple-mobile-web-app-title"             content="Roofing Contract">
<!-- Tile icon for Windows 8 (144x144 + tile color) -->
<meta name="msapplication-TileImage"                content="/images/manifest/icon-144x144.png">
<meta name="msapplication-TileColor"                content="#303030">
<meta name="msapplication-tap-highlight"            content="no">
<!--TWITTER -->
<meta name="twitter:card"                           content="summary_large_image">
<meta name="twitter:title"                          content="Roofing Contract">
<meta name="twitter:description"                    content="Free Roofing Contract, Primary, Subcontract, Employment Contract, Warranty, Proposal, or also calculate an estimate.">

<!-- JSON -->
<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "WebApplication",
    "datePublished": "2018-04-04T11:10:59Z",
    "name": "Roofing Contract",
    "about": "Calculate roofing purchase orders and create printable contracts for customers and subcontractors.",
    "operatingSystem": "HTML 5",
    "applicationCategory": "Project Management, Calculator",
    "applicationSubCategory": "Roofing Calculator",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "5"
    },
    "offer":"$0.00"
  }
</script>

<!--<link rel="import" href="node_modules/@polymer/neon-animation/web-animations.html">-->

<style>

  body {
    color: black;
    font-family: Roboto, sans-serif;
    /*  font-weight: 800; */
    /*  text-shadow: 3px 2px black; */
    background-color: #303030; /* #536d79 */
    margin: 0px;
    color: #1e2252;
  }

  @media print { body { background-color: white; } }

  .Loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

</style>
      
      `;

document.head.appendChild($_documentContainer);

/** ANALYICS */
//window.dataLayer = window.dataLayer || [];
//function gtag(){dataLayer.push(arguments);}
//gtag('js', new Date());
//gtag('config', 'UA-73943527-10');


/* BODY */

const $_documentContainerB = document.createElement('div');
$_documentContainerB.innerHTML = `
      
<!-- APPLICATION SHELL -->
    <div class="Loader"></div>
    <script type="module" src='./src/application-shell.js';></script>
    <application-shell unresolved fullbleed>
      <!--<span slot="search"> 
        <!-- Custom Search Engine
        <script>
          (function() {
            var cx = '012963876987872265569:aecv93p_ufa';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
          })();
        </script>
              <gcse:search></gcse:search>
        </span>
        <span slot="advert">
          <!-- roofing
           <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
           <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-2634777664576238"
              data-ad-slot="8537878268"
              data-ad-format="auto"></ins>
           <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
           </script>
        </span>-->
    </application-shell>
    <!-- ANALYTICS  
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-73943527-7', 'auto');
      ga('send', 'pageview');
    </script>-->
      
      `;

document.body.appendChild($_documentContainerB);
