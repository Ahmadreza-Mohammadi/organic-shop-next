import Image from "next/image";

interface Product {
    id: number;
    name: string;
    price: string;
    oldPrice?: string;
    rating: number;
    image: string;
    isOnSale?: boolean;
    isLocked?: boolean;
}


const RelatedProducts: Product[] = [
    {
        id: 1,
        name: "سیب سبز",
        price: "۱۴٫۹۹ دلار",
        oldPrice: "۲۰٫۹۹ دلار",
        rating: 4.5,
        image: "https://hips.hearstapps.com/hmg-prod/images/close-up-of-green-apple-against-white-background-royalty-free-image-1659450368.jpg",
        isOnSale: true,
        isLocked: true,
    },
    {
        id: 2,
        name: "کلم چینی",
        price: "۱۴٫۹۹ دلار",
        rating: 4,
        image: "https://tse4.mm.bing.net/th?id=OIP.hPhD19Fjqh--kmQ1Iv7VQAHaHa&pid=Api&P=0&h=220",
        isLocked: true,
    },
    {
        id: 3,
        name: "فلفل دلمه‌ای سبز",
        price: "۱۴٫۹۹ دلار",
        rating: 4,
        image: "https://www.lipmanfamilyfarms.com/wp-content/uploads/2020/09/Green-Bell-Pepper-hero@2x.png",
    },
    {
        id: 4,
        name: "بامیه",
        price: "۱۴٫۹۹ دلار",
        rating: 4,
        image: "https://tse1.mm.bing.net/th?id=OIP.Rgi9THhFMyvfT4XLW0WECwHaHa&pid=Api&P=0&h=220",
        isLocked: true,
    },
];


const BottomSingle: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">محصولات مرتبط</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {RelatedProducts.map((product) => (
                    <div
                        key={product.id}
                        className={`border ${product.name === "فلفل دلمه‌ای سبز" ? "border-green-500" : "border-gray-200"
                            } rounded-lg p-4 relative`}
                    >
                        {product.isOnSale && (
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                حراج ۵۰٪
                            </span>
                        )}
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={100}
                            height={100}
                            className="rounded"
                        />
                        <h3 className="mt-2 font-medium">{product.name}</h3>
                        <div className="text-gray-700 text-sm">
                            <span className="font-bold">{product.price}</span>
                            {product.oldPrice && (
                                <span className="line-through ml-2 text-gray-500">{product.oldPrice}</span>
                            )}
                        </div>
                        <div className="text-yellow-500 text-sm mt-2">{`⭐`.repeat(product.rating)}</div>
                        {product.isLocked && (
                            <div className="absolute top-2 right-2 text-gray-500">
                                <span>🔒</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BottomSingle;
