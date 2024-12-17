    // import {mul ,add } from "./modules.js";
    import * as utility from "./modules.js";
    const result = utility.mul(2, 3, 4);
    console.log(result);
    console.log(utility.STUDENT_COUNT);
    document.getElementById('demo').innerHTML = result;
    document.getElementById('demo2').innerHTML = utility.STUDENT_COUNT;