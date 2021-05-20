import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";



@Injectable()
export class AuthIntercepter implements HttpInterceptor{

    constructor (private loginService:LoginService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
        let authRequest=req;
        //add jwt token
        const token=this.loginService.getTokenFromLocalStorage();

        console.log("inside intercepter");
        if(token!=null){

            authRequest=authRequest.clone({
                setHeaders:{
                    Authorization:`Bearer ${token}`
                }
            });
        }


        return next.handle(authRequest);


    }
    
}



export const authIntercepterProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthIntercepter,
        multi:true
    }
];