import { importProvidersFrom } from "@angular/core";
import { AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective } from "./accordion";
import { CommonModule } from "@angular/common";

export const SharedModule_config ={
    
    providers: [
        importProvidersFrom(CommonModule)
    ],
    declarations: [
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective,
    ],
}