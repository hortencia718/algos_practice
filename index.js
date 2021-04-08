// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
    // let newStr= 'str'
    // console.log(str)
    for(let i = str.length -1; i>= 0; i--){
    //  newStr += word[i] + '';
    
    // console.log( "reverse str is:", newStr)
    
     }
      return str.split(' ').reverse().join(' ')
    
    }
    

    function preFizz(n) {
        let output = new Array();
        let num = 1;
        while(output.length  < n){
          output.push(num);
          num += 1;
        }
        return output;
      
      }



      describe('Fixed Tests', _ => {
        it("Test", __ => {
          Test.assertSimilar(preFizz(1), [1], `Array should be from 1 to 1`);
          Test.assertSimilar(preFizz(2), [1,2], `Array should be from 1 to 2`);
          Test.assertSimilar(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
          Test.assertSimilar(preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);
          Test.assertSimilar(preFizz(5), [1,2,3,4,5], `Array should be from 1 to 5`);
        });
      });
      
      // return Array.from({length:n},(v,i) => i+1);
      //   console.log("fizz")
      
      
      
      // array of positive numbers
    
    // console.log
    // how do you reservse a str of different words?
    // create a loop 
    // use reverse string method , spilt the str?
    // push new str of words ?
    // 

    

   describe("reverseWords",function(){
        it("should work for some examples", function(){
          Test.assertEquals(reverseWords("hello world!"), "world! hello")
          Test.assertEquals(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
          Test.assertEquals(reverseWords("foobar"                       ),  "foobar")
          Test.assertEquals(reverseWords("kata editor"                  ),  "editor kata")
          Test.assertEquals(reverseWords("row row row your boat"        ),  "boat your row row row")
        });
      });