// TODO: Create a function that validates user input
function enter_phone_number(phone_number){
    const allowed_char = /[0-9]/
    // let input_value = phone_number.target.value;

    if (!allowed_char.test(phone_number) || phone_number.length != 10){
        return "invalid input"
    } else {
        return phone_number
    }
}
console.log(enter_phone_number("1234567890"))
// TODO: Create a function that demonstrates multiple error types
function error_types(){
    try{
        a += 9
    } catch {
        console.log("Reference Error")
    }
    try {
    let num = 6;
    num.toUpperCase();
    } catch {
        console.log("Type Error");
    }
    try {
    throw new Error("This is a custom error");
    } catch {
        console.log("Custom Error");
    }
}
error_types()
// TODO: Create a collection of helper functions for string manipulation
function adjust_min_length(str, x){
    let modified_str = str
    if (str.length < x){
        modified_str = str + "x".repeat(x - str.length)
        return modified_str
    } else {
        return modified_str
    }
}
function adjust_max_length(str, y){
    let ml = y - str.length
    if (str.length > y){
        return str.slice(0, ml)
    } else {
        return str
    }
}
function restric_chars(str, z){
    const regex = new RegExp(`[${z}]`, 'g');
    if (str != ""){
        return str.replace(regex, 'z')
    }
}
function repeat_string(str, num){ return str.repeat(num) }

function adjust_str(w, x, y, z, t){
    let word = w
    word = adjust_min_length(word, x)
    word = adjust_max_length(word, y)
    word = restric_chars(word, z)
    word = repeat_string(word, t)
    return word
}
console.log(adjust_str("b00m", 3, 3, '0-9', 2));

// TODO: Create helper functions for array operations
function limit_array_length(a, num){
    if (a.length > num){
        return a.slice(0, num - a.length)
    } else {
        return a
    }
}
function add_to_array(a, am){ return a.concat(am) }
function remove_from_array(a, num){ return a.slice(0, num) }
function adjust_array(a, x, y, z){
    let list = a
    list = limit_array_length(list, x)
    list = add_to_array(list, y)
    // list = remove_from_array(list, z)
    return list
}
console.log(adjust_array([0,1,2,3,4,5], 9, [9,8,7], 1))
