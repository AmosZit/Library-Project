import { Item } from './Item';


  export class Books{
 
    public constructor( 
      public kind ?: string,
      public id ?: string ,
      public totalItems ?: number,
      public items ?: Item[],
                         
      )
                      
      {
  
      }
  }
  