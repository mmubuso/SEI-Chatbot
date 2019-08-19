//import apis
let subjectApi = require('./subject.js')
let resourceApi = require('./resources.js')
let questionApi = require('./questions.js')


//subjects
let dataTypes = {
    name: 'data types'
}

let conditionals = {
    name: 'conditonal'
}


//questions and resources
let dataTypesQuestions = [
    {
        topic: `primitive data types `,
        questions: `Which of the following has the complete list of primitive data types?`,
        images: null,
        optionA: `undefined, null, boolean, string, number, symbol, bigInt`,
        optionB: `object, array, null , string, number`,
        optionC: `string, number, symbol, object, undefined, null`,
        answer: `undefined, null, boolean, string, number, symbol, bigInt`,
    },
    {
        topic: `data types strings string`,
        questions: `What happens when you add "4" + "4" together?`,
        images: null,
        optionA: `44`,
        optionB: `"44"`,
        optionC: `8`,
        answer: `"44"`
    },
    {
        topic: `primitive data types`,
        questions: 'Are primitive data types mutable?',
        images: null,
        optionA: `No they are actually immutable and can't be changed`,
        optionB: `Yes we change a string, or number at any time`,
        optionC: `All data types by default mutable`,
        answer: `primitives are immutable and can't be changed`
    }
]

let dataTypeResources = [
    {
        topic: `bdoolean data types`,
        images: null,
        resourceA: `In computer science, the Boolean data type is a data type that has one of two possible values (usually denoted true and false), intended to represent the two truth values of logic and Boolean algebra.`,
        resourceB: `In JavaScript, the empty string (""), null, undefined, NaN, +0, −0 and false are sometimes called falsy`,
        resourceC: `The Boolean object is an object wrapper for a boolean value.The value passed as the first parameter is converted to a boolean value.`,
        resourceD: null
    },
    {
        topic: `null data types`,
        images: null,
        resourceA: `In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address.`,
        resourceB: `In JavaScript, null is one of the primitive values.`,
        resourceC: null,
        resourceD: null
    },
    {
        topic: `Symbol symbol data types`,
        images: `https://lh3.googleusercontent.com/UJWKVflt2D1qzURm8QIAAPqulgwdi7h2Fuzarqf9dPxq4vdMHVPBAqVd2KAkxfuNLvKbBMds60Po8jE99XFFsG1D9DMwQyLyTvEzFM7Pyf7bamk-Cvwm--NQe6AjpWb2gNTkSDudJ7-QXP8NM2MhnEQ72SjBbKAF-agutXf0ZZOAqvnVoExHu71LZJcq9WsZv3ZJVstAMDlb9HviQeuzzCnGdy7mDHmop-CBirKeIbMOMZtc_VlVh324ugI25sbD1MaUjyj4u9JaMJq9b5VrUmle4btj63MRa5zCAGCdX1Ewe_ru27qnZABTzXyirCCqBs1801wuq0EoWCzdby3u1pyS-cFJQJKd8pbPG1jT387Y7Hwg-AzoXhCHqWxkIfYg0Uh-LeG3ACjs33r2iHAaNwBrc6qoGueBkh9qZ5a6-5Ch91v80dCoWmQg8tkudQh6_M7aM2jIIKhGWPL3Pa453s2GQrogWydFKVvofh6GgsLuBKmLYE3uN9u0fhwdIEFgtDbJc4Xpd7J1UcwvVbvkzBGRFafluLp1i8sa_DvDwDT0D3YWIRNf9x1DSfF34fLr_9ViojMUsIOE-2Xx4ev7PUzyN3siz3C4hoHpn68pR3ATtwj6BHA8xFeDo6EEShbZ2p4wha7x5xBFWHV7hLuA48aUKrK54eaT=w1188-h388-no`,
        resourceA: `The Symbol() function returns a value of type symbol, has static properties that expose several members of built-in objects, has static methods that expose the global symbol registry, and resembles a built-in object class but is incomplete as a constructor because it does not support the syntax "new Symbol()". `,
        resourceB: `Every symbol value returned from Symbol() is unique.`,
        resourceC: `Most values in JavaScript support implicit conversion to a string. For instance, we can alert almost any value, and it will work. Symbols are special. They don’t auto-convert.`,
        resourceD: null
    }
]



