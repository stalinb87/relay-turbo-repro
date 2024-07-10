"use client";
import QueryRoot from "../components/QueryRoot";
import { RelayEnvironmentProvider } from "react-relay";
import UserList from "../components/UserList";

export default function Home() {
  return (
    <RelayEnvironmentProvider
      environment={
        {
          // (environment would go here, but not needed for repro)
        }
      }
    >
      <QueryRoot />
      <UserList />
    </RelayEnvironmentProvider>
  );
}
