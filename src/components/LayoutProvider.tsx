"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { ConfigProvider, message } from "antd";
import Sidebar from "./Sidebar";

function LayoutProvider({ children }: { children: React.ReactNode }) {
 
  const router = useRouter();
 
  const pathname = usePathname();

  
  

  
  

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#213555",
            },
          }}
        >
         

          {/* if route is login or register , dont show layout */}

          {pathname === "/login" || pathname === "/register" ? (
            <div>{children}</div>
          ) : (
          
              <div className="layout-parent">
                <div className="sidebar">
                  
                  <Sidebar/>

                </div>
                <div className="body">{children}</div>
              </div>
            
          )}
        </ConfigProvider>
      </body>
    </html>
  );
}

export default LayoutProvider;