let conditionalQuestions = [
    {
        topic: `control flow conditional statement do...while do while`,
        questions: 'What is the output()?',
        images: `https://lh3.googleusercontent.com/XVnZsAVdUQuf-F1f9lOuwTZnt08H4aDsavCauGwEj_i3QcDGpS12UgOJwJSrsnHhVLOSYt_LZmdjhU-fJCH4TdZ3mhnYd42rqMaNUVZCN0G5sGMxcRYcqrvUy6ZMhg9o0q3vaMsUntmVbT_bKX58gwYWMdpfRBtmikCZYYfzi4ILQ5xip38chy4MUTW-OP93IeP8GytB7aHXrOobEsafbVfFerrf9MJ5LmDFEqTHGuEKu_-6lYvslUg4sATGkdUozugQHlJtPHZ9IZ6PQhvBC6pTaj8D5BfaPpWamj4QQYelNj-JSouyirHwhn_fcR-aj3c0cLKEHwOAFZAFeHVd5ZkUaCn4HQGz3RkhKB7XmQJ8qkU4NZr6VhRAO_960VNAHXr1wMnSWOdqEH6S5HPgTsRKD3qXsNDwEOZOpfy5dCV8rzIljbPbkYxW52vXdJ3k6BgzsBoGNp8VXKpfif64Ps_gESHJ-9Z-zRmf7vtBbBxJMFtFqdpFE5uJ4MEqzFlXvVDEUTjVJGJsZrHgudwhXlNlPw_u9akbFlk5C2AJR3G6ywCsQSgnvEzU55rdcxlc2ke7SsuYoKBNvtWpL8f9mhaHVdvgPwgA4dmUX8TFJwcLiYtJljXkU3PlN5BL9-rS4_-guyKkLkRsWkWTkYHcJnMCXCL7EXlE=w2020-h396-no`,
        optionA: `prints out 1`,
        optionB: `prints out 0`,
        optionC: `referrence error`,
        answer: `prints out 1`
    },
    {
        topic: `control flow conditional statement if else if `,
        questions: 'What is the output',
        images: `https://lh3.googleusercontent.com/s2NyFHptQIZ7OnWXTvzC5uUVENVuNvJG42GSgYjj6Z-l8TFCk3SNpk9utnuSFv_AT-jjNEn5N-4IHP_Qnb1HRMBXzZjmKH6K3L17_oR3ocjl5OijcMA19T1R5dzYAONPK80Q8YETt5dsnycwc6H4e1mhGEKCHqe8VAUaVuJ_Od9Y3t1TI1pp5PP_-OZCMKmgjKsxL4CvTISThlwEffijYUuUQ2q9ErVAcd6LR4JecKEPpjXnXRm2G53OaFEQRWhABU2LesUZ_VcWzPUkcts7Kz13RKi6hfEbeiPfuvBAIIcTemF_w7sHGYZOUmTd8CzHyF8Yv4EZb2YeTEsY76gy-u8aJ63pJwYAvrk1twRyJFjR6bqq4v1fs_qahiDCM9A9lqX8RJuJ7fVtUmnKIv8SBvY4uRbbLSqSrG-oOdrZsoNMo75r6VLjJ9FvZVsG_LpKYq2SxAmfS0Ytnh1EnB7ejtVWEAeDJWNxHgqovgWp1dVN2DbOvQ97uFMTZJETAq6QqfG3Ji4GnN6z270jmV5es1guJelKAx9uVi6xTEj5kp3r6tgyNn11G_qduMyh-4w8GB4vi5BtjFa971U3uEDCEv1cZ_qjGBBhPeQX7heYwsaonbm-0uyfCwspJdWKGScufk381U7x2jG_EpbhWkEBrG6oxGBWNXwk=w2020-h444-no`,
        optionA: `fizz`,
        optionB: `fizz  buzz`,
        optionC: `fizzbuzz`,
        answer: `fizzbuzz`
    },
    {
        topic: `control flow ternary operators conditional statement`,
        questions: 'What is the output()',
        images: `https://photos.google.com/album/AF1QipM6oBBnwLWTh1dCwSrIAk93o8PTavbak8cjVknY/photo/AF1QipOw2ft-ZmwtnfuY5QS68q6mOCBA_uBJibWGoYGp`,
        optionA: `Hi, baby`,
        optionB: `Hello`,
        optionC: `Greetings`,
        answer: `Greetings`
    },
]

