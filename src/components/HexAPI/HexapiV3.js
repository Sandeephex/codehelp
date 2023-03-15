// ============================== API CHANGES ====================================================

// {
// 	api : 'Hexapi.php',
// 	change : 'Created API'
//  date : 10-03-2022
// }

// {
// 	api : 'HexapiV2.php',
// 	change : 'Implemented AES-256 data encryption & decryption'
//  date : 03-04-2022
// }

// {
// 	api : 'HexapiV2.php',
// 	change : 'SQL Error Handling'
//  date : 25-10-2022
// }

// {
// 	api : 'HexapiV3.php',
// 	change : 'Replace double quotes(") with $#12#$, due to prevent data lose in AES-256 data encryption',
//  date : 07-11-2022
// }

// ================================ API CHANGES ===================================================

import axios from 'axios'
import { StringFormatter } from './StringFormatter';
import { Aesdecryption, Aesencryption } from '../Aes/Aes'
import Swal from 'sweetalert2';
const Hexapi = (props) => new Promise((resolve, reject) => {
    let fd = new FormData();
    if (props.query != undefined && props.queryArr != undefined) {
        var formattedQueryString = StringFormatter(props.query, props.queryArr)
        console.log(formattedQueryString)
        fd.append(Aesencryption("Query"), Aesencryption(formattedQueryString.replaceAll('"','$#12#$')))
    }
    // console.log(Aesencryption('allfiles'))
    console.log(Aesencryption('json'),Aesencryption(formattedQueryString.replaceAll('"','$#12#$')))
    if (props.file != undefined) {
        fd.append(Aesencryption("file"), props.file)
    }
    if (props.search != undefined) {
        fd.append(Aesencryption("search"), Aesencryption(props.search))
    }
    if (props.searchType != undefined) {
        fd.append(Aesencryption("searchType"), Aesencryption(props.searchType))
    }
    if (props.searchurl != undefined) {
        fd.append(Aesencryption('searchurl'), Aesencryption(props.searchurl))
    }
    if (props.allfiles != undefined) {
        fd.append(Aesencryption('allfiles'), Aesencryption(props.allfiles))
    }
    if (props.type != undefined) {
        fd.append(Aesencryption('type'), Aesencryption(props.type))
    }
    if (props.filename != undefined) {
        fd.append(Aesencryption('filename'), Aesencryption(props.filename))
    }


    // const AppendKeys = (key) => props[key] != undefined && fd.append(Aesencryption(key), Aesencryption(props[key]))
    // let allKeys = Object.keys(props)
    // console.log(allKeys)
    // allKeys.forEach((el) => {
    //     if(el.toLowerCase() != 'query' && el.toLowerCase() != 'queryArr' && el.toLowerCase() != 'url' && el.toLowerCase() != 'file'){
    //         AppendKeys(el)
    //     }
    // })
    console.log(props)
    const url = props.url ? `${sessionStorage.getItem('url')}${props.url}` : `${sessionStorage.getItem('Apipathurl')}fetchrsdataV4.php`
    axios({
        mode: 'cors',
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        url: `${url}`,
        data: fd
    }).then(resp => {
        let decrypted = Aesdecryption(resp.data)
        // console.log(decrypted)
        if (JSON.parse(decrypted)) {
            let responseData = JSON.parse(decrypted)
            if (Object.keys(responseData).includes('sqlerrors')) {
                console.log(responseData)
                let FData = new FormData()
                let query = `[dbo].[Hex_Web_Proc_ErrorLog_Submit]
                @UserID='{0}',
                @ErrorCode='{1}',
                @ErrorMessage='{2}',
                @SqlState='{3}'`
                let queryArr = [`${sessionStorage.getItem('userid')}`, `${responseData.sqlerrors.code[0]}`, `${responseData.sqlerrors.message[0]}`, `${responseData.sqlerrors.sqlstate[0]}`]
                let formattedQueryString = StringFormatter(query, queryArr)
                console.log(formattedQueryString)
                FData.append(Aesencryption("Query"), Aesencryption(formattedQueryString))
                axios({
                    mode: 'cors',
                    method: "POST",
                    headers: { "Content-Type": "multipart/form-data" },
                    url: `${sessionStorage.getItem('Apipathurl')}fetchrsdataV4.php`,
                    data: FData
                }).then(resp => {
                    let errorResp = JSON.parse(Aesdecryption(resp.data))
                    Swal.fire({
                        html: 'An Error Occured',
                        allowOutsideClick: false,
                        confirmButtonColor: 'skyblue',
                    }).then(() => {
                        if(errorResp[''][0].msg){
                            reject(errorResp[''][0].msg)
                        }
                    })
                    
                })
            } else {
                resolve(responseData)
            }
        } else {
            reject('not get any response')
        }
    }).catch(err => console.error(`axios error in query : ${props.query}`, err))
    // }).catch(error => {
    //     if (error.response) {
    //   console.log(error.response.data);
    //   console.log(error.response.status);
    //   console.log(error.response.headers);
    // }
    // })
})

export default Hexapi;