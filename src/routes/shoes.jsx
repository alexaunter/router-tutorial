import BrandLink from '../components/brand_link';

export default function Shoes() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Shoes</h2>
        <BrandLink brand="nike">Nike</BrandLink>
        <BrandLink brand="adidas">Adidas</BrandLink>
        <BrandLink brand="reebok">Reebok</BrandLink>
    </main>
  );
}