let conditionalResources = [
    {
        topic: `if statement if condition control flow`,
        images: `https://lh3.googleusercontent.com/qikFhpKvdiG75pR2dzrZrrSvRjiI6XdqTF-c1e0ITqP6gw-1nnMj3vA3VGvobhNSQ02EtvXhnwY3mB1Qad6N9ftED43HLCXwrRmhd5nyqViZ674c3UsQCkzde8UY4vBIKFmL1m1_2946sYJwtVxDuPOft_218AEOjC9M5XQSqbn19HGrtW96vQRda-MqTak-CPQclcW8HLXMPlKDMOwv-ickQeTQEsXX4Fh09YsFgf8_MoVamcN82lQYf1KYZLtcNS8vE0Z4spPyrmv-nyS-FPu3o3Kcq_tLhNaIrQ1ikSy7GDErnl3j_CYiXbDO6UVzMDXT6qeLLCPM2HeCHMIF96Fx4_Yn3hRCwkHivke1bSHvZGCBtGLGp5CLhmAVkX7PsAnGMRZnSHyU1XwMjv8g2dkXF2XMMVykwGKHuLP-L_ZjCDIwkv_eKVyFpvyEPakcNJTQczvwdV3Rod_XbeLwI3v5pDewwhjYSOfWO5qGMtVgywN_1u2n_568HYMbFMSZMbSTT5u8oxYWiQTvlijEjF5qVMRGLky8sh1AvtHSWKTokzzdnEFhcRhYYfnhHM_Cy0sFSgcSQ3ZxIl1tIOuBFhL7wWJWPVC6sMxMnq07FOxpL4WEGw5PBQqucB6vyDIioQpSDdYeeRSaTF5ucboswS390etTG8pK=w1736-h254-no`,
        resourceA: `The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.`,
        resourceB: `Condition - An expression that is considered to be truthy or falsy`,
        resourceC: `Statement1 - Statement that is executed if condition is truthy. Can be any statement, including further nested if statements. To execute multiple statements, use a block statement ({ ... }) to group those statements. To execute no statements, use an empty statement.`,
        resourceD: null
    },
    {
        topic: `switch statements contionals conditions`,
        images: `https://lh3.googleusercontent.com/sTUdNWzK8F1oSH1ywQPQS5t2T2yAY_y8ifwz_B_lbJ7Xo3vfxqzzuDZtZz9DJGOUeAa2nule-7CMzEb1qKPIKcw_04z4du1wkPlQGgGZnrGRpThTZ0W3uJr--h5Dx72VQ-MD9kf7UqAbER-iO8BrTNYD8hpt8jwdN5Qzo4hCmtN1SFLNNgVcG8sf3c4UpiSXiLstX4GaUlSo5uCGYr7WwecZl1OALECVTnXL2X4oqgfMM56XrDjY6aHGteBZRnjj8gkWzI420aGVqxOHA0UJKI68UX2KqxpCBe7_XoLvWAXFbD5AcVouoqS4PKMxs5KqVG7--DL3_95cX3bGFS-LuWm9tY24SeJohxxA5Icrq_yIT3a1FEUzcAAZkMl6dCiBsgrJjGLVVdofl-oKNhKUgjYLvhyH_EhGgqXhGBJ-6xmaxJu2SYJIOvJfHAjCo759dQj7MjPqQ_k1Eep51igwglCCj7VmSVh7yNZTPCGsAljLmJOOVQR9EDTupzvQ8Oo7lFsbBJ4xqPlTd1JCLiVj0h0qzw7tdheFVf6GIo17AGpjV-UjhYfrwjd_VKRBaKOKZMgYBBNbf5-Ts_PZWdZM7MeIgbnTGUywdahcYwvIXXv5oVLJUPonofeaVpdfVQCpq9Ze2ZdmD5DCFNSeg_eIZARQT68GTRaI=w1350-h564-no`,
        resourceA: `Take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it.`,
        resourceB: `They are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex (e.g. multiple logical operators). For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large number of choices.`,
        resourceC: `A sequence of question mark operators ? can return a value that depends on more than one condition.`,
        resourceD: null
    },
    {
        topic: `ternaray operator ? condition`,
        images: `https://lh3.googleusercontent.com/6GJ6KWjEsuMWrpTr7gtyYB0eYoI7F2T--r_3jQWzjMYc1fXvxH0Rsm0z6XKOpmi_7QRAHmSGKCXXG9-Kcs5ABPx897XY5TX2SzFfSe1ycsJijz4HJ-Y0KjFXFwWcN095_nQ2-3Ll9JynKy3wEZob8HovCA3ShkaNcFAzRVUqSHsmWT8AraFgMDSRwjT8Yvn4S4kzVzltzHOetYDM6SpXpx-KjUaTi2nhdEmDtZoyY5vsn43uud1ryzLL6weyhh5-fdOOSNDmDLca0sUlaixUvOKfpT8-MBLo-LbjiRUvvCg3l_Hm8Gd4KtYAeWv1ysX0zZGQwpi6EjtSV8TO7zxFIy3IVtISyWKJBrU3l7iSe9KLKdQOP7YqVslQtpzyxRfKP1-RqdI3JCJDkJC6oJHiY_YCxZomX3uIUP1v9_E2mXQWTq8etKErGjEUKR3nVAcIo5GQSmjXUE6WukTRf4mw8NHCmeajM5RUVmfXW-VsaHS5WH-079mWRcliQp_G7OWRellVix7JpnbyFCi4JGkgiNJWetUm71LrCT9IOW7fi-V3P2t6aN4vFtyeilGAtuv_x7_QR4IRYv3u2ME4mbMhZMZBBsvipg-k3ZpiqjXdAq3wbT-GAJD_8KMt1lafNCH9I2gmwRU_5SXfN4qHpT2JbWHbcYsAxW9K=w1570-h320-no`,
        resourceA: `The ternary or conditional operator is a small bit of syntax that tests a condition and returns one value/expression if it is true, and another if it is false`,
        resourceB: `The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.`,
        resourceC: `You don't just have to set variable values with the ternary operator; you can also run functions, or lines of code `,
        resourceD: null
    }
]

