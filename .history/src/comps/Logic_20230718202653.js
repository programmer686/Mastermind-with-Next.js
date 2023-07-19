export default function Logic(user_input, code) {
    let right_placed_pieces = 0;
    let wrong_placed_pieces = 0;
    let already_used = [];
    for (let i = 0; i < 4; i++) {
        let indexCode = code.indexOf(user_input[i]);
        let indexUser = user_input.indexOf(user_input[i]);
    
        if (indexCode === i && indexUser === i) {
          right_placed_pieces++;
          already_used.push(i);
        } else if (indexCode !== -1 && !already_used.includes(indexUser)) {
          wrong_placed_pieces++;
          already_used.push(indexUser);
        }
      }

    return [right_placed_pieces, wrong_placed_pieces, user_input];
}