import React from "react";
import { Button } from "@/components/ui/button";
import { Banner } from "./Banner";
import { Features } from "./Features";
import { ApplyForm } from "./ApplyForm";
import Campus from "./Campus";
import Events from "./Events";
import HowToApply from "./HowtoApply";
import Scholarship from "./Scholarship";
import Testimonials from "./Testimonials";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Banner />
        <Features />
        <ApplyForm />
        <Campus />
        <Events />
        <Scholarship />
        <HowToApply />
        <Testimonials />
      </main>
    </div>
  );
}
