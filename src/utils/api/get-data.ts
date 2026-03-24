export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.COSMIC_BUCKET_SLUG}/objects/${process.env.COSMIC_BUCKET_ID}?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata,type`)


        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }

        return res.json()
    } catch (err) {
        throw new Error("Failed to fetch data")
    }
}