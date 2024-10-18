import { useLocation, Link } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter((x) => x);

  let breadCrumbPath = "";

  return (
    <div>
      {pathnames.length > 0 && <Link to={"/"}>Home</Link>}
      {pathnames.map((linkname, index) => {
        const lastLink = index === pathnames.length - 1;

        breadCrumbPath += linkname;
        console.log(breadCrumbPath, "breadCrumbPath");
        return lastLink ? (
          <span key={breadCrumbPath}>/{linkname}</span>
        ) : (
          <Link to={breadCrumbPath} key={breadCrumbPath}>
            /{linkname}
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
