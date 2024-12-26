import { plainone, plaintwo, product1, product2, product3, product4, product5, product6, product7 } from "../../../assets";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: { original: number; discounted: number };
    sizes: string[];
    images: string[];
    customImage: string;
    logoPosition: { top: string; left: string; width: string };
    additionalInfo: { label: string; value: string }[];
    descriptiontwo: string;
    reviews: { name: string; date: string; rating: number; message: string }[];
    features: string[];
  }
  
  export const products: Product[] = [
          {
            id: "1",
                name: "4-in-1 Combo Kit",
                images: [product1, product2, product3, product4, product5, product6, product7],
                customImage: plainone,
                logoPosition: {  top: "41%", left: "49%" ,width: "50px"}, 
                description:
                  "Our 4-in-1 Combo Kit offers the perfect combination of practical, everyday essentials for your business or personal use. This set includes a customized diary, pen, keychain, and card wallet, all personalized with your logo or design. Whether you're looking to create a memorable corporate gift, a branded promotional item, or a thoughtful giveaway, this combo kit has everything you need to leave a lasting impression.",
                sizes: ["S", "M", "L", "XL", "2XL"],
                price: { original: 70.0, discounted: 40.0 },
                additionalInfo: [
                  { label: "Material", value: " Premium leather (diary, wallet), high-quality metal (pen, keychain)." },
                  { label: "Care Instructions", value: "Wipe with a soft cloth for the wallet and diary; spot clean the keychain and pen." },
                  { label: "Occasion Type", value: " Corporate giveaways, trade shows, conferences, employee gifts, and client appreciation." },
                  { label: "Design Type", value: "Custom logo and text printing available on each item." },
                  { label: "Country of Origin", value: " Made in India " },
                ],
                features: ["Complete Set ", "Customizable", "Professional & Practical ", "Quality Materials", ],
                descriptiontwo:"Our Jute Bag with Customized Logo offers a sustainable and practical solution for promoting your brand. Made from eco-friendly jute fabric, these bags are perfect for businesses that want to highlight their commitment to sustainability while providing a high-quality product to their customers. With the option to print your custom logo or design, these bags make great gifts or promotional items for any corporate event, eco-conscious retail campaign, or trade show.",
                reviews: [
                  {
                    name: "John Doe",
                    date: "20 December 2024",
                    rating: 5,
                    message: "Excellent product! I am very happy with my purchase. Fits perfectly.",
                  },
                  {
                    name: "Jane Smith",
                    date: "20 December 2024",
                    rating: 4,
                    message: "Good quality, but a bit tight around the shoulders. Still, a great buy!",
                  },
                ],
          },
          {
            id: "2",
                name: "2-in-1 Combo (Diary & Pen, Water Bottle) Customized",
                images: [product1, product2, product3, product4, product5, product6, product7],
                customImage: plainone,
                logoPosition: {  top: "41%", left: "49%" ,width: "50px"}, 
                description:
                  "Our 2-in-1 Combo combines style and functionality, featuring a high-quality diary with a matching pen and a durable water bottle. Both items can be customized with your logo or design, making this the perfect set for corporate gifting, promotional campaigns, or employee appreciation. This combo is ideal for professionals who value practicality and branding in their everyday essentials.",
                sizes: ["S", "M", "L", "XL", "2XL"],
                price: { original: 70.0, discounted: 40.0 },
                additionalInfo: [
                  { label: "Material", value: " Diary – Premium leatherette or hardbound cover; Water Bottle – Stainless steel or BPA-free plastic." },
                  { label: "Care Instructions", value: "Spot clean the diary; hand wash the bottle for durability." },
                  { label: "Occasion Type", value: " Corporate gifting, trade shows, conferences, and client promotions." },
                  { label: "Design Type", value: "Custom logo and text printing available on both items." },
                  { label: "Country of Origin", value: " Made in India " },
                ],
                features: ["Practical & Stylish", "High-Quality Materials", "Versatile ", "Customizable", ],
                descriptiontwo:"Our 2-in-1 Combo offers a seamless blend of utility and style, featuring a sleek diary with a matching pen and a reusable water bottle. Both items are designed to be customized with your brand's logo or message, making them ideal for corporate giveaways or promotional campaigns. The diary is perfect for jotting down ideas, while the water bottle ensures hydration on the go, making this combo a thoughtful and practical gift.",
                reviews: [
                  {
                    name: "John Doe",
                    date: "20 December 2024",
                    rating: 5,
                    message: "Excellent product! I am very happy with my purchase. Fits perfectly.",
                  },
                  {
                    name: "Jane Smith",
                    date: "20 December 2024",
                    rating: 4,
                    message: "Good quality, but a bit tight around the shoulders. Still, a great buy!",
                  },
                ],
          },
          {
            id: "3",
            name: "4-in-1 Combo Kit (Water Bottle, Backpack, Diary & Pen, Bag) Customized",
            images: [product1, product2, product3, product4, product5, product6, product7],
            customImage: plainone,
            logoPosition: { top: "41%", left: "49%", width: "50px" },
            description:
                "Our 4-in-1 Combo Kit includes a water bottle, backpack, diary & pen, and an additional bag, all customizable with your logo or design. Perfect for corporate gifting or promotional events, this set combines practicality and style, making it an ideal choice for businesses looking to make a lasting impression.",
            sizes: ["S", "M", "L", "XL", "2XL"],
            price: { original: 70.0, discounted: 40.0 },
            additionalInfo: [
                { label: "Material", value: "Backpack & Bag – High-quality fabric or leather; Water Bottle – Stainless steel or BPA-free plastic; Diary – Premium leatherette or hardbound." },
                { label: "Care Instructions", value: "Spot clean the backpack and bag; hand wash the water bottle; wipe the diary and pen with a damp cloth." },
                { label: "Occasion Type", value: "Corporate giveaways, employee appreciation, trade shows, conferences, and promotional campaigns." },
                { label: "Design Type", value: "Custom logo and text printing available on each item." },
                { label: "Country of Origin", value: "Made in India" },
            ],
            features: ["Complete Set", "Customizable", "Durable & Stylish", "Eco-Friendly", "Versatile"],
            descriptiontwo:
                "Our 4-in-1 Combo Kit offers essential items—water bottle, backpack, diary & pen, and bag—each customizable with your logo or design. It’s an ideal, practical gift for corporate events, trade shows, and promotions, ensuring both functionality and branding.",
            reviews: [
                {
                    name: "John Doe",
                    date: "20 December 2024",
                    rating: 5,
                    message: "Excellent product! I am very happy with my purchase. Fits perfectly.",
                },
                {
                    name: "Jane Smith",
                    date: "20 December 2024",
                    rating: 4,
                    message: "Good quality, but a bit tight around the shoulders. Still, a great buy!",
                },
            ],
          },
          {
            id: "4",
            name: "Customized Diary & Pen Set",
            images: [product1, product2, product3, product4, product5, product6, product7],
            customImage: plainone,
            logoPosition: { top: "41%", left: "49%", width: "50px" },
            description:
                "Our Customized Diary & Pen Set offers a sleek and professional solution for note-taking, planning, and gifting. The diary is designed with a premium cover, while the pen offers smooth writing for everyday use. Both items can be customized with your company logo, making it an ideal gift for corporate events, employee appreciation, or client promotions.",
            sizes: ["S", "M", "L", "XL", "2XL"],
            price: { original: 70.0, discounted: 40.0 },
            additionalInfo: [
                { label: "Material", value: "Diary – Premium leatherette or hardbound cover; Pen – High-quality ink with sleek design." },
                { label: "Care Instructions", value: "Wipe clean for the diary; replace pen refills when needed." },
                { label: "Occasion Type", value: "Corporate gifting, trade shows, employee gifts, and promotional events." },
                { label: "Design Type", value: "Custom logo and text printing available on both items." },
                { label: "Country of Origin", value: "Made in India" },
            ],
            features: ["Complete Set", "Customizable", "Durable", "Professional Design", "Perfect for Gifting"],
            descriptiontwo:
                "Our Customized Diary & Pen Set is the perfect combination of practicality and branding. Personalize both the diary and pen with your logo, making it ideal for corporate gifts, trade shows, or client promotions. With premium materials and a professional look, this set ensures your brand stands out.",
            reviews: [
                {
                    name: "John Doe",
                    date: "20 December 2024",
                    rating: 5,
                    message: "Excellent product! I am very happy with my purchase. Fits perfectly.",
                },
                {
                    name: "Jane Smith",
                    date: "20 December 2024",
                    rating: 4,
                    message: "Good quality, but a bit tight around the shoulders. Still, a great buy!",
                },
            ],
          } 
      
        
      
        
  ];
  