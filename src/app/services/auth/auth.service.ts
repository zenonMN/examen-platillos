import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ProfileService } from "./profile.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private profileService: ProfileService){

        }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.profileService.getUser()) {
        this.router.navigate(['login']);
        return false;
       }
       return true;
    }

}

@Injectable()
export class AuthGuardInit implements CanActivate {
    constructor(private router: Router,
        private profileService: ProfileService){

        }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.profileService.getUser()) {
        this.router.navigate(['welcome']);
        return false;
       }
       return true;
    }

}