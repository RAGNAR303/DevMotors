export interface PostProps {
    objects: SlugProps[]
}


interface SlugProps{ 
  
    metadata: {
        banner: {
          url: string,
         
        },
        tittle: {
          heading: string ,
          resume: string,
        },
        button: {
          text: string,
          url: string
        },
        about: {
          titlte: string,
          description: string,
          banner: {
            url: string,
           
          },
          button_active: boolean,
          button_title: string,
          button_url: string
        }
      }
}