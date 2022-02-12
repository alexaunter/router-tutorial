import { useSearchParams, Link } from "react-router-dom";

export default function BrandLink({ brand, ...props }) {
  let [params] = useSearchParams();
  let isActive = params.getAll("brand").includes(brand);
  return (
    <Link
      className={isActive ? "red" : "" }
      to={`/shoes?brand=${brand}`}
      {...props}
    />
  );
}
