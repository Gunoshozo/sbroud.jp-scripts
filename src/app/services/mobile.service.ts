import { Injectable } from "@angular/core";

@Injectable()
export class MobileService {
    public isMobile(): boolean {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)
    }
    
}