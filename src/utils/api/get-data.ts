

export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.COSMIC_BUCKET_SLUG}/objects/${process.env.COSMIC_BUCKET_ID}?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata,type`, { next: { revalidate: 120 } })


        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }

        return res.json()
    } catch (err) {
        throw new Error("Failed to fetch data")
    }
}


export async function getSubMenu() {
    try {

        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.COSMIC_BUCKET_SLUG}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title` , { next: { revalidate:120}})


        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/devmotors-production-0db0ad50-25ef-11f1-aef4-37efac6b10eb/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=TDvTVz5lJdnnIUaByQRzB5AhnORnYqo6ALpAFe3fDSbfuSgWzc&depth=1&props=slug,title,`, { next: { revalidate: 120 } })


        //https://api.cosmicjs.com/v3/buckets/devmotors-production-0db0ad50-25ef-11f1-aef4-37efac6b10eb/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=TDvTVz5lJdnnIUaByQRzB5AhnORnYqo6ALpAFe3fDSbfuSgWzc&depth=1&props=slug,title,

        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }


        return res.json()

    } catch (error) {
        throw new Error("Failed to fetch data")
    }
}



export async function getPageBySlug(slug: string) {


    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.COSMIC_BUCKET_SLUG}/objects`

    //definindo o objeto de consulta pelo slug

    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: slug
        }),
        props: 'slug.title.metadata',
        read_key: process.env.COSMIC_READ_KEY as string
    })

    const url = `${baseURL}?${queryParams.toString()}`



    try {
        const res = await fetch(url, { next: { revalidate: 120 } })

        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }

        return res.json()
    } catch (err) {
        throw new Error("Failed to fetch data")
    }
}