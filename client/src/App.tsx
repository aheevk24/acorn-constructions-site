import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import BinRental from "@/pages/BinRental";
import Demolition from "@/pages/Demolition";
import Excavation from "@/pages/Excavation";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ServiceAreas from "@/pages/ServiceAreas";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import ThankYou from "@/pages/ThankYou";
import CityServiceLanding from "@/pages/CityServiceLanding";
import { CITY_SERVICE_LANDING_ENTRIES } from "@/data/cityServicePages";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/bin-rental" component={BinRental} />
        <Route path="/demolition" component={Demolition} />
        <Route path="/excavation" component={Excavation} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/service-areas" component={ServiceAreas} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/thank-you" component={ThankYou} />
        {CITY_SERVICE_LANDING_ENTRIES.map((entry) => (
          <Route key={entry.slug} path={`/${entry.slug}`}>
            {() => <CityServiceLanding city={entry.city} service={entry.service} />}
          </Route>
        ))}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
