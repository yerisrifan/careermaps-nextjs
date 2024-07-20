import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Hero } from "@/components/hero";

const popular_jobs = [
  "Project Manager",
  "Software Engineer",
  "Data Analyst",
  "Product Manager",
  "UX Designer",
  "Marketing Manager",
  "Sales Manager",
  "HR Manager",
  "Accountant",
  "Business Analyst",
  "Customer Service",
  "Sales Representative",
  "Graphic Designer",
  "Web Developer",
  "Nurse",
];

const countries = [
  {
    name: "United States (US)",
    flag: "/flags/US.png",
    jobs: "450,000+",
    growth: "High",
  },
  {
    name: "Canada (CA)",
    flag: "/flags/CA.png",
    jobs: "200,000+",
    growth: "Moderate",
  },
  {
    name: "United Kingdom (GB)",
    flag: "/flags/UK.png",
    jobs: "270,000+",
    growth: "Steady",
  },
  {
    name: "South Korea (KR)",
    flag: "/flags/KR.png",
    jobs: "180,000+",
    growth: "Steady",
  },
  {
    name: "Germany (DE)",
    flag: "/flags/DE.png",
    jobs: "320,000+",
    growth: "Rapid",
  },
  {
    name: "Australia (AU)",
    flag: "/flags/AU.png",
    jobs: "150,000+",
    growth: "High",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
        <section className="flex flex-col items-center justify-center gap-10 text-white bg-foreground w-full p-4 md:p-8 rounded-md">
          <h2 className="text-2xl font-bold">Countries for Job Seekers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((country, index) => (
              <div key={index} className="bg-black/10 p-10 space-y-4">
                <Image
                  src={country.flag}
                  alt={`${country.name} flag`}
                  width={22}
                  height={13}
                />
                <h3 className="font-bold">{country.name}</h3>
                <p className="text-secondary text-sm">
                  {/* Add a brief description for each country */}
                </p>
                <div className="flex justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src="/jobs.png"
                      alt="Number of jobs"
                      width={16}
                      height={16}
                    />
                    <span className="text-xs text-secondary">
                      {country.jobs}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src="/charts.png"
                      alt="Job market growth"
                      width={16}
                      height={16}
                    />
                    <span className="text-xs text-secondary">
                      {country.growth}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10 text-white mt-28">
          <div className="bg-foreground p-4 md:p-8">
            <Image
              src="/skills.png"
              alt="Illustration of job skills"
              width={600}
              height={600}
              layout="responsive"
            />
          </div>
          <div className="p-4 md:p-8 space-y-4 text-sm text-secondary">
            <div className="text-xs flex gap-3 items-center text-white ">
              <span className="bg-foreground px-4 py-1 text-primary rounded-md">
                Profile
              </span>
              stand out in the job market
            </div>
            <h2 className="font-bold text-2xl text-white">
              Be the candidate employers are looking for
            </h2>
            <p>
              Create a comprehensive profile and start receiving interview
              invites and job offers that align with your unique skills.
            </p>
            <p>
              Don't miss out on your dream job—get started today and make your
              profile stand out.
            </p>
            <Button size="sm" className="bg-primary text-white text-sm mt-4">
              Create now
            </Button>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-10 text-white w-full p-4 md:p-8">
          <h2 className="text-2xl font-bold text-white">Popular jobs in USA</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {popular_jobs.map((job, index) => (
              <Button
                key={index}
                size="sm"
                className="bg-foreground text-secondary"
              >
                {job}
              </Button>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
