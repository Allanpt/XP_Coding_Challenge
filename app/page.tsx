import BreadcrumbComp from "./components/breadcrumbs";
import Header from "./components/Header/header";
import Main from "./main";

export default function Home() {
  return (
    <div>
      <Header/>
      <BreadcrumbComp/>
      <Main/>
    </div>
  );
}
