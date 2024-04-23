// Create the document structure
const docType = document.implementation.createDocumentType('html', '', '');
const doc = document.implementation.createDocument('', 'html', docType);
const html = doc.createElement('html');
doc.appendChild(html);

// Create the head element
const head = doc.createElement('head');
html.appendChild(head);

// Create and append meta tags to the head element
const metaCharset = doc.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
head.appendChild(metaCharset);

const metaCompatible = doc.createElement('meta');
metaCompatible.setAttribute('http-equiv', 'X-UA-Compatible');
metaCompatible.setAttribute('content', 'IE=edge');
head.appendChild(metaCompatible);

const metaViewport = doc.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(metaViewport);

// Create and append the title element
const title = doc.createElement('title');
title.textContent = 'Thabang Mmako Personal Portfolio Task 2';
head.appendChild(title);

// Create and append link elements for stylesheets to the head element
const linkBootstrap = doc.createElement('link');
linkBootstrap.setAttribute('rel', 'stylesheet');
linkBootstrap.setAttribute('href', './assets/css/bootstrap.min.css');
head.appendChild(linkBootstrap);

const linkAos = doc.createElement('link');
linkAos.setAttribute('rel', 'stylesheet');
linkAos.setAttribute('href', './assets/css/aos.css');
head.appendChild(linkAos);

const linkLineAwesome = doc.createElement('link');
linkLineAwesome.setAttribute('rel', 'stylesheet');
linkLineAwesome.setAttribute('href', './assets/css/line-awesome.min.css');
head.appendChild(linkLineAwesome);

const linkStyle = doc.createElement('link');
linkStyle.setAttribute('rel', 'stylesheet');
linkStyle.setAttribute('href', './assets/css/style.css');
head.appendChild(linkStyle);

// Append script elements for JavaScript files
const scriptBootstrap = doc.createElement('script');
scriptBootstrap.setAttribute('src', './assets/js/bootstrap.bundle.min.js');
head.appendChild(scriptBootstrap);

const scriptAos = doc.createElement('script');
scriptAos.setAttribute('src', './assets/js/aos.js');
head.appendChild(scriptAos);

const scriptMain = doc.createElement('script');
scriptMain.setAttribute('src', './assets/js/main.js');
head.appendChild(scriptMain);


