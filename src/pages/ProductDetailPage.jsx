import { useEffect, useState } from "react";
import ProductDetailComponent from "../components/ProductDetailComponent";
import { useParams } from "react-router"; // Use "react-router-dom" if using web router

export default function ProductDetailPage() {
    const { slug } = useParams();
    
    console.log("==> Value of slug : ", slug);

    const [singleProduct, setSingleProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        if (!slug) return; 

        async function fetchingSingleData() {
            try {
                setLoading(true);
                const response = await fetch(`https://api.escuelajs.co/api/v1/products/slug/${slug}`);
                const singleData = await response.json();
                
                setSingleProduct(singleData); 
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        }
        
        fetchingSingleData();
    }, [slug]); 

    if (loading) return <div>Loading product...</div>;
    if (!singleProduct) return <div>Product not found.</div>;

    return (
        <div>
            <ProductDetailComponent
                title={singleProduct.title}
                image={singleProduct.images?.[0] || singleProduct.image} 
                description={singleProduct.description}
                price={singleProduct.price}
            />
        </div>
    );
}
