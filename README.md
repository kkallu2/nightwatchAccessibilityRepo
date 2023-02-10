//some useful tips
1. Clone the repo
2. create a separate branch
3. checkout the branch
4. do git install
5. if u want to run specific test file then use npx nightwatch <give the file location ,relative path>
6. if u want to run entire folder npx nightwatch <give folder location>
7. if u want to comment test case then do add ''+ before function
8. do install nightwatch pre-release plugin for easy running test cases and debugging test cases[ debugging will only be better when u use async and await for each step rather chaining]
9. u can even mention ur test files location in nightwatch config src_folders["here goes ur tests location relative path"] and simply run nightwatch keyword in terminal
10. If u wanna run in different browser then install that driver and update environment named 
      default: {
      disable_error_log: false,
      launch_url: 'http://localhost',

      screenshots: {
        enabled: true,
        path: 'failureTestSnapshots',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome' //update browsername here
      },
      
      webdriver: {
        start_process: true,
        server_path: ''
      },   
    },

or else simple create one more environment like below 
 UAT: {
      disable_error_log: false,
      launch_url: 'http://localhost',

      screenshots: {
        enabled: true,
        path: 'failureTestSnapshots',
        on_failure: true
      },
      
      globals:{
        username:"",
        pwd:"",
      }

      desiredCapabilities: {
        browserName: 'firefox' //update browsername here
      },
      
      webdriver: {
        start_process: true,
        server_path: ''
      },   
    },
    
  11.  call launch_url or globals vars in ur tests using browser.globals.username / browser.launch_url
  12.  To run in ur created env then mention like npx nightwatch --env UAT
  13.  If you have config located in different folder rather root folder then refer like npx nightwatch -c ./config/nightwatch.conf.js --env UAT
