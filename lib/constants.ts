import { type Testimonial } from "..";

export const reasons = [
    {
        title: "Luxury facilities",
        body: "The advantage of hiring a workspacewith us is that we give you comfortable services and all-around facilities"
    },
    {
        title: "Affordable Prices",
        body: "You can get a worksapce of the highest quality at an affordableprice and still enjoy the facilities that are only here"
    },
    {
        title: "Many Choices",
        body: "We provide many unique workspace choices so that you can choose the workspace of your liking"
    },
];

const CHAIR = 'Chair';
export const BestSellingProducts = [
    {
        name: 'Sakaris Armchair',
        img_url: '/assets/sakaris_armchair.png',
        kind: CHAIR,
        rating: 5,
        price: 392,
    },
    {
        name: 'Baltsar Chair',
        img_url: '/assets/baltsar_chair.png',
        kind: CHAIR,
        rating: 5,
        price: 299,
    },
    {
        name: 'Anjay Chair',
        img_url: '/assets/anjay_chair.png',
        kind: CHAIR,
        rating: 5,
        price: 519,
    },
    {
        name: 'Nyantuy Chair',
        img_url: '/assets/nyantuy_chair.png',
        kind: CHAIR,
        rating: 5,
        price: 921,
    }
]

export const testimonials: Testimonial[] = [
    {
        name: "Bang Upin",
        img_url: "/assets/",
        bg_img: "/assets/testimonial_bg_1.png",
        company_name: "Pedagang Asangan",
        review: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal"
    },
    {
        name: "Ibuk Sukijan",
        img_url: "/assets/",
        bg_img: "/assets/testimonial_bg_2.png",
        company_name: "Ibu Rumman Tonga",
        review: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah"
    },
    {
        name: "Mpok Ina",
        img_url: "/assets/",
        bg_img: "/assets/testimonial_bg_3.png",
        company_name: "Karyawon Swasta",
        review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak"
    }
]