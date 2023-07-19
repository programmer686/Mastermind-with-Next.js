export default function GetSecretCode() {
    let secret_code = ""

    for (let i = 0; i < 4; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        secret_code.concat(randomNum);
    }

    return secret_code;
}