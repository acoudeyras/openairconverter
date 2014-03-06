tests = []

for file of window.__karma__.files
  if /Spec\.js$/.test file
    tests.push file

requirejs.config
  baseUrl: '/base/app'
  deps: tests
  callback: window.__karma__.start
