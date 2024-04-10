import { Link } from "react-router-dom";
export default function Farmer() {
  return (
    <Link
      to="/seller/1234"
      className="w-full rounded-md relative overflow-hidden aspect-[5/6]"
    >
      <img
        src="https://images.unsplash.com/photo-1537721664796-76f77222a5d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZhcm1lcnN8ZW58MHx8MHx8fDA%3D"
        alt="Farmer Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 w-full bg-black/40 text-white text-center py-2">
        <h4 className="text-lg">Farmer Name</h4>
        <p className="text-sm">Farmer Slug</p>
      </div>
    </Link>
  );
}
