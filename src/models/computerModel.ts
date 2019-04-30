import { InternalFormsSharedModule } from "@angular/forms/src/directives";

export class CDetail {
    Id:number;
    Lb_no:number;
    sl_no:string;
    make:string;
    Cloan:Cloan;

    
    
}

interface Cloan {
    Id:number;
    serNo:number;
}

export interface ComputerModel{
    logBook:number;
    itemMake:string;
    serialNo:string;
    loanHolder:number;
}