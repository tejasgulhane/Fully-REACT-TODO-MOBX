import { observable, computed, action, autorun, makeObservable } from 'mobx';
import { useNavigate  } from 'react-router';
import { Navigate } from 'react-router';

class Authstore {
   

    issignup = false
    isAuthenticated =false
    constructor() {
        makeObservable(this , {
            issignup:observable,
            isAuthenticated:observable,
            gotologin:action,
            gotoTodo:action,
            signout:action,
        });
    }

    gotologin =() =>{
        this.issignup = true;
        localStorage.setItem("issignup",true)
    }

    signout = () =>{
        this.issignup = false;
        this.isAuthenticated =false
        localStorage.removeItem("isAuthenticated")

    }

    gotoTodo =() =>{
        localStorage.setItem("isAuthenticated",true)
        this.isAuthenticated = true;
    }

}

export default Authstore;
