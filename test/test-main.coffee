tests = []

for file of window.__karma__.files
  if /Spec\.js$/.test file
    tests.push file
###

    ###
requirejs.config
  baseUrl: '/base/app/'
  paths:
    text: '../bower_components/requirejs-text/text'  
  deps: tests
  callback: window.__karma__.start
