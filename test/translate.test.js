describe("translate", function() {
 // 1. words that start with vowels.
//A.
    it("word starting with a", function(){
        expect(translate('apple')).toEqual('appleway');
    })
//B.
    it("word starting with e", function(){
        expect(translate('elephant')).toEqual('elephantway');
    })
//C.
    it("word starting with i", function(){
        expect(translate('igloo')).toEqual('iglooway');
    })
//D.
    it("word starting with o", function(){
        expect(translate('orange')).toEqual('orangeway');
    })
//E.
    it("word starting with u", function(){
        expect(translate('under')).toEqual('underway');
    })

// 2. Words that start with vowels with capital letters are converted to lowercase    
    //A.   
        it("word starting with captial A converted to a", function(){
            expect(translate('Apple')).toEqual('appleway');
        })
    //B.    
        it("word starting with captial E converted to e", function(){
            expect(translate('Elephant')).toEqual('elephantway');
        }) 
    //C.    
        it("word starting with captial I converted to i", function(){
        expect(translate('Igloo')).toEqual('iglooway');
        })  
    //D.
        it("word starting with captial O converted to o", function(){
            expect(translate('Orange')).toEqual('orangeway');
        })  
    //E.
        it("word starting with captial U converted to u", function(){
            expect(translate('Under')).toEqual('underway');
        })  
    

   //3. words that start with one consonant… write tests for the second letter being
  //    several different vowels

    //A.   
        it("word starting with one consonant, second letter is vowel a", function(){
            expect(translate('happy')).toEqual('appyhay');
        })
    //B.
        it("word starting with one consonant, second letter is vowel e", function(){
            expect(translate('penguin')).toEqual('enguinpay');
        })
    //C.
        it("word starting with one consonant, second letter is vowel i", function(){
            expect(translate('list')).toEqual('istlay');
        })
    //D.
        it("word starting with one consonant, second letter is vowel o", function(){
            expect(translate('football')).toEqual('ootballfay');
        })
    //E.
        it("word starting with one consonant, second letter is vowel u", function(){
            expect(translate('fun')).toEqual('unfay');
        })
 
   //4. words that start with two consonants
    //A.   
        it("word starting with two consonants, third letter is vowel a", function(){
            expect(translate('that')).toEqual('atthay');
        })
    //B.
        it("word starting with two consonants, third letter is vowel e", function(){
            expect(translate('then')).toEqual('enthay');
        })
    //C.
        it("word starting with two consonants, third letter is vowel i", function(){
            expect(translate('child')).toEqual('ildchay');
        })
    //D.
        it("word starting with two consonants, third letter is vowel o", function(){
            expect(translate('thorn')).toEqual('ornthay');
        })
    //E.
        it("word starting with two consonants, third letter is vowel u", function(){
            expect(translate('stuffing')).toEqual('uffingstay');
        })
    
   //5. words that start with three consonants
    //A.   
        it("word starting with three consonants, fourth letter is vowel a", function(){
            expect(translate('splash')).toEqual('ashsplay');
        })
    //B.
        it("word starting with three consonants, fourth letter is vowel e", function(){
            expect(translate('three')).toEqual('eethray');
        })
    //C.
        it("word starting with three consonants, fourth letter is vowel i", function(){
            expect(translate('trying')).toEqual('ingtryay');
        })
    //D.
        it("word starting with three consonants, fourth letter is vowel o", function(){
            expect(translate('school')).toEqual('oolschay');
        })
    //E.
        it("word starting with three consonants, fourth letter is vowel u", function(){
            expect(translate('strung')).toEqual('ungstray');
        })

    //6. Converting to lower case when vowel isn't first letter
     //A. 
         it("Capitalizing words that do not start with vowels", function(){
             expect(translate('CHRISTMAS')).toEqual('istmaschray');
        })
});