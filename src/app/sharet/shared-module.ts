import { importProvidersFrom } from "@angular/core";
import { AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective } from "./accordion";
import { CommonModule } from "@angular/common";

export const SharedModule_config ={
    exports:[
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective,
    ],
    declarations: [
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective,
    ],
}