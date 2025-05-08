import { MdFilterList } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface Props {
  userLinks: {
    path: string;
    title: string;
  }[];
  sellerLinks: {
    path: string;
    title: string;
  }[];
  user?: User;
  currentPage: string;
}

export default function MobileNav({
  userLinks,
  sellerLinks,
  currentPage,
  user,
}: Props) {
  const isSeller = user?.type === "farmer" || user?.type === "wholesaler";

  return (
    <div className="flex justify-between items-center p-4 bg-light-grey-clr md:hidden">
      <h3 className="text-lg font-semibold uppercase">{currentPage}</h3>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="m-1">
          <MdFilterList className="text-2xl" />
        </div>
        <ul
          id="dropdown-content"
          tabIndex={0}
          className="dropdown-content z-1 menu p-2 shadow-sm bg-base-100 rounded-box w-52"
        >
          {userLinks.map((link, idx) => (
            <li key={idx}>
              <NavLink className="py-3" to={link.path}>
                {link.title}
              </NavLink>
            </li>
          ))}

          {isSeller && (
            <div>
              <p className="text-sm font-semibold uppercase mt-5 mb-2 border-b">
                sellers
              </p>
              {sellerLinks.map((link, idx) => (
                <li key={idx}>
                  <NavLink className="py-3" to={link.path}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