//Run scripts to delete everything
let loadDatabase = async () => {
    try {
        let subjectRes = await subjectApi.deleteAllSubjects()
        let questionsRes = await questionApi.deleteAllQuestions()
        let resourcesRes = await resourceApi.deleteAllResources()
        await uploaditems(dataTypes, dataTypesQuestions, dataTypeResources)
        await uploaditems(conditionals, conditionalQuestions, conditionalResources)
        process.exit()
    } catch (err) {
        console.log(err)
        process.exit()
    }
}

//load data into mongodb
let uploaditems = async (subject, questions, resources) => {
    try {
        let res = await subjectApi.createSubject(subject)
        console.log(res._id)
        let questionlist = await createQuestions(res._id,questions)  
        let resourcelist = await createResources(res._id,resources)
        console.log(questionlist)
        console.log(resourcelist)
    } catch (err){
        console.log(err)
    }
}

//creates question for subject Id
let createQuestions= async (subjectId, questions) => {
    return await Promise.all(questions.map(question => questionApi.createQuestion(question,subjectId).catch(err => console.log(err))))
}

//creates resources for subject Id
let createResources= async (subjectId, resources) => {
    return await Promise.all(resources.map(resource => resourceApi.createResource(resource,subjectId).catch(err => console.log(err))))
}

loadDatabase()
