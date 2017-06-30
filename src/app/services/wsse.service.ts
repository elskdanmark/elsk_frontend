import { Injectable }    from '@angular/core';
import * as CryptoJs from "crypto-js";

@Injectable()
export class WsseService {

    created:string;
    nonce:string;

    getWsseHeader(username, password):string{
        return 'UsernameToken ' + ["Username=\"" + (username) + "\"", "PasswordDigest=\"" + (this.passwordDigest(password)) + "\"", "Nonce=\"" + (this.digestNonce(this.getNonce())) + "\"", "Created=\"" + (this.getCreated()) + "\""].join(', ');

    }

    passwordDigest(password){
        //console.log(this.getNonce());
        let text = this.getNonce() + this.getCreated() + password;
        let shaText = CryptoJs.SHA1(text);
        return CryptoJs.enc.Base64.stringify(shaText);
    }

    getNonce():string {
        if (this.nonce) return this.nonce ;
        else{
            this.nonce = this.generateNonce();
            return this.nonce ;
        }
    }

    digestNonce(nonce):string{
        let nonceUtf = CryptoJs.enc.Utf8.parse(nonce);
        return CryptoJs.enc.Base64.stringify(nonceUtf);
    }

    generateNonce():string {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function() {
            return Math.floor(Math.random() * 256).toString(16);
        }).join('');
    }

    newCreated():string {
        return new Date().toISOString();
    }

    getCreated():string{
        if (this.created) return this.created ;
        else {
            this.created = this.newCreated();
            return this.created;
        }
    }
}