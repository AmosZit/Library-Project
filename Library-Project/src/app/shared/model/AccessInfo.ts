import { Epub } from './Epub';
import { Pdf } from './Pdf';

export class AccessInfo {
 
  public constructor( 

    public  country: string,
    public viewability: string,
    public embeddable: boolean,
    public publicDomain: boolean,
    public textToSpeechPermission: string,
    public epub: Epub,
    public pdf: Pdf,
    public webReaderLink: string,
    public accessViewStatus: string,
    public quoteSharingAllowed: boolean,
  


                       
    )
                    
    {

    }
}