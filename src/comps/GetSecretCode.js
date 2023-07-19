export default function GetSecretCode() {
    let secret_code = ""

    for (let i = 0; i < 4; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        secret_code = secret_code.concat(randomNum);
    }
    console.log(secret_code)
    return secret_code;
}