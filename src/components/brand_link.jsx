import { useSearchParams, Link } from "react-router-dom";

export default function BrandLink({ brand, ...props }) {
  let [params] = useSearchParams();
  let brands = params.getAll("brand");
  let isActive =
    brands.includes(brand);
  if (!isActive) {
    params.append("brand", brand);
  } else {
    params = new URLSearchParams(
      Array.from(params).filter(
        ([key, value]) => key !== "brand" || value !== brand
      )
    );
  }
  return (
    <Link
      className={isActive ? "red" : "" }
      to={`/shoes?${params.toString()}`}
      {...props}
    />
  );
}
