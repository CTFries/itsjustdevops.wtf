// File: app/page.tsx
import React from "react";

const opsTerms: string[] = [
  "GitOps",
  "SysOps",
  "DbOps",
  "DataOps",
  "SecOps",
  "InfraOps",
  "NetOps",
  "CloudOps",
  "AIOps",
  "MLOps",
];

export default function Home() {
  return (
    <main>
      <h1>It&apos;s Just DevOps, WTF?</h1>
      <p>
        Tired of all these *Ops terms? GitOps, SysOps, DbOps, DataOps, SecOps,
        InfraOps... the list goes on. But here&apos;s a shocking revelation:
      </p>
      <div className="ops-list">
        {opsTerms.map((op, index) => (
          <span key={index} className="ops-item">
            {op}
          </span>
        ))}
      </div>
      <p className="conclusion">
        It&apos;s all just DevOps applied to different domains!
      </p>
      <p>
        DevOps isn&apos;t just a set of practices; it&apos;s a philosophy. All
        these specialized &quot;Ops&quot; are simply DevOps principles applied
        to specific areas. So next time someone throws a new *Ops term at you,
        just remember: It&apos;s Just DevOps.
      </p>
    </main>
  );
}

// File: app/globals.css remains the same as before
