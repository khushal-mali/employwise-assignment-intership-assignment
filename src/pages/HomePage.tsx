// import { AppSidebar } from "@/components/app-sidebar";
// import { DataTable } from "@/components/data-table";
// import { SiteHeader } from "@/components/site-header";
// import data from "../lib/data.json";
import LoadingSpinner from "@/components/LoadingSpinner";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const SiteHeader = React.lazy(() =>
  import("@/components/site-header").then((module) => ({ default: module.SiteHeader }))
);
const DataTable = React.lazy(() =>
  import("@/components/data-table").then((module) => ({ default: module.DataTable }))
);
const AppSidebar = React.lazy(() =>
  import("@/components/app-sidebar").then((module) => ({ default: module.AppSidebar }))
);

const HomePage = () => {
  return (
    <SidebarProvider>
      <React.Suspense>
        <AppSidebar variant="inset" />
      </React.Suspense>

      <SidebarInset>
        <React.Suspense>
          <SiteHeader />
        </React.Suspense>

        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* <SectionCards /> */}
              {/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div> */}
              <React.Suspense fallback={<LoadingSpinner />}>
                <DataTable />
              </React.Suspense>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default HomePage;
