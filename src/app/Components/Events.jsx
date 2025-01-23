export default function Events() {
  const events = [
    {
      id: "01",
      title: "Edu Fest 2023: Igniting Minds Off On Transforming Lives",
      date: "Sep 24, 2024",
      time: "10:45 AM-01:30 PM",
      location: "Your Place",
    },
    {
      id: "02",
      title: "Mind Masters Workshop: Unlock Your Cognitive Potential",
      date: "Sep 24, 2024",
      time: "10:45 AM-01:30 PM",
      location: "Your Place",
    },
    {
      id: "03",
      title: "Tech Talks 2023: Navigating the Digital Frontier",
      date: "Sep 24, 2024",
      time: "10:45 AM-01:30 PM",
      location: "Your Place",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Alumni Event</h2>
            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition hover:bg-[#3F3D8C] hover:text-white py-10"
                >
                  <div className="text-4xl font-bold text-[#3F3D8C]">
                    {event.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Notice</h2>
              <button className="text-[#3F3D8C] hover:underline">
                View All →
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex gap-4 mb-6">
                <button className="px-4 py-2 bg-[#3F3D8C] text-white rounded">
                  Admission
                </button>
                <button className="px-4 py-2 hover:bg-gray-100 rounded">
                  Exam
                </button>
                <button className="px-4 py-2 hover:bg-gray-100 rounded">
                  Latest
                </button>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4 border-b-2 py-4">
                  <div className=" font-semibold items-center text-center">
                    <div className="text-green-500 text-xl">3</div>
                    <div className="text-gray-500 text-sm">Aug</div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="flex gap-4 border-b-2 py-4">
                  <div className="font-semibold items-center text-center">
                    <div className="text-green-500 text-xl">10</div>
                    <div className="text-gray-500 text-sm">Jul</div>
                  </div>
                  <p>
                    Urgent Notice: Campus Maintenance Work Scheduled for March
                    5th-7th.
                  </p>
                </div>

                <div className="flex gap-4 border-b-2 py-4">
                  <div className="font-semibold items-center text-center">
                    <div className="text-green-500 text-xl">11</div>
                    <div className="text-gray-500 text-sm">Jul</div>
                  </div>
                  <p>
                    Notice of Guest Lecture: Dr. John Smith on Neuroscience
                    Advances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
