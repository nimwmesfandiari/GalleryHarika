// دیتابیس محصولات فروشگاه هاریکا
const productsDB = [
    // --- تیشرت طرح دار ---
    {
        id: 101,
        category: "تیشرت",
        subStyle: "تیشرت طرح دار",
        size: "XL",
        title: "تیشرت طرح دار هاریکا",
        price: "2,500,000",
        fabric: "پارچه ماکان گرم بالا با تضمین جنس و کیفیت",
        colors: ["#000000", "#ffffff"], // مشکی و سفید
        image: "https://s27.uupload.ir/files/logopng/F0B09F51-7986-411C-91B1-612C3B1ABB32.png",
        stock: 5
    },

    // --- تیشرت‌های باکسی ---
    {
        id: 1,
        category: "تیشرت",
        subStyle: "تیشرت باکسی",
        size: "XL",
        title: "تیشرت باکسی هاریکا Oval",
        price: "680,000",
        fabric: "۱۰۰٪ نخ پنبه سوپر شانه شده (دورس دو نخ بدون کرک)",
        colors: ["#000000", "#ffffff", "#808080"], // مشکی، سفید، طوسی
        image: "https://s17.uupload.ir/files/logopng/logo.png",
        stock: 5
    },
    {
        id: 2,
        category: "تیشرت",
        subStyle: "تیشرت باکسی",
        size: "XL",
        title: "تیشرت باکسی Minimal",
        price: "720,000",
        fabric: "پنبه لاکرا درجه یک با کشسانی بالا و تنخور فوق‌العاده",
        colors: ["#5c4033", "#000000"], // قهوه‌ای، مشکی
        image: "https://s17.uupload.ir/files/logopng/logo.png",
        stock: 3
    },
    {
        id: 3,
        category: "تیشرت",
        subStyle: "تیشرت باکسی",
        size: "L",
        title: "تیشرت باکسی Streetwear",
        price: "750,000",
        fabric: "پنبه ۱۰۰٪ سنگ‌شور شده مقاوم در برابر شست‌وشو",
        colors: ["#1a252f", "#27ae60"], // سرمه‌ای، سبزی یشمی
        image: "https://s17.uupload.ir/files/logopng/logo.png",
        stock: 4
    },
    {
        id: 4,
        category: "تیشرت",
        subStyle: "تیشرت باکسی",
        size: "2XL",
        title: "تیشرت باکسی Heavy Weight",
        price: "790,000",
        fabric: "پارچه گباردین پنبه‌ای سنگین با گراماژ بالا",
        colors: ["#000000", "#d35400"], // مشکی، آجری
        image: "https://s17.uupload.ir/files/logopng/logo.png",
        stock: 2
    },

    // --- شلوارها ---
    {
        id: 5,
        category: "شلوار لی",
        subStyle: "شلوار مام فیت",
        size: "32",
        title: "شلوار لی مام فیت زغال‌سنگی",
        price: "1,100,000",
        fabric: "جین ۱۲ اونس سنگ‌شور شده بدون آبرفت",
        colors: ["#333333", "#1a252f"],
        image: "https://s17.uupload.ir/files/logopng/logo.png",
        stock: 1
    }
];
