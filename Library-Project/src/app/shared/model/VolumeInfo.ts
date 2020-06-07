import { ImageLinks } from './ImageLinks';
import { PanelizationSummary } from './PanelizationSummary';
import { ReadingModes } from './ReadingModes';
import { IndustryIdentifier } from './IndustryIdentifier';
import { Dimensions } from './Dimention';


export class VolumeInfo {
 
    public constructor( 

      
      public title: string,
      public subtitle: string,
      public authors: string[],
      public publisher: string,
      public publishedDate: string,
      public description: string,
      public industryIdentifiers: IndustryIdentifier[],
      public readingModes: ReadingModes,
      public pageCount: number,
      public printedPageCount: number,
      public dimensions: Dimensions,
      public printType: string,
      public categories: string[],
      public maturityRating: string,
      public allowAnonLogging: boolean,
      public contentVersion: string,
      public panelizationSummary: PanelizationSummary,
      public imageLinks: ImageLinks,
      public language: string,
      public previewLink: string,
      public infoLink: string,
      public canonicalVolumeLink: string,
                       
       )
                    
    {
  
    }
  }