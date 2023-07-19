export default function Logic(user_input, code) {
    let right_placed_pieces = 0;
    let wrong_placed_pieces = 0;
    let already_used = [];
    for (let i = 0; i < 4; i++) {
        
        let indexCode = code.indexOf(code[i]);
        let indexUser = code.indexOf(user_input[i]);

        if (code.includes(user_input[i]) && indexCode == indexUser && !checkedIndexes.includes(indexUser)) {
            right_placed_pieces++;
            already_used.push(i);
            console.log(user_input)
        } else if (code.includes(user_input[i]) && !checkedIndexes.includes(indexUser)) {
            already_used.push(indexUser)
            console.log(user_input)
            wrong_placed_pieces++;
        }
    }

    return [right_placed_pieces, wrong_placed_pieces, user_input];
}