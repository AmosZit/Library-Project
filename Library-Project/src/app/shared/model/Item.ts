
import { AccessInfo } from './accessInfo';
import { VolumeInfo } from './VolumeInfo';
import { SaleInfo } from './SaleInfo';


export class Item {
 
  public constructor( 

    public kind: string,
    public id: string,
    public etag: string,
    public selfLink: string,
    public volumeInfo: VolumeInfo,
    public saleInfo: SaleInfo,
    public accessInfo: AccessInfo,


                       
    )
                    
    {

    }
}

