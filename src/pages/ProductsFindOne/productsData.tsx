import { plainone, plaintwo, product1, product2, product3, product4, product5, product6, product7 } from "../../assets";

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
            name: "Jute Bag with Customized Logo",
            images: [product1, product2, product3, product4, product5, product6, product7],
            customImage: plaintwo,
            logoPosition: { top: "17%", left: "60%" ,width: "100px" }, 
            description:
              "Eco-friendly and stylish, our Jute Bag with Customized Logo is the perfect accessory for businesses looking to promote their brand sustainably. Made from durable, natural jute fabric, these bags can be personalized with your company logo or design, offering a unique and environmentally conscious way to showcase your brand. Ideal for corporate giveaways, retail promotions, or trade shows, these bags combine functionality with a strong brand presence",
            sizes: ["S", "M", "L", "XL", "2XL"],
            price: { original: 70.0, discounted: 40.0 },
            additionalInfo: [
              { label: "Material", value: "100% Natural Jute" },
              { label: "Care Instructions", value: "Spot clean or wipe with a damp cloth." },
              { label: "Occasion Type", value: "Corporate giveaways, trade shows, retail promotions, and eco-conscious events." },
              { label: "Design Type", value: "Custom logo printing available in multiple colors and styles." },
              { label: "Country of Origin", value: "Made in India " },
            ],
            features: ["Eco-Friendly", "Customizable", "Durable", "Versatile", "Spacious"],
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
                name: "Caps with Customized Logo Printed",
                images: [product1, product2, product3, product4, product5, product6, product7],
                customImage: plainone,
                logoPosition: {  top: "41%", left: "49%" ,width: "50px"}, 
                description:
                  "Our Caps with Customized Logo Printed offer a stylish and practical way to promote your brand. Made from high-quality, breathable fabric, these caps can be personalized with your logo or design, creating a lasting impression wherever they go. Whether used as corporate gifts, event merchandise, or promotional giveaways, these caps are perfect for showcasing your brand while keeping customers cool and comfortable.",
                sizes: ["S", "M", "L", "XL", "2XL"],
                price: { original: 70.0, discounted: 40.0 },
                additionalInfo: [
                  { label: "Material", value: "Cotton, polyester, or a blend (depending on the selected cap style)." },
                  { label: "Care Instructions", value: "Spot clean or hand wash for best results." },
                  { label: "Occasion Type", value: "Corporate giveaways, promotional events, outdoor activities, and trade shows." },
                  { label: "Design Type", value: " Available in various colors with custom logo printing." },
                  { label: "Country of Origin", value: "Made in China" },
                ],
                features: ["Customizable", "Comfortable", "Durable", "Versatile", "Adjustable Fit"],
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
            id: "3",
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
            id: "4",
                name: "Safety Helmet Customized",
                images: [product1, product2, product3, product4, product5, product6, product7],
                customImage: plainone,
                logoPosition: {  top: "41%", left: "49%" ,width: "50px"}, 
                description:
                  "Our Customized Safety Helmet offers top-notch protection combined with personalized branding. Made from durable, high-quality materials, these helmets provide the necessary safety features for construction workers, industrial workers, and outdoor professionals. With the option to customize with your company logo or design, these helmets ensure your team is both safe and easily identifiable on the job site.",
                sizes: ["S", "M", "L", "XL", "2XL"],
                price: { original: 70.0, discounted: 40.0 },
                additionalInfo: [
                  { label: "Material", value: " High-impact-resistant plastic (e.g., ABS or polycarbonate)." },
                  { label: "Care Instructions", value: "Wipe with a damp cloth for cleaning; inspect regularly for damage." },
                  { label: "Occasion Type", value: " Construction, industrial use, outdoor events, or sports." },
                  { label: "Design Type", value: "Custom logo printing available." },
                  { label: "Country of Origin", value: " Made in India " },
                ],
                features: ["Durable & Strong ", "Comfortable Fit", "Safety Certified ", "Customizable", ],
                descriptiontwo:"Our Safety Helmet Customized provides essential head protection in hazardous work environments while promoting your brand. This helmet is made from durable materials, ensuring safety and comfort, and can be customized with your company logo or message for added visibility. Perfect for real estate companies, construction firms, or industrial projects, these helmets help maintain safety standards while reinforcing brand identity.",
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
            id: "5",
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
            id: "6",
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
            id: "7",
            name: "Customized ID Cards",
            images: [product1, product2, product3, product4, product5, product6, product7],
            customImage: plainone,
            logoPosition: { top: "41%", left: "49%", width: "50px" },
            description:
                "Our Customized ID Cards are the perfect solution for businesses looking to create professional and personalized identification for employees or clients. These high-quality ID cards can be printed with your company logo, employee details, and any other required information. Designed for durability and ease of use, these ID cards ensure safety and professionalism in any environment.",
            sizes: ["S", "M", "L", "XL", "2XL"],
            price: { original: 70.0, discounted: 40.0 },
            additionalInfo: [
                { label: "Material", value: "High-quality PVC or plastic." },
                { label: "Care Instructions", value: "Wipe clean with a damp cloth." },
                { label: "Occasion Type", value: "Corporate offices, events, conferences, employee identification." },
                { label: "Design Type", value: "Custom logo, employee name, and other details can be printed." },
                { label: "Country of Origin", value: "Made in India" },
            ],
            features: ["Customizable", "Durable", "Secure", "Professional Design", "Versatile"],
            descriptiontwo:
                "Our Customized ID Cards offer a secure and professional way to identify employees, visitors, or participants at corporate events. Printed with your logo and personalized details, these ID cards are durable and designed for everyday use. Ideal for real estate companies and any business looking for a professional, branded identification solution.",
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
            id: "8",
            name: "Construction Helmet with Tools Customized",
            images: [product1, product2, product3, product4, product5, product6, product7],
            customImage: plainone,
            logoPosition: { top: "41%", left: "49%", width: "50px" },
            description:
                "Our Construction Helmet with Tools set offers the ultimate combination of safety and utility. The helmet provides essential head protection, while the accompanying tools ensure your team has everything they need for the job. Customize the helmet with your company logo for a professional and branded appearance. Ideal for construction sites, industrial work, and any heavy-duty environments.",
            sizes: ["S", "M", "L", "XL", "2XL"],
            price: { original: 70.0, discounted: 40.0 },
            additionalInfo: [
                { label: "Material", value: "High-impact-resistant plastic for the helmet; stainless steel or alloy for tools." },
                { label: "Care Instructions", value: "Wipe the helmet clean; store tools properly to prevent damage." },
                { label: "Occasion Type", value: "Construction sites, industrial work, outdoor projects." },
                { label: "Design Type", value: "Custom logo printing available on the helmet." },
                { label: "Country of Origin", value: "Made in India" },
            ],
            features: ["Complete Safety Kit", "Customizable", "Durable", "Functional Tools", "Professional Look"],
            descriptiontwo:
                "Our Construction Helmet with Tools provides essential head protection along with a set of handy tools to make on-site work easier. Customizable with your logo, this set is perfect for real estate companies, construction firms, and industrial work environments.",
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
            id: "9",
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
  