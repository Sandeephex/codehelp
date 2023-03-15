import CryptoJS from 'crypto-js';
export const Aesencryption = (string) => {
    // function makeid(length) {
    //     var result = '';
    //     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     var charactersLength = characters.length;
    //     for (var i = 0; i < length; i++) {
    //         result += characters.charAt(Math.floor(Math.random() *
    //             charactersLength));
    //     }
    //     return result;
    // }
    // const fiv = CryptoJS.enc.Utf8.parse(makeid(8));

    const fkey = CryptoJS.enc.Utf8.parse('356d9abc7532ceb0945b615a622c3370');
    const fiv = CryptoJS.enc.Utf8.parse('yourivare1234567');

    const enc = CryptoJS.AES.encrypt(string, fkey, {
        iv: fiv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    return enc.ciphertext.toString(CryptoJS.enc.Base64);
}

export const Aesdecryption = (string) => {
    const key = '356d9abc7532ceb0945b615a622c3370';
    const iv = 'yourivare1234567';
    var decrypted = CryptoJS.AES.decrypt(string, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    return decrypted.toString(CryptoJS.enc.Utf8);
}
