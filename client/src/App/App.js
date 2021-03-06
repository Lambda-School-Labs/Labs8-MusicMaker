// Displays components and pageViews
import React, { Component } from "react";
import { Route } from "react-router-dom";

import withAuthentication from "../components/Auth/withAuthentication";
import * as routes from "../components/Routes/routes";
import Navigation from "../components/Navigation/NavBar";
import LandingPageView from "../components/LandingPage/landingPageView";
import SignUpView from "../components/SignUp/signupView";
import SignInView from "../components/SignIn/signinView";
import Sidebar from "../components/TeacherDashboard/Sidebar/sidebar";
import DashboardView from "../components/TeacherDashboard/HomeTab/dashboardView";
import StudentListView from "../components/TeacherDashboard/StudentsTab/studentListView";
import DashboardAssignmentsView from "../components/TeacherDashboard/AssignmentsTab/dashboardAssignmentsView";
import CreateAssignmentView from "../components/TeacherDashboard/CreateAssignment/createAssignmentView";
import DashboardBillingView from "../components/TeacherDashboard/BillingTab/dashboardBillingView";
import DashboardSettingView from "../components/TeacherDashboard/SettingsTab/dashboardSettingView";
import GradeAssignmentView from "../components/TeacherDashboard/GradeAssignment/gradeAssignmentView";
import StudentAssignmentsView from "../components/TeacherDashboard/StudentsTab/studentAssignmentsView";
import AssignmentStudentsView from "../components/TeacherDashboard/AssignmentsTab/assignmentStudentsView";
import { AppContainer, HeaderContainer, ContentContainer, SidebarContainer, PageViewContainer } from "./AppStyle";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <HeaderContainer>
          <Navigation />
        </HeaderContainer>

        <ContentContainer>
          <Route exact path={routes.LANDING} component={LandingPageView} />
          <Route exact path={routes.SIGN_UP} component={SignUpView} />
          <Route exact path={routes.SIGN_IN} component={SignInView} />

          <SidebarContainer>
              <Sidebar />
          </SidebarContainer>

          <PageViewContainer>
            

            <Route exact path={routes.DASHBOARD} component={DashboardView} />
            <Route exact path={routes.STUDENTS} component={StudentListView} />
            <Route exact path={routes.STUDENTSASSIGNMETS} component={StudentAssignmentsView} />
            <Route exact path={routes.CREATE_ASSIGNMENT} component={CreateAssignmentView} />
            <Route exact path={routes.ASSIGNMENTS} component={DashboardAssignmentsView} />
            <Route exact path={routes.ASSIGNMENT_STUDENTS} component={AssignmentStudentsView} />
            <Route exact path={routes.BILLING} component={DashboardBillingView} />
            <Route exact path={routes.SETTINGS} component={DashboardSettingView} />
            <Route exact path={routes.GRADING} component={GradeAssignmentView} />
          </PageViewContainer>
        </ContentContainer>
      </AppContainer>
    );
  }
}

export default withAuthentication(App);
