// "use client";

// import { ClientLogo } from "./Client-logo";

// const clients = Array.from({ length: 7 }, (_, i) => ({
//   src: `/images/client-${i + 1}.png`,
//   alt: `Client ${i + 1} logo`,
// }));

// function MarqueeRow({ direction }) {
//   return (
//     <div className="flex w-full">
//       {[0, 1].map((_, index) => (
//         <div
//           key={index}
//           className={`animate-marquee-${direction} flex min-w-full shrink-0 items-center justify-around gap-8`}
//           aria-hidden={index === 1}
//         >
//           {clients.map((client, clientIndex) => (
//             <ClientLogo key={clientIndex} {...client} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function Clients() {
//   return (
//     <div className="relative flex flex-col gap-8 overflow-hidden py-20">
//       <MarqueeRow direction="right" />
//     </div>
//   );
// }

"use client";

import { ClientLogo } from "./Client-logo";

const clients = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/client-${i + 1}.png`,
  alt: `Client ${i + 1} logo`,
}));

function MarqueeRow({ direction }) {
  return (
    <>
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .marquee-left {
          animation: marquee-left 120s linear infinite;
        }

        .marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>

      <div className="flex w-full overflow-hidden">
        {[0, 1].map((_, index) => (
          <div
            key={index}
            className={`${
              direction === "left" ? "marquee-left" : "marquee-right"
            } flex min-w-full shrink-0 items-center justify-around gap-8`}
            aria-hidden={index === 1}
          >
            {clients.map((client, clientIndex) => (
              <ClientLogo key={clientIndex} {...client} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default function Clients() {
  return (
    <div className="relative flex flex-col gap-8 overflow-hidden py-20">
      <MarqueeRow direction="right" />
    </div>
  );
}
