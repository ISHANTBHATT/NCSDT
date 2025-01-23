// import Image from "next/image";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function AboutPage() {
//   return (
//     <div className="container mx-auto px-4 py-16 bg-gray-50">
//       <h1 className="text-4xl font-bold mb-8 text-center">About Our College</h1>
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <Image
//             src="/images/1.jpg"
//             alt="College campus"
//             width={600}
//             height={400}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//         <div>
//           <Tabs defaultValue="mission" className="w-full">
//             <TabsList className="grid w-full grid-cols-3">
//               <TabsTrigger value="mission">Mission</TabsTrigger>
//               <TabsTrigger value="vision">Vision</TabsTrigger>
//               <TabsTrigger value="values">Values</TabsTrigger>
//             </TabsList>
//             <TabsContent value="mission" className="mt-4">
//               <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
//               <p className="mb-2">
//                 To provide exceptional education and foster innovation in a
//                 diverse and inclusive environment.Lorem Ipsum is simply dummy
//                 text of the printing and typesetting industry. Lorem Ipsum has
//                 been the industry's standard dummy text ever since the 1500s,
//                 when an unknown printer took a galley of type and scrambled it
//                 to make a type specimen book.
//               </p>
//               <p>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book. It has
//                 survived not only five centuries, but also the leap into
//                 electronic typesetting, remaining essentially unchanged. It was
//                 popularised in the 1960s with the release of Letraset sheets
//                 containing Lorem Ipsum passages, and more recently with desktop
//                 publishing software like Aldus PageMaker including versions of
//                 Lorem Ipsum.
//               </p>
//             </TabsContent>
//             <TabsContent value="vision" className="mt-4">
//               <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
//               <p>
//                 To be a leading institution that shapes the future through
//                 education, research, and community engagement.
//               </p>
//               <p>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book. It has
//                 survived not only five centuries, but also the leap into
//                 electronic typesetting, remaining essentially unchanged. It was
//                 popularised in the 1960s with the release of Letraset sheets
//                 containing Lorem Ipsum passages, and more recently with desktop
//                 publishing software like Aldus PageMaker including versions of
//                 Lorem Ipsum.
//               </p>
//             </TabsContent>
//             <TabsContent value="values" className="mt-4">
//               <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
//               <ul className="list-disc list-inside">
//                 <li>Excellence in teaching and learning</li>
//                 <li>Diversity and inclusion</li>
//                 <li>Innovation and creativity</li>
//                 <li>Community engagement</li>
//               </ul>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//       <div>
//         <h2 className="text-2xl font-semibold mb-2 mt-8">Our History</h2>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Book, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our College</h1>

      {/* Main content */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image
            src="/images/7.jpg"
            alt="College campus"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="mt-4">
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="mb-2">
                To provide exceptional education and foster innovation in a
                diverse and inclusive environment. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </p>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </TabsContent>
            <TabsContent value="vision" className="mt-4">
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="mb-2">
                To be a leading institution that shapes the future through
                education, research, and community engagement.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </TabsContent>
            <TabsContent value="values" className="mt-4">
              <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
              <ul className="list-disc list-inside">
                <li>Excellence in teaching and learning</li>
                <li>Diversity and inclusion</li>
                <li>Innovation and creativity</li>
                <li>Community engagement</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* History Milestones */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our History</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <CalendarDays className="w-12 h-12 mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">1950 - College Founded</h3>
              <p className="text-sm text-muted-foreground">
                Our institution was established with a vision to provide quality
                education.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Book className="w-12 h-12 mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">1975 - New Library</h3>
              <p className="text-sm text-muted-foreground">
                A state-of-the-art library was inaugurated to support research
                and learning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Award className="w-12 h-12 mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">2000 - Accreditation</h3>
              <p className="text-sm text-muted-foreground">
                The college received national accreditation for its academic
                excellence.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Users className="w-12 h-12 mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">
                2022 - Diversity Initiative
              </h3>
              <p className="text-sm text-muted-foreground">
                A comprehensive program to promote inclusivity and diversity was
                introduced.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Faculty Highlights */}
      {/* <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Faculty Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <Image
                  src={`/images/person${i}.jpg`}
                  alt={`Faculty ${i}`}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  Dr. John Doe {i}
                </h3>
                <p className="text-center mb-2 text-muted-foreground">
                  Professor of Computer Science
                </p>
                <div className="flex justify-center gap-2">
                  <Badge>AI</Badge>
                  <Badge>Machine Learning</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}

      {/* Photo Gallery */}
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-center">Campus Life</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[21, 18, 17, 16, 15, 11, 9, 12].map((i) => (
            <Image
              key={i}
              src={`/images/${i}.jpg`}
              alt={`Campus life ${i}`}
              width={300}
              height={300}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
