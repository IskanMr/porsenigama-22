import { PageHeader } from "./Components/PageHeader";
import { PageFooter } from "./Components/PageFooter";
import * as pages from "./pages";
import { Switch, Route } from "react-router-dom";
import ScrollIntoView from "./Components/Layout/hooks/ScrollIntoView";

function App() {
  return (
    <div>
      <PageHeader />
      <ScrollIntoView>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            exact
            component={pages.Home}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/klasemen`}
            exact
            component={pages.Standings}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/cabang`}
            exact
            component={pages.Cabang}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/cabang/:id`}
            render={(props) => <pages.CabangDetail {...props} />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/galeri`}
            exact
            component={pages.Galeri}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/faq`}
            exact
            component={pages.Faq}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/katalog`}
            exact
            component={pages.Katalog}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/katalog/:id`}
            render={(props) => <pages.KatalogDetail {...props} />}
          />
          {/* The 404 page */}
          <Route component={pages.NotFound} />
        </Switch>
      </ScrollIntoView>
      <PageFooter />
    </div>
  );
}

export default App;
