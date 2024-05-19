function DemoGenerator(){
    console.log("Generator ------>>>>>>")
    function* generatorFunction(){
        // yield 1;
        // yield 2;
        // yield 3;
        console.log("Yeild is working")
    } 
    var value = generatorFunction();
    console.log("Value --- ",value.next())
    // console.log("Value --- ",value.next())
    // console.log("Value --- ",value.next())
    // console.log("Value --- ",value.next())
} 
export default DemoGenerator;