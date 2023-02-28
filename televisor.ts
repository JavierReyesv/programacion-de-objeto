class Televisor{
    
     public estaPrendido: boolean = false;
     public canalActual:number = 0;
     public volumenActual: number = 0 ;
     public marca:string = "";
     public esSmartTv:boolean = false;
     public color:string;

      
     public prenderApagar():void{
        if(this.estaPrendido == false){ 
            this.estaPrendido=true; 
        }else{ 
        this.estaPrendido=false; 
    }
     }
     public conocerVolumenActual():number{
        return volumenActual;

     }
     public subirCanal() : void{
        if(this.canalActual<=100){
            this.canalActual++
        }
        
     }
}



