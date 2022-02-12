import {
  Outlet,
  useSearchParams
} from "react-router-dom";
import { getInvoices } from "../data";
import QueryNavLink from "../components/query_nav_link";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter(invoice => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.includes(filter.toLowerCase());
          })
          .map(invoice => (
                    <QueryNavLink
            className={({ isActive }) => isActive ? "red" : "blue"}
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </QueryNavLink>
        ))}
      </nav>
      <Outlet/>
    </div>
  );
}
