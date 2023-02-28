import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./routes/dashboard-layout/dashboard-layout.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import Notifications from "./routes/notifications/notifications.component";
import Report from "./routes/report/report.component";
import Signin from "./routes/signin/signin.component";
import SettingsLayout from "./routes/settings-layout/settings-layout.component";
import Config from "./routes/config/config.component";
import Branding from "./routes/branding/branding.component";
import Reports from "./routes/reports/reports.component";
import Users from "./routes/users/users.component";
import Scheduling from "./routes/scheduling/scheduling.component";
import { NotFound } from "./routes/not-found/not-found.component";

export const App = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="reports/marketing/:report" element={<Report />} />
        <Route path="reports/finance/:report" element={<Report />} />
        <Route path="reports/hr/:report" element={<Report />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<SettingsLayout />}>
          <Route path="admin/config" element={<Config />} />
          <Route path="admin/branding" element={<Branding />} />
          <Route path="reports" element={<Reports />} />
          <Route path="users" element={<Users />} />
          <Route path="scheduling" element={<Scheduling />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
