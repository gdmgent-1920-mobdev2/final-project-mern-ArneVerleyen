import React from 'react';

// Router importeren
import { BrowserRouter as Router, Redirect, Switch  } from 'react-router-dom';

// Eigen bestand imports de pages
import {
	ContactPage,
	HomePage,
	SignInPage,
	
	EventDetailPage,
	EventPagePaged,
	EventPage,

	VenuePage,
	VenueDetailPage,
} from './pages';

// admin imports

import {
	AdminPage,
} from './admin/pages'

// Meer eigen imports 
import { RouteWithLayout } from './utilities';
import { PageLayOut, BackofficeLayout } from './layout';
import * as Routes from './routes';

import { ApiProvider } from './services';

// Css import
import '../app/app.scss';



// App
function App() {
  return (
    <div className="App">
			<ApiProvider>
				<Router basename='/'>
					<Switch>
						<RouteWithLayout exact path= {Routes.LANDING} component={HomePage} layout={PageLayOut} />
						<Redirect exact path = {Routes.HOME} to = {Routes.LANDING} />
						<RouteWithLayout exact path = {Routes.CONTACT} component={ContactPage} layout={PageLayOut} />
						<RouteWithLayout exact path = {Routes.AUTH_SIGN_IN} component={SignInPage}  />

						<RouteWithLayout exact path = {Routes.EVENT_PAGE} component={EventPagePaged} layout={PageLayOut} />
						<RouteWithLayout exact path = {Routes.EVENT_DETAIL} component={EventDetailPage} layout={PageLayOut} />
						<RouteWithLayout exact path = {Routes.EVENT_ALL} component={EventPage} layout={PageLayOut} />
						
						<RouteWithLayout exact path = {Routes.VENUE_PAGE} component={VenuePage} layout={PageLayOut} />
						<RouteWithLayout exact path = {Routes.VENUE_DETAIL} component={VenueDetailPage} layout={PageLayOut} />

						<RouteWithLayout path = {Routes.BACKOFFICE_LANDING} component={AdminPage} layout={BackofficeLayout} />
					</Switch>
				</Router>
			</ApiProvider>
	 </div>
  );
}

export default App;


