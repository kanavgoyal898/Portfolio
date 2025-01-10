import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'gfd84wnk',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-08-31',
    token: 'sk70RVv2awZBmQr07sRNmODPxKYkeJjXcVLbC6yiB8hUwk5g2VteFXeYjEvIOi9j2XgVnFJQHa8lQeSCQWyue9aZ8hm9EsE87m1L0M0NWD4i2R63KpQw29N7ONHsVJ3IZthZB38qInZGcWs7xcHEWIGFs3KD4RPDPSNu3PAgQq9hw7qsjZEH',
})

const query = '*[_type == "profile"]'

client.fetch(query).then((data) => {
    console.log(JSON.stringify(data, null, 2))
}).catch((err) => {
    console.error('Error fetching data:', err)
})
