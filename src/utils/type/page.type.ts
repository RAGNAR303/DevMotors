export interface PostProps {
    objects: SlugProps[]
}


export interface SlugProps{ 
  
    metadata: {
        banner: {
          url: string,
         
        },
        title: {
          heading: string ,
          resume: string,
        },
        button: {
          text: string,
          url: string
        },
        about: {
          title: string,
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