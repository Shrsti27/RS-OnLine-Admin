"use client";

import React, {useState} from "react";
import SwichMode from "@/components/swichMode";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import AdminLoginForm from "@/components/projectComponents/Forms/AdminLoginForm";
import UserLoginForm from "@/components/projectComponents/Forms/UserLoginForm";

export default function page() {
  

  return (
    <main className="flex h-screen flex-col items-center justify-center sm:p-12  md:p-24">
      <div className="p-1 border-0 w-auto flex items-center justify-center">
        <form action="#">
          <div className="mb-5 flex justify-between items-center">
            <h1 className="font-semibold text-3xl  ml-2">Login</h1>
            <SwichMode />
          </div>

          <Tabs defaultValue="account" className="w-[300px]  md:w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="admin">Admin</TabsTrigger>
              <TabsTrigger value="user">User</TabsTrigger>
            </TabsList>
            <TabsContent value="admin">
              <AdminLoginForm/>
            </TabsContent>
            <TabsContent value="user">
              <UserLoginForm/>
            </TabsContent>
          </Tabs>
        </form>
      </div>
    </main>
  );
}

