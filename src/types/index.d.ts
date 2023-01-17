type CodeType = "codabar" | "code11" | "code39" | "code93" | "code128" | "ean8" | "ean13" |  "std25" |  "int25";
type OptionType = {
    width?:number;
    barWidth?:number;
    barHeight?:number;
    moduleSize?:number;
    marginHRI?:number;
    fontSize?:number;
    posX?:number;
    posY?:number;
    showHRI?:boolean;
    addQuietZone?:boolean;
    bgColor?:string;
    color?:string;
}

export default function barcode(code: string, type: CodeType, options: OptionType): string