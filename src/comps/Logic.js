export default function Logic(user_input, code) {
    let right_placed_pieces = 0;
    let wrong_placed_pieces = 0;

    for (let i = 0; i < 4; i++) {
        let user_input_temp = user_input;
        let indexCode = code.indexOf(code[i]);
        let indexUser = code.indexOf(user_input[i]);

        if (code.includes(user_input_temp[i]) && indexCode == indexUser) {
            right_placed_pieces++;
        } else if (code.includes(user_input_temp[i]) ) {
            wrong_placed_pieces++;
        }
    }

    return [right_placed_pieces, wrong_placed_pieces, user_input];
}